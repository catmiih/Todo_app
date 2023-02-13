import { BsFillSunFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

export function Banner() {
    return (
        <div className='w-screen bg-indigo-500 h-96 flex flex-wrap justify-center text-white'>
            <div className='flex w-2/4 justify-between mt-20 items-center'>
                <h1 className='text-4xl font-semibold'>T O D O</h1>
                <button className='text-2xl'><BsFillSunFill /></button>
            </div>

            <div className='w-full flex justify-center items-start'>
                <div className='flex w-2/4 p-5 rounded-md shadow-2xl bg-gray-800'>
                        <input className='appearance-none text-transparent border-white border-2 w-8 h-8 rounded-full checked:bg-gradient-to-r from-violet-500 to-fuchsia-500 checked:border-0 checked:text-white' type="checkbox" name="" id="" />
                    <input className='bg-transparent focus:border-b-2 focus:ring-0 focus:border-0 shadow-transparent outline-0 w-full mx-3' type="text" name="" id="" />
                </div>
            </div>
        </div>
    )
}