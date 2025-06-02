/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export', // Включает статический экспорт
eslint: {
  ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: true,
},
images: {
  unoptimized: true, // Необходимо для next/image на статических хостингах, таких как GitHub Pages
},
// Если ваш репозиторий НЕ называется username.github.io (например, my-portfolio),
// вам нужно будет добавить basePath. Для username.github.io это не требуется.
// basePath: '/your-repo-name', 
// assetPrefix: '/your-repo-name/',
};

export default nextConfig
