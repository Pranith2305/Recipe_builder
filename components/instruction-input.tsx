"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface InstructionInputProps {
  instructions: string[]
  setInstructions: (instructions: string[]) => void
}

export function InstructionInput({ instructions, setInstructions }: InstructionInputProps) {
  const [newInstruction, setNewInstruction] = useState("")

  const addInstruction = () => {
    if (newInstruction.trim()) {
      setInstructions([...instructions, newInstruction.trim()])
      setNewInstruction("")
    }
  }

  const removeInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Instructions
      </label>
      
      <div className="flex flex-col gap-2">
        <Textarea
          value={newInstruction}
          onChange={(e) => setNewInstruction(e.target.value)}
          placeholder="Add an instruction"
          className="resize-none"
        />
        <Button type="button" onClick={addInstruction}>
          Add Instruction
        </Button>
      </div>

      <div className="space-y-2">
        {instructions.map((instruction, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-secondary p-2 rounded-md"
          >
            <span className="flex-grow">
              {index + 1}. {instruction}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeInstruction(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}