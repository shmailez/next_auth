// export { default } from 'next-auth/middleware'

// export const config = { matcher: ['/profile', '/protected/:path*']}
//приваность profile
export { default } from 'next-auth/middleware'

export const config = { matcher: ['/profile', '/protected/:path*'] }