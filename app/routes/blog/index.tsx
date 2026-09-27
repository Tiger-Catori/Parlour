import { useState } from 'react';
import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";
import PostCard from "~/components/PostCard";
import Pagination from '~/components/Pagination';
import PostFilter from '~/components/PostFilter';

export async function loader({ request }: Route.LoaderArgs): Promise<{posts: PostMeta[]}> {
  const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  data.sort((a: PostMeta, b: PostMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })

  return {
    posts: data
  };
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Parlour Website | Blog" },
    { name: "description", content: "Custom website development" },
  ];
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const { posts } = loaderData;
  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLocaleLowerCase().includes(query)
    )
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-800 rounded-md">
        <h2 className="text-3xl font-bold text-green-400 mb-8">
          Blog
      </h2>

      <PostFilter
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />

      <div className='space-y-8 text-white font-semibold text-xl'>
        {
          currentPosts.length == 0 ? (
            <p>No posts found.</p>
          ) : (
              currentPosts.map((post) => (
                <PostCard key={post.slug} post={post}/>
              ))
          )
        }
      </div>


      {
        totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )
      }

    </div>

  )
}

export default BlogPage;
