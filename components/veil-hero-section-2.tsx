import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function VeilHeroSection2() {
    return (
        <section className="relative overflow-hidden bg-background">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 right-[-10%] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-24 left-[-10%] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                        Veil security platform
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                            Protect every session without friction
                        </h1>
                        <p className="text-muted-foreground">
                            Monitor sign-ins, stop suspicious activity, and keep your team moving
                            with continuous identity verification built for modern SaaS.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Button asChild>
                            <Link href="/sign-in">Get started</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="#">Book a demo</Link>
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
                        <div>
                            <p className="text-lg font-semibold text-foreground">99.99%</p>
                            <p>Uptime</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-foreground">120k</p>
                            <p>Protected sessions</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-foreground">24/7</p>
                            <p>Threat monitoring</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border bg-card p-6 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Security dashboard</span>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-1 font-medium text-emerald-600">
                            All systems normal
                        </span>
                    </div>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-2xl border bg-background p-4">
                            <p className="text-sm font-medium">Risk score</p>
                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-2xl font-semibold">12</span>
                                <span className="text-xs text-muted-foreground">Low risk</span>
                            </div>
                            <div className="mt-3 h-2 w-full rounded-full bg-muted">
                                <div className="h-2 w-1/4 rounded-full bg-primary" />
                            </div>
                        </div>

                        <div className="rounded-2xl border bg-background p-4">
                            <p className="text-sm font-medium">Active locations</p>
                            <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                                <span>New York, Berlin, Singapore</span>
                                <span>+4</span>
                            </div>
                        </div>

                        <div className="rounded-2xl border bg-background p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium">Device policy</p>
                                    <p className="text-xs text-muted-foreground">
                                        Enforced across 96 devices
                                    </p>
                                </div>
                                <Button size="sm" variant="secondary">
                                    Review
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 rounded-2xl border bg-background p-4">
                        <p className="text-sm font-medium">Next recommended action</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Enable hardware keys for admin accounts to reduce account takeover risk.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
