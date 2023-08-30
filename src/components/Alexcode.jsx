const menuItem = [
  {
    id: 1,
    name: "Angus Burger",
    price: 8.99,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1654878910519-b6117fbd5a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80",
    number: 1,
  },
  {
    id: 2,
    name: "Tuna Steak Burger",
    price: 15.0,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1504937551116-cb8097e6f02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
    number: 2,
  },
  {
    id: 3,
    name: "Bacon Burger",
    price: 11.5,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    number: 3,
  },
  {
    id: 4,
    name: "Southwest Chiken Burger",
    price: 9.99,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    number: 4,
  },
  {
    id: 5,
    name: "Cesar Salad",
    price: 6.5,
    category: "salad",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    number: 5,
  },
  {
    id: 6,
    name: "BBQ Chicken Salad",
    price: 13.5,
    category: "salad",
    image:
      "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    number: 6,
  },
  {
    id: 7,
    name: "Garden Salad",
    price: 9.99,
    category: "salad",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=984&q=80",
    number: 7,
  },
  {
    id: 8,
    name: "Veggie Lasagna",
    price: 17.99,
    category: "pasta",
    image:
      "https://images.unsplash.com/photo-1560035285-64808ba47bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    number: 8,
  },
  {
    id: 9,
    name: "Spaghetti & Meatballs",
    price: 17.99,
    category: "pasta",
    image:
      "https://plus.unsplash.com/premium_photo-1664478291780-0c67f5fb15e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    number: 9,
  },
  {
    id: 10,
    name: "Fettuccine Alfredo",
    price: 17.99,
    category: "pasta",
    image:
      "https://images.unsplash.com/photo-1664214649080-52c879182270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    number: 10,
  },
  {
    id: 11,
    name: "Banku & dry fish",
    price: 19.99,
    category: "local",
    image:
      "https://static.finmail.com/wp-content/uploads/2020/07/08110904/086f9295e4fb8360c93a01f7f94706b2.jpg",
    number: 11,
  },
  {
    id: 12,
    name: "Fufu and light soup",
    price: 19.31,
    category: "local",
    image:
      "https://i.pinimg.com/736x/d1/91/88/d19188f6dcc876c7181db2797e951b70.jpg",
    number: 12,
  },
  {
    id: 13,
    name: "Rice balls & groundnut soup",
    price: 16.51,
    category: "local",
    image:
      "https://travelandmunchies.com/wp-content/uploads/2022/11/IMG_9895.jpg",
    number: 13,
  },
  {
    id: 14,
    name: "Ghana Jollof",
    price: 10.13,
    category: "local",
    image:
      "https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16.jpg",
    number: 14,
  },
  {
    id: 15,
    name: "Orange juice",
    price: 5.13,
    category: "drink",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    number: 15,
  },
  {
    id: 16,
    name: "Mango juice",
    price: 5.43,
    category: "drink",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    number: 16,
  },
  {
    id: 17,
    name: "Lemonade",
    price: 5.22,
    category: "drink",
    image:
      "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    number: 17,
  },
  {
    id: 18,
    name: "Beer",
    price: 7.99,
    category: "drink",
    image:
      "https://images.unsplash.com/photo-1630446070374-df1ec648ac65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    number: 18,
  },
  {
    id: 19,
    name: "Chocolate ice cream",
    price: 13.99,
    category: "dessert",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2303&q=80",
    number: 19,
  },
  {
    id: 20,
    name: "Caramel cake",
    price: 14.8,
    category: "dessert",
    image:
      "https://images.unsplash.com/photo-1547414368-ac947d00b91d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    number: 20,
  },
  {
    id: 21,
    name: "Coffee cake",
    price: 19.77,
    category: "dessert",
    image:
      "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    number: 21,
  },
];

intent(
  "(menu|menu please|show me the menu|can i have the menu|let me have the me)",
  (p) => {
    p.play({ command: "getMenu", data: menuItem });
    p.play(`(here is the menue|here it is|there you have it)`);
  }
);

intent("hello my name is $(NAME)", (p) => {
  p.play(`Hello ${p.NAME.value}`);
});

intent("order by $(ORDER_BY name|price|category)", (p) => {
  const orderByField = p.ORDER_BY.value;
  let orderedmenuItems = menuItem;

  switch (orderByField) {
    case "name":
      orderedmenuItems = menuItem.sort((item1, item2) =>
        item1.name.localeCompare(item2.name)
      );
      break;
    case "price":
      orderedmenuItems = menuItem.sort(
        (item1, item2) => item1.price - item2.price
      );
      break;
    case "category":
      orderedmenuItems = menuItem.sort((item1, item2) =>
        item1.category.localeCompare(item2.categroy)
      );
      break;
    default:
  }

  p.play({ command: "orderedmenu", data: orderedmenuItems });
  p.play(`odering by ${p.ORDER_BY.value}`);
});

intent(
  "(do you have|do you have any|can I see the|show me the|let me see|what about) $(CATEGORY burgers|salads|pastas|locals|drinks|desserts)",
  //'(do you have|do you have any|can I see your) $(NOTAVAILABLE* .*)',
  (p) => {
    const categoryChoice = p.CATEGORY.value;
    let menuCategory = menuItem;

    //        if(p.NOTAVAILABLE){
    //            p.play("We do not have that at the moment.");
    //        }

    switch (categoryChoice) {
      case "burgers":
        menuCategory = menuItem.filter((item) => item.category === "burger");
        break;
      case "salads":
        menuCategory = menuItem.filter((item) => item.category === "salad");
        break;
      case "pastas":
        menuCategory = menuItem.filter((item) => item.category === "pasta");
        break;
      case "locals":
        menuCategory = menuItem.filter((item) => item.category === "local");
        break;
      case "drinks":
        menuCategory = menuItem.filter((item) => item.category === "drink");
        break;
      case "desserts":
        menuCategory = menuItem.filter((item) => item.category === "dessert");
        break;
      default:
    }
    p.play({ command: "menucategory", data: menuCategory });
    p.play(`here are all the ${p.CATEGORY.value} (available|that we have)`);
  }
);

const menuItemList = menuItem.map((item) => item.name).join("|");
intent(
  `add $(ITEM ${menuItemList}) (to cart|to the cart|"")`,
  "add $(UNAVAILABLE_ITEM* .*) to the cart",

  (p) => {
    if (p.UNAVAILABLE_ITEM) {
      p.play(
        "(this item is not available at the moment|this item is not on the menu today|sorry we donot have that at the momment)"
      );
    } else {
      const itemName = p.ITEM.value;
      const itemToSendToCart = menuItem.find((item) => {
        return item.name.toLowerCase() === itemName.toLowerCase();
      });
      p.play({ command: "addToCart", data: itemToSendToCart });
      p.play(`adding ${p.ITEM.value}`);
    }
  }
);

intent("(make payment|proceed to pay|initiate payment|pay|am done)", (p) => {
  p.play({ command: "makePayment", data: null });
  p.play(`initiating payment`);
});

intent("thank you", (p) => {
  p.play(`you are welcome Alex`);
});
