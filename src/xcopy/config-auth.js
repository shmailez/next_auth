import Credentials from 'next-auth/providers/credentials'
import GoggleProvider from 'next-auth/providers/google'
import { Passero_One } from 'next/font/google'

export const authConf = {
    providers: [
        GoggleProvider({
            clientId: '', 
            clientSecret: ''
        }), 
        // Credentials({
        //     credentials: {
        //         email: {label: 'email', required: true}, 
        //         password: {label: 'password', required: true}
        //     },
        //     async authorize(credentials) {
        //         if (!credentials.email && !credentials.password) return null

        //         const currentUser = user.find(user => user.email === credentials.email) 

        //         if  (currentUser && currentUser.password === credentials.password) {
        //             const {password, ...userWithoutPass} = currentUser
        //             return userWithoutPass
        //         }

        //         return null
        //     }
        // })

         Credentials({
            credentials: {
                email: {label: 'email', required: true}, 
                password: {label: 'password', required: true}
            }, 
            async authorize(credentials) {
                if(!credentials.email && !credentials.password) return null

                const currentUser = user.find(user => user.email === credentials.email)

                if(currentUser.password === credentials.password) {
                    const {password, ...userWithoutPass} = currentUser
                    return userWithoutPass
                }

                return null
            }
         })
    ]
}