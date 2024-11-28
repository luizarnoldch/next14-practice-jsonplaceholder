'use server'

export default async function getPosts() {
    const response = await fetch(`${process.env.NEXT_BACKEND_API}/posts`)
    const data = await response

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }
    return data.json()
}