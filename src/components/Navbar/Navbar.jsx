import React,{useState} from 'react';
const Navbar = () => {
    const [menuShow,setmenuShow]=useState(false);
    const Menu=()=>{
        menuShow?setmenuShow(false):setmenuShow(true);
    }
    return (
        <>
            <div className='py-4 px-24 backdrop-blur-xl z-30 bg-left fixed top-0 w-screen hidden md:block'>
                <ul className='flex justify-between items-center text-white bg-transparent'>
                    <li className='text-gray-400'>
                        <ul className='flex gap-12'>
                            <li>
                                <button>Home</button> 
                            </li>
                            <li>
                                <button>Pricing</button>
                            </li>
                            <li>
                                <button>Contact</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img src="./download.png" alt="none" width={100}/>
                    </li>
                    <li>
                        <button className='px-6 py-2 bg-blue-costom rounded-lg'>Get Started</button>
                    </li>
                </ul>
            </div>
            <div className='fixed z-30 block md:hidden'>
            <div className='py-4 bg-transparent z-30 bg-left top-0 w-screen'>
                <div className={`px-8 flex items-center justify-between`}>
                <img src="./download.png" width={100} alt="none"/>
                <div className={`flex flex-col gap-1 cursor-pointer`}  onClick={Menu}>
                    <span className='rounded-sm w-10 bg-white h-1'></span>
                    <span className='rounded-sm w-10 bg-white h-1'></span>
                    <span className='rounded-sm w-10 bg-white h-1'></span>
                </div>
                </div>
            </div>
            <div className={`w-fit ${menuShow?"block":"hidden"} absolute top-0`}>
                <div className='w-fit bg-left_img h-screen '>
                    <ul className='flex flex-col w-full text-white justify-center items-center'>
                        <li className='w-full pl-8 pt-4 pb-4'>
                            <img className='rounded-full' src="./download.png" width={100} alt="none"/>
                        </li>
                        <li className='w-full'>
                            <button className='h-12 flex justify-center items-center w-full px-24 py-8 border-b-2 border-gray-400 text-lg'>Home</button>
                         </li>
                        <li className='w-full'>
                            <button className='h-12 flex justify-center items-center w-full px-24 py-8 border-b-2 border-gray-400 text-lg'>Pricing</button></li>
                        <li className='w-full'>
                            <button className='h-12 flex justify-center items-center w-full px-24 py-8 border-b-2 border-gray-400 text-lg'>Contact</button>
                        </li>
                        <li className="h-20 pr-4 bg-gray w-full flex items-end justify-end">
                        <button className='px-6 py-4 bg-blue-costom rounded-lg'>Get Started</button>
                    </li>
                    </ul>
                </div>
            </div> 
            </div>
        </>
    );
}

export default Navbar;
