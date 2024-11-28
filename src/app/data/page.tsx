import { Suspense } from "react"
import RenderPosts from "./(components)/RenderPosts"

type Props = {}

const Data = async (props: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RenderPosts />
    </Suspense>
  )
}

export default Data