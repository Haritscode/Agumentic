import {useState,useEffect} from 'react'
import Categories from '../Categories/Categories'
import Properties from '../Propertys/Properties';
const Data=[{
    img:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tag:[1,"Classical"],
    name:"Harit Sharma",
    address:"Surakarta",
    cost:"2,840,000"
},{
    img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name:"Tamansari Urbano",
    tag:[2,"Classical"],
    address:"Surakarta",
    cost:"2,300,000"
},{
    img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name:"Borneo Paradiso",
    tag:[10,"Classical"],
    address:"Surakarta",
    cost:"4,050,000"
},{
    img:"https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name:"D'Java Residence",
    tag:[9,"Minimal"],
    address:"Surakarta",
    cost:"3,250,000"
},
{
    img:"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
    tag:[8,"Classical"],
    name:"Harit Sharma",
    address:"Surakarta",
    cost:"2,840,000"
},{
    img:"https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336__340.jpg",
    name:"Tamansari Urbano",
    tag:[6,"Minimal"],
    address:"Surakarta",
    cost:"2,300,000"
},{
    img:"https://www.bbgroupindia.co.in/wp-content/uploads/2017/01/duplex-a-shape-house.jpg",
    name:"Borneo Paradiso",
    tag:[4,"Modern"],
    address:"Surakarta",
    cost:"4,050,000"
},{
    img:"https://sbnri.com/blog/wp-content/uploads/2021/07/NRI-Property-In-India.jpg",
    name:"D'Java Residence",
    tag:[10,"Modern"],
    address:"Surakarta",
    cost:"3,250,000"
},
{
    img:"https://images.moneycontrol.com/static-mcnews/2017/05/real-estate-Luxury-home.jpg?impolicy=website&width=770&height=431",
    tag:[3,"Minimal"],
    name:"Harit Sharma",
    address:"Surakarta",
    cost:"2,840,000"
},{
    img:"https://i0.wp.com/lawpadi.com/wp-content/uploads/2017/06/house-2414374_640.jpg?fit=640%2C424&ssl=1",
    name:"Tamansari Urbano",
    tag:[6,"Modern"],
    address:"Surakarta",
    cost:"2,300,000"
},{
    img:"https://media.istockphoto.com/id/1314584227/photo/luxurious-villa-with-swimming-pool-external-view-of-a-contemporary-house-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=uyGFqo8e_gGoR8kH1H63QOEnD1Z7s802riiggC8WZxg=",
    name:"Borneo Paradiso",
    tag:[8,"Modern",],
    address:"Surakarta",
    cost:"4,050,000"
},{
    img:"https://media.istockphoto.com/id/1314584397/photo/luxurious-villa-external-view-of-a-contemporary-house-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=Be6ZBWagsXapbL_bV3gtwmijS32Ot4VXUvltXHpAV_E=",
    name:"D'Java Residence",
    tag:[7,"Minimal"],
    address:"Surakarta",
    cost:"3,250,000"
}]
export default function Page2({type}) {
    const [active, setActive] = useState('Popular');
    const [propertyData,setpropertyData]=useState(Data);
    const filteredfromactive=()=>{
        let data=Data.filter(({tag})=>{
            if(active==="Popular") return tag[0]>7
            else if(active==="Minimalist") return tag[1]==="Minimal"
            else if(active==="Modern") return tag[1]==="Modern"
            else if(active==="Clasic") return tag[1]==="Classical"
            else return Data;
        });
        setpropertyData(data)
    }
    const filteredfromtype=()=>{
        let data=Data.filter(({tag})=>{
            if(type==="Popular") return tag[0]>7
            else if(type==="Minimalist") return tag[1]==="Minimal"
            else if(type==="Modern") return tag[1]==="Modern"
            else if(type==="Clasic") return tag[1]==="Classical"
            else return Data;
        });
        setpropertyData(data)
    }
    useEffect(()=>{
        filteredfromactive();
    },[active])

    useEffect(()=>{
    filteredfromtype();
    },[type])
  return (
    <>
    <div className='w-full flex flex-col items-center justify-center gap-16'>
        <div className='flex flex-col text-center gap-8'>
            <h1 className="text-3xl md:text-4xl font-bold text-black">Our Property</h1>
            <p className="text-base md:text-md font-semibold text-gray-500 px-4">We provided various type of properties for you with different categories</p>
        </div>
        <div className='w-fit flex flex-col items-center'>
            <div className='w-full'>
                <Categories appearance="subtle" active={active} onSelect={setActive}/>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-self-center max-w-7xl pb-12 sm:px-8'>
                {propertyData?.map(({img,name,address,cost})=><Properties key={img} propertyname={name} address={address} cost={cost} img={img}/>)}
            </div>
        </div>
    </div>
    </>
  )
}
