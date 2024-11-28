import CreateForm from "./(components)/CreateForm"

type Props = {}

const Form = (props: Props) => {
  return (
    <div className="container mx-auto flex justify-center items-center">
        <div className="w-1/2 ">
            <h1 className="text-white text-xl py-8 text-center font-bold">This is a FORM to practice</h1>
            <CreateForm />
        </div>
    </div>
  )
}

export default Form