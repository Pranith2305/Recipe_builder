import { RecipeFilters } from "@/components/recipe-filters"
import { RecipeGrid } from "@/components/recipe-grid"
import { RecipeSort } from "@/components/recipe-sort"

export default function RecipesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Recipes</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <RecipeFilters />
        </aside>
        <main className="flex-1">
          <div className="mb-6">
            <RecipeSort />
          </div>
          <RecipeGrid />
        </main>
      </div>
    </div>
  )
}