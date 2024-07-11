import { users } from '@/data/users'
import Credentials from 'next-auth/providers/credentials'
import GoggleProvider from 'next-auth/providers/google'

export const authCoufig = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        Credentials({
            credentials: {
                email: {label: 'email', required: true},
                password: {label: 'password', required: true}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null

                const currentUser = users.find(user => user.email === credentials.email) 

                if (currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithoutPass} = currentUser
                    return userWithoutPass
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/signin'
    }
}