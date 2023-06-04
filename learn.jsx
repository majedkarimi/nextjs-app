/**
 * #why next js ?
 * 1) File base Routing
 * 2) server side and client side rendering
 * 3) SEO
 * 4) API Routing (backEnd code )
 * 5) Code Spliting (by deafult) : in react we must config with suspend
 */

/**
 * client component and server component
 * @link https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components
 * by default all component is server side
 * and when we need client side we must  set "use client" to top of function
 */

/**
 * #Filse
 * 1.layout.js :
 *  @link https://nextjs.org/docs/app/api-reference/file-conventions/layout
 *  the purpose of this file share same UI in different routes
 *  It is used to define the <html> and <body> tags and other globally shared UI.
 * 2.error.js:
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/error
 * Error components must be Client Components
 * 3.loading.js:
 *  @link https://nextjs.org/docs/app/api-reference/file-conventions/loading
 *  By default, this file is a Server Component -
 *  but can also be used as a Client Component through the "use client" directive.
 * 4.page.js:
 *  @link https://nextjs.org/docs/app/api-reference/file-conventions/page
 *  A page is UI that is unique to a route.
 *  props : params: { slug: string }; and searchParams: { [key: string]: string | string[] | undefined };
 */

/**
 * data fetching
 * 1) server side rendering (SSR)
 * 2) static site Generation (SSG)
 * 2) Incremental Static Generation (ISR)
 */

/**
 * apis
 * in the app
 */

/**
 * metadata
 * 1)dynamic metadata
 * 2)static metadata
 */
