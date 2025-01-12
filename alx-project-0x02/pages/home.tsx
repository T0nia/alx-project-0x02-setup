import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import { Post } from '../interfaces'

const Home: NextPage = () => {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            title: 'Welcome to Our Platform',
            content: 'This is your first post. Explore and create more!',
            userId: 1
        }
    ])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddPost = (postData: Omit<Post, 'id'>) => {
        const newPost: Post = {
            ...postData,
            id: posts.length + 1,
            userId: 1
        }
        setPosts([...posts, newPost])
        setIsModalOpen(false)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Home - ALX Project 2</title>
                <meta name="description" content="Home page" />
            </Head>

            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">Home Page</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add New Post
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            title={post.title}
                            content={post.content}
                        />
                    ))}
                </div>

                <PostModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddPost}
                />
            </main>
        </div>
    )
}

export default Home;