// jest.mock('./index.js');
// var jest = require('jest');
var Foods = require('./index');

describe('Foods', () => {
  const domElement = {
    appendChild: jest.fn()
  };

  describe('render', () => {
    test('calls renderFoodItems() when data is valid', () => {
      // setup
      const foods = new Foods(domElement, {});
      const renderFoodItemsSpy = jest.spyOn(foods, 'renderFoodItems');
      const renderErrorSpy = jest.spyOn(foods, 'renderError');

      // act
      foods.render();

      // assert
      expect(renderErrorSpy).toHaveBeenCalledTimes(1);
      expect(renderFoodItemsSpy).toHaveBeenCalledTimes(1);
      expect(domElement.appendChild).toHaveBeenCalledTimes(1);
    });

    test('calls renderError() when data is invalid', () => {
      const foods = new Foods(domElement, undefined);
      foods.render();

      expect(foods.foodItems).toBe(undefined);
      expect(foods.domRootElement).toBe(domElement);
    });
  });
});
