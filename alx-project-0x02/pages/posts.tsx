import type { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import PostCard from '../components/common/PostCard'
import { Post, PostApiResponse } from '../interfaces'

interface PostsPageProps {
    initialPosts: Post[]
}

const Posts: NextPage<PostsPageProps> = ({ initialPosts }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Posts - ALX Project 2</title>
                <meta name="description" content="Posts page" />
            </Head>

            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Posts</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {initialPosts.map((post) => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            content={post.content}
                            userId={post.userId || 1}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data: PostApiResponse[] = await response.json()

        const transformedPosts = data.map(apiPost => ({
            id: apiPost.id,
            title: apiPost.title,
            content: apiPost.body,
            userId: apiPost.userId
        }))

        return {
            props: {
                initialPosts: transformedPosts,
            },
            revalidate: 60 // Revalidate every minute
        }
    } catch (error) {
        console.error('Error fetching posts:', error)
        return {
            props: {
                initialPosts: [],
            },
            revalidate: 60
        }
    }
}

export default Posts;