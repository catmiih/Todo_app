import { BsFillSunFill } from 'react-icons/bs';
import { MdCheck } from "react-icons/md";

export function Banner() {
    return (
        <div className='w-screen p-8 lg:p-0 bg-desktop-light bg-cover h-72 lg:h-96 flex flex-wrap justify-center text-white'>
            <div className='flex w-screen lg:w-2/4 justify-between lg:mt-20 items-center'>
                <h1 className='text-4xl font-light'>T O D O</h1>
                <button className='text-2xl'><BsFillSunFill /></button>
            </div>

            <div className='w-full flex justify-center items-start text-black'>
                <div className='flex w-screen lg:w-2/4 p-5 rounded-lg shadow-2xl bg-gray-100'>

                    <label className="flex items-center">
                        <input
                            id="checked-checkbox"
                            className="appearance-none text-transparent border-gray-300 border-2 w-8 h-8 rounded-full checked:bg-gradient-to-tl from-fuchsia-500 to-cyan-300 checked:border-0 checked:text-white"
                            type="checkbox"
                            name=""
                            disabled
                        />
                        <MdCheck className="absolute m-2 text-gray-100" />
                    </label>

                    <input className='bg-transparent border-b-2 border-gray-200 focus:ring-0 focus:border-0 shadow-transparent outline-0 w-full mx-3' type="text" name="" id="" />
                </div>
            </div>
        </div>
    )
}