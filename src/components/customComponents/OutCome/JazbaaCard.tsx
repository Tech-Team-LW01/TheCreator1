import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function JazbaaCard() {
  return (
    
      <Card className="w-full max-w-sm bg-zinc-900 text-white">
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold">Showcase your Summer Product  </h2>
            <div className="space-x-2">
              <span>to investors at</span>
              <span className="text-red-600 font-semibold">JAZBAA 4.0</span>
            </div>
          </div>

          <p className="text-center text-gray-300 text-sm leading-relaxed">
            {'An unique placement platform where it is "Each Day, One Core Tech Based Company"'}
          </p>
        </CardContent>

        <CardFooter className="flex justify-center pb-6">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8">APPLY NOW</Button>
        </CardFooter>
      </Card>

  )
}

