"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface IngredientInputProps {
  ingredients: string[]
  setIngredients: (ingredients: string[]) => void
}

export function IngredientInput({ ingredients, setIngredients }: IngredientInputProps) {
  const [newIngredient, setNewIngredient] = useState("")

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()])
      setNewIngredient("")
    }
  }

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Ingredients
      </label>
      
      <div className="flex gap-2">
        <Input
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          placeholder="Add an ingredient"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              addIngredient()
            }
          }}
        />
        <Button type="button" onClick={addIngredient}>
          Add
        </Button>
      </div>

      <div className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-secondary p-2 rounded-md"
          >
            <span className="flex-grow">{ingredient}</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeIngredient(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}