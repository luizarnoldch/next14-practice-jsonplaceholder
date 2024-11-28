import getPosts from "@/actions/getPosts/get-posts";
import React from "react";
import Post from "./Post";

type Post = {
  title: String;
  body: String;
  id: React.Key;
  userId: Number;
};

type Props = {};

const RenderPosts = async (props: Props) => {
  const data = await getPosts();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold">Post</h1>
      {data.map((item: Post) => (
        <Post
          key={item.id}
          title={item.title}
          body={item.body}
          userId={item.userId}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default RenderPosts;
