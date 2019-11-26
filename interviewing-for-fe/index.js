/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:

  1. Create a "Foods" class or constructor that will take two arguments: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list

  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
*/

/* DO NOT MODIFY */
const rootElement = document.querySelector('.foods');

const foodData = [
  {
    id: 1,
    image: '🌮',
    name: 'taco'
  },
  {
    id: 2,
    image: '🍔',
    name: 'burger'
  },
  {
    id: 3,
    image: '🍆',
    name: 'eggplant'
  },
  {
    id: 4,
    image: '🍎',
    name: 'apple'
  },
  {
    id: 5,
    image: '🥞',
    name: 'pancakes'
  }
];
/* DO NOT MODIFY */

/** YOUR CODE BELOW **/
class Foods {
  constructor(domRootElement, foodItems) {
    this._domRootElement = domRootElement;
    this._foodItems = foodItems;
  }

  foodsListHtml() {
    return this._foodItems.reduce((accumulator, current, index, sourceArray) => {
      return `${accumulator}<li class="foodItem" style='cursor: pointer;' title="Click to remove">${current.image} ${current.name}</li>`;
    }, '');
  }

  addEventListeners() {
    this._domRootElement.addEventListener('click', event => {
      this.removeFoodItem.call(this, event);
    });
  }

  removeFoodItem(event) {
    try {
      if (event.target.className === 'foodItem') {
        event.target.remove();
      }
    } catch (e) {
      this.renderError(`Sorry, we couldn't remove the item you clicked`);
    }
  }

  renderError(errorMessage) {
    const error = document.createElement('p');
    error.style.color = 'red';
    error.innerHTML = errorMessage;
    this._domRootElement.appendChild(error);
    const removeErrorTimeout = window.setTimeout(() => {
      error.remove();
      window.clearTimeout(removeErrorTimeout);
    }, 5000);
  }

  renderFoodItems() {
    const list = document.createElement('ul');
    list.innerHTML = this.foodsListHtml();
    this._domRootElement.appendChild(list);
  }

  render() {
    try {
      this.renderFoodItems();
      this.addEventListeners();
      return this;
    } catch (e) {
      this.renderError(`Sorry, we couldn't render the food data you provided`);
      return false;
    }
  }
}

const foods = new Foods(rootElement, foodData);
// foods.render();

// module.exports = Foods;
