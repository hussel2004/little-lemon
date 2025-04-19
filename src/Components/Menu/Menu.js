// src/components/Menu.js

import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const categories = [
    
    {
      title: "Starters (Appetizers)",
      items: [
        {
            name: "Warm goat cheese salad",
            price: "€9",
            description:
              "Grilled goat cheese on toast, served over mixed greens with walnuts and honey vinaigrette.",
            image: "./images/menuImg/starters/salad-with-warm-goat-cheese.jpg",
          },
        {
          name: "Duck foie gras on toasted brioche",
          price: "€14",
          description:
            "Delicate duck liver pâté served on warm, buttery brioche with a touch of fig jam.",
          image: "https://via.placeholder.com/300x200?text=Foie+Gras",
        },
        
        {
          name: "Salmon tartare with avocado",
          price: "€12",
          description:
            "Fresh diced salmon with lime, herbs, and creamy avocado, served chilled.",
          image: "https://via.placeholder.com/300x200?text=Salmon+Tartare",
        },
        {
          name: "French onion soup",
          price: "€8",
          description:
            "Caramelized onions in a rich broth, topped with melted cheese and toasted croutons.",
          image: "https://via.placeholder.com/300x200?text=Onion+Soup",
        },
      ],
    },
    {
      title: "Main Courses",
      items: [
        {
          name: "Duck breast with honey-spice glaze",
          price: "€20",
          description:
            "Seared duck breast with a sweet and spiced glaze, served with dauphinoise potatoes.",
          image: "./images/menuImg/mainCourses/duck-breast-with-honey-spices.jpg",
        },
        {
          name: "Beef filet with pepper sauce",
          price: "€24",
          description:
            "Tender beef filet with a creamy green peppercorn sauce and mashed potatoes.",
          image: "https://via.placeholder.com/300x200?text=Beef+Filet",
        },
        {
          name: "Mushroom risotto",
          price: "€17",
          description:
            "Creamy Arborio rice with wild mushrooms, garlic, and Parmesan.",
          image: "https://via.placeholder.com/300x200?text=Risotto",
        },
      ],
    },
    {
      title: "Cheese Course",
      items: [
        {
          name: "Assorted aged cheeses",
          price: "€9",
          description:
            "Brie, Comté, Roquefort served with nuts and dried fruit.",
          image: "./images/menuImg/cheeseCourses/assorted-cheese.jpg",
        },
        {
          name: "Warm goat cheese with fig jam",
          price: "€8",
          description:
            "Melted goat cheese on toast, paired with sweet fig jam.",
          image: "https://via.placeholder.com/300x200?text=Goat+Cheese",
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Tarte Tatin",
          price: "€8",
          description:
            "Upside-down caramelized apple tart with vanilla ice cream.",
          image: "./images/menuImg/desserts/tarte-tartin.jpg",
        },
        {
          name: "Dark chocolate mousse",
          price: "€7",
          description:
            "Silky mousse made with dark chocolate and sea salt.",
          image: "https://via.placeholder.com/300x200?text=Chocolate+Mousse",
        },
      ],
    },
    {
      title: "Wines",
      items: [
        {
          name: "Red wine (Saint-Émilion)",
          price: "€6 / €25",
          description: "Bold and structured red, perfect for red meat.",
          image: "./images/menuImg/wines/red-wine-saint-emilion.png",
        },
        {
          name: "White wine (Sancerre)",
          price: "€6 / €26",
          description: "Crisp white wine, ideal for seafood.",
          image: "https://via.placeholder.com/300x200?text=White+Wine",
        },
      ],
    },
    {
      title: "Drinks",
      items: [
        {
          name: "Espresso",
          price: "€2.50",
          description: "Rich Italian-style coffee shot.",
          image: "./images/menuImg/drinks/expresso.jpg",
        },
        {
          name: "Tea",
          price: "€3.50",
          description: "A calming selection of loose-leaf teas.",
          image: "https://via.placeholder.com/300x200?text=Tea",
        },
      ],
    },
    {
      title: "Whiskies",
      items: [
        {
          name: "Single Malt Scotch",
          price: "€9–12",
          description: "Smooth and complex with oak and vanilla.",
          image: "./images/menuImg/whiskies/single-malt-scotch.jpg",
        },
        {
          name: "Japanese Whisky",
          price: "€10–14",
          description: "Elegant with floral and smoky notes.",
          image: "https://via.placeholder.com/300x200?text=Japanese+Whisky",
        },
      ],
    },
    {
      title: "Digestifs",
      items: [
        {
          name: "Cognac",
          price: "€8–10",
          description: "Aged French brandy with fruit and spice.",
          image: "./images/menuImg/digestifs/cognac.jpg",
        },
        {
          name: "Limoncello",
          price: "€6",
          description: "Sweet lemon liqueur, served chilled.",
          image: "https://via.placeholder.com/300x200?text=Limoncello",
        },
      ],
    },
  ];

  const [categoryIndexes, setCategoryIndexes] = useState(
    categories.map(() => 0)
  );

  const handleItemChange = (catIndex, dir) => {
    const current = categoryIndexes[catIndex];
    const max = categories[catIndex].items.length - 1;
    const newIndexes = [...categoryIndexes];
    newIndexes[catIndex] =
      dir === "next" ? Math.min(current + 1, max) : Math.max(current - 1, 0);
    setCategoryIndexes(newIndexes);
  };

  return (
    <>
        <h1 style={{textAlign:"center"}}>MENU</h1>
    <div className="menu-grid">
       
      {categories.map((category, catIdx) => {
        const currentItem = category.items[categoryIndexes[catIdx]];
        return (
          <div key={catIdx} className="category-card">
            <h2 className="category-title">{category.title}</h2>
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="item-image"
            />
            <h3 className="item-name">{currentItem.name}</h3>
            <p className="item-price">{currentItem.price}</p>
            <p className="item-description">{currentItem.description}</p>
            <div className="card-buttons">
              <button
                onClick={() => handleItemChange(catIdx, "prev")}
                disabled={categoryIndexes[catIdx] === 0}
              >
                Previous
              </button>
              <button
                onClick={() => handleItemChange(catIdx, "next")}
                disabled={
                  categoryIndexes[catIdx] === category.items.length - 1
                }
              >
                Next
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </>
    
  );
};

export default Menu;
