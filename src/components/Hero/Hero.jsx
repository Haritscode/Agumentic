import React,{useState,useEffect} from 'react';
import Selector from '../selector/Selector';
    const selectorType=[{
        id:1,
        name:"Location",
        defaultValue:"Jakarta,Indonesia",
    },{
        id:2,
        name:"Property Type",
        defaultValue:"Popular",
    },{
        id:3,
        name:"Price Range",
        defaultValue:"Rp. 2000K- Rp. 5000K "
    }]
const Hero = ({settype}) => {
    const [type, setType] = useState("Popular");
    useEffect(() => {
        settype(type);
    }, [type]);
    return (
        <>
        <div className='flex flex-col md:flex-row w-screen '>
            <div className='bg-left_img bg-cover pt-24 sm:pt-44 md:pt-44 2xl:pt-32 h-screen px-9 flex flex-col items-start md:w-2/3 md:gap-24 pr-12 sm:gap-24 gap-12'>
                <div className='flex flex-col gap-12 items-start 2xl:gap-12 '>
                    <h1 className='text-white text-3xl font-semibold lg:text-4xl xl:text-6xl 2xl:text-7xl 2xl:px-12'>Easy way to find the property according to your choice.</h1>
                    <p className='text-sm w-full xl:w-2/3 xl:text-xl 2xl:text-xl 2xl:px-12 2xl:w-3/4 text-gray-500 lg:text-xs'>We provide various property models for you at affordable prices and the best quality</p>
                </div>
                <div className='flex flex-col gap-12 items-center md:items-start'>
                    <div className='bg-white rounded-md md:flex'>               
                    {
                        selectorType.map(({id,name,defaultValue})=>
                        <Selector  key={id} settype={setType} selector={name} defaultValue={defaultValue}/>)
                    }
                    </div>
                    <div className='w-full flex gap-6 sm:gap-14'>
                        <div className='flex gap-2 lg:gap-8 items-center'>
                            <img src="./icons8-ok.svg" alt="none"/>
                            <span>100% best quality guarantee</span>
                        </div>
                        <div className='flex items-center lg:gap-12 gap-2'>
                            <img src="./icons8-ok.svg" alt="none"/>
                            <span>More affordable price</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white bg-right_img bg-screen bg-cover w-screen md:w-2/5 h-screen md:h-auto -z-10'>  
            </div>
        </div>
        </>
    );
}

export default Hero;
