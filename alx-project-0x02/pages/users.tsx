import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import UserCard from '../components/common/UserCard'
import { User } from '../interfaces'

interface UsersPageProps {
    initialUsers: User[]
}

const Users: NextPage<UsersPageProps> = ({ initialUsers }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Users - ALX Project 2</title>
                <meta name="description" content="Users page" />
            </Head>

            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Users</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {initialUsers.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export function getStaticProps() {
    return async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users: User[] = await response.json()

            return {
                props: {
                    initialUsers: users,
                },
                revalidate: 60
            }
        } catch (error) {
            console.error('Error fetching users:', error)
            return {
                props: {
                    initialUsers: [],
                },
                revalidate: 60
            }
        }
    }
}

export default Users;