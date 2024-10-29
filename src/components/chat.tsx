'use client'

import { Bot, Send, X } from 'lucide-react'
import { Button } from './shadcn-ui/button'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './shadcn-ui/card'
import { Input } from './shadcn-ui/input'

export function Chat() {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2">
      {open && (
        <Card className="min-w-[320px]">
          <CardHeader>
            <CardTitle>ChatBot</CardTitle>
          </CardHeader>
          <CardContent>Coé</CardContent>
          <CardFooter>
            <form className="flex h-8 w-full gap-2">
              <Input className="h-full w-full" />
              <Button className="h-8" type="submit">
                <Send className="size-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
      <Button
        className="group right-0 rounded-full"
        size="icon"
        data-open={open}
        variant={open ? 'destructive' : 'default'}
        onClick={() => handleClick()}
      >
        <X className="group-data-[open=true]:rotate-100 absolute size-5 rotate-0 scale-0 transition-all group-data-[open=true]:scale-100" />
        <Bot className="size-5 rotate-90 scale-0 transition-all group-data-[open=false]:rotate-0 group-data-[open=false]:scale-100" />
      </Button>
    </div>
  )
}
