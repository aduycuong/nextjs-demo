import { connection } from "next/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function Home() {
  await connection();

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js + shadcn/ui
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern Next.js 16 project with shadcn/ui components
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
              <CardDescription>
                Various button styles and variants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input Component</CardTitle>
              <CardDescription>
                Text input with shadcn styling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input type="text" placeholder="Enter your name" />
              <Input type="email" placeholder="Email address" />
              <Input type="password" placeholder="Password" />
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>
                This entire interface is built with shadcn/ui components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                shadcn/ui is now successfully integrated into this Next.js 16 project.
                The project includes:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Tailwind CSS v4 with CSS variables</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>shadcn/ui components (Button, Card, Input)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>TypeScript configuration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Utility functions and proper project structure</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
