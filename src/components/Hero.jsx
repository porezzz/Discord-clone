import React from 'react'
const Hero = () => {
  return (
    <div className='w-[100%] flex justify-center'>
        <div className='flex flex-col w-[96%] justify-center'>

            <div className='flex h-[500px]'>

                <div className="flex flex-col align-middle w-[100%] justify-center text-white text-center bg-[url('/src/assets/SearchBg.svg')] bg-no-repeat bg-cover ">
                    <p className='font-semibold text-2xl'>Znajdź swoją społeczność na Discordzie</p>
                    <p className='text-base mt-2'>Gry, muzyka, nauka - znajdziesz tu miejsce dla siebie.</p>
                    <div className='  '>
                        <input type="text" className='mt-4 rounded h-[21px] w-[508.812px] p-[8px] text-black'/>
                    </div>
                </div>

            </div>

            

        </div>
    </div>
  )
}

export default Hero