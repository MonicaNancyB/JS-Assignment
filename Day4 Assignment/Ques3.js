shoppingList = ["Maggi", "Eggs", "Butter", "Cheese","Tomato Ketchup"];
shoppingList.push("Chat Masala");
console.log("shoppingList:", shoppingList);

shoppingBasket = [
  "Channa Dhal",
  "Butter Beans",
  "Greean Peas",
  ...shoppingList,
  "Peanut Butter",
  "Mixed Fruit Jam",
];
shoppingBasket.push("Red Chilli Flakes");

console.log("shoppingBasket:", shoppingBasket);