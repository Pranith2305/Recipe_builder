import { Recipe } from "./types"

export function getFeaturedRecipes(): Recipe[] {
  return getAllRecipes().slice(0, 3)
}

export function getAllRecipes(): Recipe[] {
  return [
    {
      id: "1",
      title: "Classic Margherita Pizza",
      description: "Traditional Italian pizza with fresh basil and mozzarella",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop",
      cookingTime: 30,
      servings: 4,
      ingredients: ["Pizza dough", "Tomatoes", "Mozzarella", "Basil", "Olive oil"],
      instructions: ["Prepare dough", "Add toppings", "Bake at high temperature"],
      author: {
        name: "Chef Maria",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop"
      },
      createdAt: "2024-01-15"
    },
    {
      id: "2",
      title: "Vegetarian Buddha Bowl",
      description: "Healthy bowl packed with colorful vegetables and grains",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop",
      cookingTime: 25,
      servings: 2,
      ingredients: ["Quinoa", "Chickpeas", "Kale", "Sweet potato", "Avocado"],
      instructions: ["Cook quinoa", "Roast vegetables", "Assemble bowl"],
      author: {
        name: "Chef Alex",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop"
      },
      createdAt: "2024-01-14"
    },
    {
      id: "3",
      title: "Chocolate Lava Cake",
      description: "Decadent dessert with a molten chocolate center",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop",
      cookingTime: 20,
      servings: 2,
      ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour"],
      instructions: ["Melt chocolate", "Mix ingredients", "Bake until edges are set"],
      author: {
        name: "Chef Sarah",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop"
      },
      createdAt: "2024-01-13"
    },
    {
      id: "4",
      title: "Spicy Thai Curry",
      description: "Aromatic curry with coconut milk and fresh vegetables",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop",
      cookingTime: 45,
      servings: 4,
      ingredients: ["Coconut milk", "Curry paste", "Vegetables", "Rice", "Lime"],
      instructions: ["Prepare curry paste", "Cook vegetables", "Simmer with coconut milk"],
      author: {
        name: "Chef Tom",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop"
      },
      createdAt: "2024-01-12"
    }
  ]
}