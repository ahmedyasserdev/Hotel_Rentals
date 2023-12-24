import Button from "../Button"



const Form = () => {
  return (
    <section className = "bg-white p-20  rounded-md rounded-tr-[40px] mt-20 " >
        <h1 className = "flex-start  bold-32 md:bold-52" >We would love to hear from you</h1>

    <form className = "flex flex-col gap-4 pt-3" 
      onSubmit = {(e) => e.preventDefault() }
    >
    <div className = "flex gap-4 flex-col md:flex-row" >
      <input type = "text"  className = "border-b-2 border-primary-1 p-2  md:w-1/2 "  placeholder = "Your Name "  required  />
      <input type = "email"  className = "border-b-2 border-primary-1 p-2  md:w-1/2 "   placeholder = "Email"  required />
    </div>

     <textarea placeholder = "massege"   className = "border-b-2 border-primary-1 px-3 py-4 "  required   />


    <Button type = "submit" variant = "btn_primary capitalize p-2 md:min-w-[150px] " title = "send"   />

    </form>
    </section>
  )
}

export default Form