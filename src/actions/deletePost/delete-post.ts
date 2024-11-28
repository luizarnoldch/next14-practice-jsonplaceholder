'use server'

import { revalidatePath } from "next/cache"

export default async function deletePost(id: React.Key) {
    fetch(`${process.env.NEXT_BACKEND_API}/posts/${id}`, {
        method: 'DELETE',
    });

    console.log(id)

    revalidatePath("/data")
}