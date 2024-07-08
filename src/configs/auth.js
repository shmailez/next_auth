import GoggleProvider from 'next-auth/providers/google'

export const authCoufig = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
}