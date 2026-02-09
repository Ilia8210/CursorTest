import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">Shadcn sign-in page</h1>
                <p className="text-muted-foreground">
                    Open the sign-in experience and see the UI in action.
                </p>
            </div>
            <Button asChild>
                <Link href="/sign-in">Go to sign in</Link>
            </Button>
        </main>
    )
}
