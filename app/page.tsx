import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import PokemonPage from "@/registry/new-york/blocks/complex-component/page"
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { Button } from "@/registry/new-york/ui/button"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Button
            </h2>
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>

          <div className="flex items-center justify-center min-h-[400px] relative">

            <Button size="sm" variant="default">
              SM default
            </Button>

            <Button size="md" variant="default">
              MD default
            </Button>

            <Button size="lg" variant="default">
              LG default
            </Button>
            
          </div>
          
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Test
            </h2>
            
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            {/* <ExampleCard /> */}
          </div>
        </div>

      </main>
    </div>
  )
}
