import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/layout/Header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Next.js project with TypeScript and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to ALX Project 2
        </h1>
        <p className="text-lg text-gray-700">
          This is a Next.js project bootstrapped with create-next-app,
          using TypeScript and Tailwind CSS.
        </p>
      </main>
    </div>
  )
}

export default Home