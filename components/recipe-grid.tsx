import { RecipeCard } from "@/components/recipe-card"
import { getAllRecipes } from "@/lib/recipes"

export function RecipeGrid() {
  const recipes = getAllRecipes()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}