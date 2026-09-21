import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Parlour Website | Blog" },
    { name: "description", content: "Custom website development" },
  ];
}

const BlogPage = () => {
  return (
    <>
        <h2 className="text-3xl font-bold text-green-600 mb-2">
          Blog
        </h2>
    </>

  )
}

export default BlogPage;
