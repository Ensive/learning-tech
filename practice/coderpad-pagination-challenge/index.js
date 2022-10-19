//Instructions: Display users in a table and add pagination controls.
//  Try to use the useState hook.


// users should be displayed in paginated table
const users = [
  {id: 1, name: 'Billy', role: 'Software Engineer'},
  {id: 2, name: 'Jimmy', role: 'Secretary'},
  {id: 3, name: 'Kate', role: 'Teacher'},
  {id: 4, name: 'Sarah', role: 'Web Developer'},
  {id: 5, name: 'Joe', role: 'Farmer'},
  {id: 6, name: 'Tim', role: 'CEO'},
  {id: 7, name: 'Adam', role: 'Mechanic'},
  {id: 8, name: 'Sally', role: 'ECE'},
  {id: 9, name: 'Amy', role: 'Doctor'},
  {id: 10, name: 'Peter', role: 'Nurse'},
]

// returnPaginatedUsers returns slice of users array
// offset is start index for slice
// limit is how many users to return
function returnPaginatedUsers(users, offset, limit){
  return users.slice(offset, offset + limit)
}

// useState hook
const { useState } = React

function Table(){
    return (
      <table>
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
      </table>
  )}

function App() {
  return (
    <div>
      <Table />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
