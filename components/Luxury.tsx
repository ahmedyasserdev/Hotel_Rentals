import React from 'react'

const Luxury = ({title } : {title?: string} ) => {
  return (
    <section className = "   w-full  bg-luxury_mobile md:bg-luxury_desktop  bg-cover lg:bg-contain bg-no-repeat bg-center h-[375px] lg:h-[856px]" >
            {title && (
                <div className='flex-center' >
                    <h3 className=" font-medium text-[32px] italic font-display">{title}</h3>
                </div>
            )}
    </section>
  )
}

export default Luxury 