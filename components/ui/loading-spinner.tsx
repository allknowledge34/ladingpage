import { Loader2 } from "lucide-react"

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-40">
      <Loader2 className="w-8 h-8 text-primary animate-spin" />
    </div>
  )
}

