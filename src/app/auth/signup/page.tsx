import Link from "next/link";
import { SignUpForm } from "@/components/viserion/auth/signup";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function LoginPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 self-center font-medium">
                    <Avatar className="text-primary-foreground flex size-8 items-center justify-center rounded-lg">
                        <AvatarImage src="/logo.webp" alt="Viserion Logo" />
                        <AvatarFallback className="rounded-lg">VI</AvatarFallback>
                    </Avatar>
                    iserion
                </Link>
                <SignUpForm />
            </div>
        </div>
    )
}

