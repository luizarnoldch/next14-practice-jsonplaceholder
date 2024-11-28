"use client";

import React from "react";
import SubmitButton from "./SubmitButton";
import createPost, { State } from "@/actions/createPost/create-post";
import { useFormState, useFormStatus } from "react-dom";

type Props = {};

const CreateForm = (props: Props) => {
  const initialState: State = {
    message: null,
    errors: {},
  };

  const [state, dispatch] = useFormState(createPost, initialState);

  const { pending } = useFormStatus();

  return (
    <form action={dispatch} className="w-full flex flex-col gap-4">
      <label htmlFor="title" className="w-full">
        <p className=" text-sky-300">Title</p>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a post title"
          className="border-black border p-1 placeholder-neutral-700 text-black w-full"
          disabled={pending}
        />
        {state?.errors?.title && (
          <div>
            {state.errors.title.map((error: React.Key) => (
              <p key={error} className=" text-rose-500">
                {error}
              </p>
            ))}
          </div>
        )}
      </label>
      <label htmlFor="body" className="w-full">
        <p className=" text-sky-300">Body</p>
        <input
          id="body"
          name="body"
          required
          placeholder="Enter a post title"
          className="border-black border p-1 placeholder-neutral-700 text-black w-full"
          disabled={pending}
        />
      </label>
      <input type="hidden" value={1} name="userId" />

      <SubmitButton />
    </form>
  );
};

export default CreateForm;
