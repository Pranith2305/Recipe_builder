import { RecipeCard } from "@/components/recipe-card"
import { getFeaturedRecipes } from "@/lib/recipes"

export function FeaturedRecipes() {
  const recipes = getFeaturedRecipes()

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}