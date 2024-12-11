import { FeaturedRecipes } from '@/components/featured-recipes'
import { SearchBar } from '@/components/search-bar'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <SearchBar />
      <FeaturedRecipes />
    </div>
  )
}