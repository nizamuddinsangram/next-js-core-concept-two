// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return data;

import { getData } from "../services/postApi";

// };
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default postPage;
