import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

const About: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>About - ALX Project 2</title>
                <meta name="description" content="About page" />
            </Head>

            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">About Page</h1>

                <div className="bg-white rounded-lg shadow p-6 mb-8">
                    <p className="text-lg text-gray-700 mb-4">
                        Welcome to ALX Project 2! This project demonstrates the implementation
                        of a Next.js application with TypeScript and Tailwind CSS.
                    </p>
                    <p className="text-lg text-gray-700">
                        Features include:
                        - Dynamic routing
                        - Reusable components
                        - Modal interactions
                        - TypeScript integration
                        - Responsive design with Tailwind CSS
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Button Variants</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Button size="small" shape="rounded-sm">
                                Small Button
                            </Button>
                            <Button size="medium" shape="rounded-md">
                                Medium Button
                            </Button>
                            <Button size="large" shape="rounded-full">
                                Large Button
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About