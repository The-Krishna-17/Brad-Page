import React from 'react'

const Body = () => {
  return (
<>
    <div className='flex px-20 mt-20 w-full'>
        <div className='flex flex-col'>
            <div className='font-bold text-8xl font-poppins'>
                <h2>YOUR FEET <br /> DESERVE <br /> THE BEST</h2>
            </div>
            <div className='font-poppins font-medium text-slate-700 text-sm mt-3 ml-2'>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE 
                    HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR 
                    FEET DESERVE <br /> THE BEST AND WE’RE HERE 
                    TO HELP YOU WITH OUR <br /> SHOES.
                </p>
            </div>
            <div className='flex font-poppins font-medium gap-2 mt-3'>
                <button className='bg-red-600 text-white w-32 py-2 rounded-md'>Shop Now</button>
                <button className='border-2 border-slate-500 w-32 py-2 rounded-md'>Category</button>
            </div>
            <div className='font-poppins mt-3'>
                <p className='text-slate-500'>Also Available On</p>
                <div className='flex gap-4  items-center mt-2'>
                    <img src="./src/assets/flipkart.png" alt="flipkart" />
                    <img src="./src/assets/amazon.png" alt="amazon" />
                </div>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="./src/assets/shoe_image.png" alt="shoe_image"/>
        </div> 
    </div>
</>
  )
}

export default Body