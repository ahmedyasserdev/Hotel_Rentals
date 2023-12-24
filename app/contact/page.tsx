"use client"
import FAQDisclosure from "@/components/contact/FAQDisclosure"
import { FAQS } from "@/constants"
import ConnectWithUs from "@/components/contact/ConnectWithUs"
import Form from "@/components/contact/Form"
const page = () => {
  return (
    <section className="section__padding    page_bg" >
      <div className="container">
        <div className="flex-center flex-col text-dark gap-4 pb-10">
          <h1 className="bold-40 md:bold-60 " >Contact Us</h1>
          <p className=" regular-18 md:regular-24 text-center md:max-w-[600px] " >We're always here to answer your questions.
Reach out and we'll get back to you as soon as possible.</p>
        </div>


      <ConnectWithUs />


      <div className = "mt-10" >

        <div className = "flex-center flex-col gap-4 text-dark " >
          <h1 className = "bold-32 md:bold-52" >Frequently asked questions</h1>
          <p className = "regular-18" >Everything you need to know about the product and billing.</p>
        </div>


        <div className = "flex-between flex-wrap gap-4  pt-20 " >
          {
            FAQS.map(({question , answer} , index ) => (
              <FAQDisclosure question={question}  answer = {answer} key = {index} />
            ) )
          }
        </div>
      </div>



      <Form/>


      </div>
    </section>
  )
}

export default page