import React from "react";
import DeleteButton from "./DeleteButton";
import deletePost from "@/actions/deletePost/delete-post";

type Props = {
  title: String;
  body: String;
  id: React.Key;
  userId: Number;
};

const Post = ({ title, body, userId, id }: Props) => {
  
  const deletePostWithBind = deletePost.bind(null, id)

    return (
    <form action={deletePostWithBind} className="py-2 mb-4">
      <h2 className="text-xl text-blue-400">Title: </h2>
      <p>{title}</p>
      <h2 className="text-xl text-blue-400">Body: </h2>
      <p>{body}</p>
      <DeleteButton />
    </form>
  );
};

export default Post;
