import { AppleIcon, GithubIcon, GoogleIcon } from "@/components/viserion/icons/social"
import Link from "next/link";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignUpForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className={cn("flex flex-col gap-6", className)}>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h1 className="text-2xl font-bold">Sign up your account</h1>
                            <p className="text-muted-foreground text-sm text-balance">
                                Enter your email below to login to your account
                            </p>
                        </div>
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="firstname">Firstname</Label>
                                <Input id="firstname" type="text" placeholder="Firstname" required />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="lastname">Lastname</Label>
                                <Input id="lastname" type="text" placeholder="Lastname" required />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="e@example.com" required />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password" placeholder="••••••••••" required />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password-repeat">Repeat Password</Label>
                                </div>
                                <Input id="password-repeat" type="password" placeholder="••••••••••" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Sign up
                            </Button>
                            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                <span className="text-muted-foreground relative z-10 px-2">
                                    Or continue with
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Button variant="outline" type="button" className="w-full">
                                    <GithubIcon />
                                    <span className="sr-only">Sign up with Github</span>
                                </Button>
                                <Button variant="outline" type="button" className="w-full">
                                    <AppleIcon />
                                    <span className="sr-only">Sign up with Apple</span>
                                </Button>
                                <Button variant="outline" type="button" className="w-full">
                                    <GoogleIcon />
                                    <span className="sr-only">Sign up with Google</span>
                                </Button>
                            </div>
                        </div>
                        <div className="text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/auth/login" className="underline underline-offset-4">
                                Login
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
                and <Link href="#">Privacy Policy</Link>.
            </div>
        </div>
    )
}
