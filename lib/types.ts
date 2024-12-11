export interface Recipe {
  id: string
  title: string
  description: string
  image: string
  cookingTime: number
  servings: number
  ingredients: string[]
  instructions: string[]
  author: {
    name: string
    avatar: string
  }
  createdAt: string
}