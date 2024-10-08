'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;
    list.append(listItem);

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      createTree(listItem, data[key]);
    }
  }

  element.append(list);
}

createTree(tree, food);
