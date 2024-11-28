'use client'

import { useFormStatus } from 'react-dom'

type Props = {}

const DeleteButton = (props: Props) => {
    const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className=" rounded-xl p-4 text-white bg-black disabled:bg-red-500">
      Delete
    </button>
  )
}

export default DeleteButton