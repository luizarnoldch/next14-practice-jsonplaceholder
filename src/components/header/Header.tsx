import Link from "next/link"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="w-full h-20 bg-slate-700">
      <nav className="container mx-auto h-full flex justify-center items-center gap-8">
        <Link href="/" className="hover:underline-offset-1">
          Index
        </Link>
        <Link href="/form" className="hover:underline-offset-1">
          Form
        </Link>
        <Link href="/data" className="hover:underline-offset-1">
          Data
        </Link>
        <Link href="/individual/1" className="hover:underline-offset-1">
          Individual
        </Link>
      </nav>
    </div>
  )
}

export default Header