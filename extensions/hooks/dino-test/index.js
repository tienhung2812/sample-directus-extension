"use strict";

function defineHook(config) {
  return config;
}

var index = defineHook(({ filter, action }) => {
  filter("items.create", () => {
    console.log("Creating Item 123!");
    debugger;
  });
  action("items.create", () => {
    console.log("Item created!");
  });
});

module.exports = index;
