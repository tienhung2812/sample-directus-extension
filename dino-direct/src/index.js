export default ({ filter, action }) => {
  filter("items.create", () => {
    console.log("Creating Item!");
    console.log("Item created!");
  });

  action("items.create", () => {
    console.log("Item created!");
  });
};
