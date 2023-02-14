import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';

export function Banner() {
    return (
        <div className='w-screen p-8 lg:p-0 bg-mobile-light dark:bg-mobile-dark lg:bg-desktop-light dark:lg:bg-desktop-dark bg-cover h-72 lg:h-96 flex flex-wrap justify-center text-white transition-all duration-500'>
            <div className='flex w-screen lg:w-2/4 justify-between lg:mt-20 items-center'>
                <h1 className='text-4xl font-light'>T O D O</h1>

                <button id="theme-toggle" className='text-2xl'>
                    <BsFillMoonFill className='hidden' id="theme-toggle-dark-icon" />
                    <BsFillSunFill className='hidden' id="theme-toggle-light-icon" />
                </button>
            </div>

            <div className='w-full flex justify-center items-start text-black dark:text-gray-100 transition-all duration-500'>
                <div className='flex w-screen items-center lg:w-2/4 p-5 shadow-2xl bg-gray-100 dark:bg-slate-800 transition-all duration-500'>

                    <label className="flex items-center">
                        <input
                            id="checked-checkbox"
                            className="appearance-none text-transparent border-gray-300 border-2 w-8 h-8 rounded-full checked:bg-gradient-to-tl from-fuchsia-500 to-cyan-300 checked:border-0 checked:text-white"
                            type="checkbox"
                            name=""
                            disabled
                        />
                    </label>

                    <input className='bg-transparent focus:ring-0 h-full focus:border-0 shadow-transparent outline-0 w-full mx-3' type="text" name="" id="" placeholder='Varrer a casa'/>
                </div>
            </div>
        </div>
    )

}