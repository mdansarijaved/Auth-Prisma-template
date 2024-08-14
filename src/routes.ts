/** 
 * An array of routes that are not protected by the middleware.
 * @type {string[]}
 */


export const publicRoutes = [
    '/',
]


/**
 * An array of routes that are protected by the middleware.
 * @type {string[]}
 */

export const protectedRoutes = [
    '/protected', '/settings'
]

/**
 * An array of routes that are athentication routes.
 * These routes will redirect users to settings 
 * @type {string[]}
 */

export const authRoutes = [
    '/auth/login', '/auth/register'
]



/**
 * The prefix for API authentication routes.
 * These routes will be used for authentication. 
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

export const DEFAULT_LOGIN_REDIRECT = '/settings'

