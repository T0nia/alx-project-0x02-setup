

import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()

    const isActiveLink = (path: string) => {
        return router.pathname === path ? 'text-blue-600' : 'text-gray-600'
    }

    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/home" className="text-xl font-bold text-gray-900">
                        ALX Project 2
                    </Link>
                    <div className="space-x-6">
                        <Link
                            href="/home"
                            className={`${isActiveLink('/home')} hover:text-blue-800`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`${isActiveLink('/about')} hover:text-blue-800`}
                        >
                            About
                        </Link>
                        <Link
                            href="/posts"
                            className={`${isActiveLink('/posts')} hover:text-blue-800`}
                        >
                            Posts
                        </Link>
                        <Link
                            href="/users"
                            className={`${isActiveLink('/users')} hover:text-blue-800`}
                        >
                            Users
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header