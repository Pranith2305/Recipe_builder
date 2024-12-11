"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function RecipeFilters() {
  const [cookingTime, setCookingTime] = useState<[number, number]>([0, 120])
  const [servings, setServings] = useState<[number, number]>([1, 12])

  const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Vegetarian",
    "Vegan",
    "Gluten-free",
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <Button variant="outline" size="sm" className="w-full">
          Clear All
        </Button>
      </div>

      <Separator />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor={category} className="ml-2">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cooking-time">
          <AccordionTrigger>Cooking Time</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <Label>Min Time (minutes)</Label>
                <Input
                  type="number"
                  min="0"
                  max={cookingTime[1]}
                  value={cookingTime[0]}
                  onChange={(e) =>
                    setCookingTime([Number(e.target.value), cookingTime[1]])
                  }
                />
              </div>
              <div>
                <Label>Max Time (minutes)</Label>
                <Input
                  type="number"
                  min={cookingTime[0]}
                  value={cookingTime[1]}
                  onChange={(e) =>
                    setCookingTime([cookingTime[0], Number(e.target.value)])
                  }
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="servings">
          <AccordionTrigger>Servings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <Label>Min Servings</Label>
                <Input
                  type="number"
                  min="1"
                  max={servings[1]}
                  value={servings[0]}
                  onChange={(e) =>
                    setServings([Number(e.target.value), servings[1]])
                  }
                />
              </div>
              <div>
                <Label>Max Servings</Label>
                <Input
                  type="number"
                  min={servings[0]}
                  value={servings[1]}
                  onChange={(e) =>
                    setServings([servings[0], Number(e.target.value)])
                  }
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}