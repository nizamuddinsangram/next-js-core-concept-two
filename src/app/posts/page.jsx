import Link from "next/link";
import { getData } from "../services/postApi";

const postPage = async () => {
  const postDatas = await getData();
  return (
    <div>
      <h6>All Posts</h6>
      <div className="grid grid-cols-4 gap-6">
        {postDatas?.slice(0, 12).map((post) => (
          <div key={post.id} className="border-2 border-red-400 p-2 ">
            <h6 key={post}>{post.title}</h6>
            <h6>{post.body}</h6>
            <button className="bg-red-400 px-4 py-2 rounded-lg">
              <Link href={`/posts/${post.id}`}>view Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default postPage;
