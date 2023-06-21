// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// })

// module.exports = (phase) => {
//   if(phase === PHASE_DEVELOPMENT_SERVER){
//       return withMDX({
//         reactStrictMode: true,
//         env: {baseUrl: "http://localhost:1337"},

//         // Append the default value with md extensions
//          pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

//       })
//   }
// }

// module.exports = withMDX({
//   // Append the default value with md extensions
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

// })

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     baseUrl: "http://localhost:1337",
//   },
// };

// export const images = {
//   domains: ["cdn.sanity.io"],
// };
// export const env = {
//   baseUrl: "http://localhost:1337",
// };


// next.config.js
module.exports = {
	images: {
		domains: ['cdn.sanity.io']
	}
};