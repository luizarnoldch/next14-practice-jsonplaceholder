"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
    body?: string[];
  };
  message?: string | null;
};

const CreateBoardSchema = z.object({
  title: z.string().min(3, {
    message: "Minimun leght 3 for title",
  }),
  body: z.string(),
  userId: z.string(),
});

export default async function createPost(prevState: State, formData: FormData) {
  const validatedFields = CreateBoardSchema.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
    userId: formData.get("userId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields",
    };
  }

  const { title, body, userId } = validatedFields.data;

  try {
    const response = await fetch(`${process.env.NEXT_BACKEND_API}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    console.log(data);
  } catch (error: any) {
    return {
      errors: {},
      message: "API Error",
    };
  }

  revalidatePath("/form");
  return redirect("/data");
}
