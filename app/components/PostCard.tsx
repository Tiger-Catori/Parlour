import type { PostMeta } from "~/types";
import { Link } from "react-router";

const PostCard = ({post}: {post: PostMeta}) => {
  return (
    <article className="bg-gray-700 mb-4 p-6 rounded-md shadow">
      <h3 className="text-2xl mb-2 font-semibold text-green-400">
        {post.title}
      </h3>
      <p className="text-sm text-gray-200 mb-2">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="text-gray-200 mb-4">
        {post.excerpt}
      </p>
      <Link to={`/blog/${post.slug}`} className="text-green-300 text-sm hover:underline">
        Read More →
      </Link>
    </article>
  )
}
export default PostCard;
