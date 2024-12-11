"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { IngredientInput } from "@/components/ingredient-input"
import { InstructionInput } from "@/components/instruction-input"
import { useState } from "react"
import { toast } from "sonner"

const recipeSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  cookingTime: z.string().min(1, "Cooking time is required"),
  servings: z.string().min(1, "Number of servings is required"),
})

export function RecipeForm() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [instructions, setInstructions] = useState<string[]>([])

  const form = useForm<z.infer<typeof recipeSchema>>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      title: "",
      description: "",
      cookingTime: "",
      servings: "",
    },
  })

  function onSubmit(values: z.infer<typeof recipeSchema>) {
    if (ingredients.length === 0) {
      toast.error("Please add at least one ingredient")
      return
    }

    if (instructions.length === 0) {
      toast.error("Please add at least one instruction")
      return
    }

    // Here you would typically send the data to your backend
    console.log({ ...values, ingredients, instructions })
    toast.success("Recipe submitted successfully!")
    form.reset()
    setIngredients([])
    setInstructions([])
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipe Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter recipe title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your recipe"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="cookingTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cooking Time (minutes)</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="servings"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Servings</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <IngredientInput
          ingredients={ingredients}
          setIngredients={setIngredients}
        />

        <InstructionInput
          instructions={instructions}
          setInstructions={setInstructions}
        />

        <Button type="submit" className="w-full">Submit Recipe</Button>
      </form>
    </Form>
  )
}