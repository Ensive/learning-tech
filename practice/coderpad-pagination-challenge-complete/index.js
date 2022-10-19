//Instructions: Display users in a table and add pagination controls.
//  Try to use the useState hook.

// users should be displayed in paginated table
const users = [
  { id: 1, name: 'Billy', role: 'Software Engineer' },
  { id: 2, name: 'Jimmy', role: 'Secretary' },
  { id: 3, name: 'Kate', role: 'Teacher' },
  { id: 4, name: 'Sarah', role: 'Web Developer' },
  { id: 5, name: 'Joe', role: 'Farmer' },
  { id: 6, name: 'Tim', role: 'CEO' },
  { id: 7, name: 'Adam', role: 'Mechanic' },
  { id: 8, name: 'Sally', role: 'ECE' },
  { id: 9, name: 'Amy', role: 'Doctor' },
  { id: 10, name: 'Peter', role: 'Nurse' },
];

// returnPaginatedUsers returns slice of users array
// offset is start index for slice
// limit is how many users to return
function returnPaginatedUsers(users, offset, limit) {
  return users.slice(offset, offset + limit);
}

// useState hook
const { useState } = React;

// we pass users as prop to Table comp
// we render our users without pagination
// we create pagination component inside Table
// we introduce useState hook within table, so its local state of the table
// we keep handlers within table component since the state will be there too
// table is responsible for handling navigation and rendering users
// we could split in to parts, but for sake of getting to solutions we keep things simple

// we also manage state of pagination, what is the current page?
// who can change current page? - user, or we load through the page with page something. current page can be fed on load or it changes with user input
// what are edge cases? let's think about it at the end.

// limit is a static? for now yes, but then also can be changed.
// we should always have our offset. what is offset?
// depends on the page offset is the amount of users are on the left side from where we are at (index)
// lets start at page 0

// limit - static
// total pages = total / limit = 10 / 3 = 4 pages
// offset dynamic = page * limit
// page load, click next: page + 1, click prev: page - 1, click page page = page
// page 0 = offset 0
// page 1 = offset 3, start at 4
// page 2 = offset 6, start at 7
// page 3 = offset 9, start at 10
// how next works
// if page 0, and total pages > 1. show next
// if page > 0, and (page + 1) === total pages, hide next
// if page > 0, and (page + 1) !== total pages, show next
// how prev works
// if page 0, hide prev
// if page > 0, show prev

function Table({ users }) {
  const SHOW_PER_PAGE = 3;
  const TOTAL_PAGES = Math.ceil(users.length / SHOW_PER_PAGE);
  const pages = Array.from(Array(TOTAL_PAGES).keys());
  const [page, setPage] = useState(0);
  let offset = SHOW_PER_PAGE * page; // calculated

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {returnPaginatedUsers(users, offset, SHOW_PER_PAGE).map(
            ({ id, name, role }) => {
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{role}</td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
      <div>
        {hasPrev() && (
          <button onClick={() => onPageChange(page - 1)} class="button">
            {'<'}
          </button>
        )}
        {pages.map((p) => {
          const className =
            page === p
              ? 'button button--page is-active'
              : 'button button--page';
          return (
            <button onClick={() => onPageChange(p)} class={className}>
              {p + 1}
            </button>
          );
        })}
        {hasNext() && (
          <button onClick={() => onPageChange(page + 1)} class="button">
            {'>'}
          </button>
        )}
      </div>
    </div>
  );

  function hasPrev() {
    if (page === 0) return false;
    if (page > 0) return true;
    return true;
  }

  function hasNext() {
    // how next works
    // if page 0, and total pages > 1. show next
    // if page > 0, and (page + 1) === total pages, hide next
    // if page > 0, and (page + 1) !== total pages, show next
    if (page === 0 && TOTAL_PAGES > 1) return true;
    if (page > 0 && page + 1 === TOTAL_PAGES) return false;
    if (page > 0 && page + 1 !== TOTAL_PAGES) return true;
    return true;
  }

  function onPageChange(page) {
    setPage(page);
  }
}

function App() {
  return (
    <div>
      <Table users={users} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
