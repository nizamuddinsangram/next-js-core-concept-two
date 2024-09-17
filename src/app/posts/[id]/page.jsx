const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
const postDetailsPage = async ({ params }) => {
  console.log(params.id);
  const { title, body } = await getDetailsPost(params.id);
  //   console.log(data);
  return (
    <div>
      Post Details
      <h6>Title:{title}</h6>
      <h6>Description:{body}</h6>
    </div>
  );
};

export default postDetailsPage;
