import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Cook Together, Create Together
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our community of food lovers to discover, create, and share amazing recipes.
          Get inspired by what's in your fridge!
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contribute">Share Your Recipe</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/recipes">Explore Recipes</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}