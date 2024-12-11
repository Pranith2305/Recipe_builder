"use client"

import { RecipeForm } from "@/components/recipe-form"
import { ContributeHero } from "@/components/contribute-hero"

export default function ContributePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ContributeHero />
      <RecipeForm />
    </div>
  )
}