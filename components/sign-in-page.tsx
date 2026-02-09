import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-2">
                <section className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                        Secure sign-in for teams
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Welcome back
                        </h1>
                        <p className="text-muted-foreground">
                            Access your workspace, manage projects, and keep your team in sync
                            with a single sign-in.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border bg-card p-4">
                            <p className="text-sm font-medium">Single sign-on</p>
                            <p className="text-sm text-muted-foreground">
                                Connect your identity provider in minutes.
                            </p>
                        </div>
                        <div className="rounded-2xl border bg-card p-4">
                            <p className="text-sm font-medium">Security by default</p>
                            <p className="text-sm text-muted-foreground">
                                MFA, device policies, and audit logs included.
                            </p>
                        </div>
                        <div className="rounded-2xl border bg-card p-4">
                            <p className="text-sm font-medium">Smart onboarding</p>
                            <p className="text-sm text-muted-foreground">
                                Invite teammates with roles and permissions.
                            </p>
                        </div>
                        <div className="rounded-2xl border bg-card p-4">
                            <p className="text-sm font-medium">Always in sync</p>
                            <p className="text-sm text-muted-foreground">
                                Keep sessions secure across all your devices.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Trusted by 2,000+ teams</span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                        <span>ISO 27001 certified</span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                        <span>99.9% uptime</span>
                    </div>
                </section>

                <Card className="w-full">
                    <CardHeader className="space-y-2">
                        <CardTitle>Sign in</CardTitle>
                        <CardDescription>
                            Use your work email to continue or sign in with a provider.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Button variant="outline" type="button">
                                Continue with Google
                            </Button>
                            <Button variant="outline" type="button">
                                Continue with GitHub
                            </Button>
                        </div>
                        <div className="relative">
                            <Separator />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                                or
                            </span>
                        </div>
                        <form className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@company.com"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="#"
                                        className="text-xs font-medium text-primary hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label
                                        htmlFor="remember"
                                        className="text-sm font-normal text-muted-foreground">
                                        Remember this device
                                    </Label>
                                </div>
                                <span className="text-xs text-muted-foreground">
                                    Need access?{' '}
                                    <Link href="#" className="font-medium text-primary hover:underline">
                                        Request invite
                                    </Link>
                                </span>
                            </div>
                            <Button type="submit" className="w-full">
                                Sign in
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span>New here?</span>
                        <Link href="#" className="font-medium text-primary hover:underline">
                            Create an account
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
