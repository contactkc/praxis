import Link from 'next/link'

export function Navbar() {
    return (
        <nav className="w-4xl mx-auto mt-8 h-16 bg-white/5 rounded-4xl border border-white/10 fixed top-0 left-0 right-0 backdrop-blur">
            <div className="flex items-center max-w-6xl mx-auto h-full px-8 justify-between">
                <Link
                    href="/"
                    className="text-md font-light text-white"
                >
                    Praxis
                </Link>
                <div className="flex gap-6">
                    <Link
                        href="/docs"
                        className="text-sm text-white hover:text-white hover:cursor-pointer transition"
                    >
                        Home
                    </Link>
                    <Link
                        href="/docs"
                        className="text-sm text-white hover:text-white hover:cursor-pointer transition"
                    >
                        Docs
                    </Link>
                </div>
            </div>
        </nav>
    )
}