import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';


const Selector = ({selector,settype,valuetypes}) => {
    const [type, setType] = React.useState(0);
    let i=-10;
  const handleChange = (event: SelectChangeEvent) => {
    if(event.target.value===0) settype("Popular");
    else if(event.target.value===10) settype("Minimalist")
    else if(event.target.value===20) settype("Clasic")
    else if(event.target.value===30) settype("Modern")
    setType(event.target.value);
  };
    return (
        <>
            <div className='flex items-center md:justify-center px-3 lg:px-8 lg:py-2 xl:px-16 flex-col md:flex-row'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} style={{color:"#fff"}}>
                    <InputLabel id="demo-simple-select-standard-label" style={{color:"#C2C2C2",fontSize:16}}>{selector}</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={type}
                    onChange={handleChange}
                    label="Age"
                    disableUnderline
                    style={{color:"#000", fontSize:16}}
                    >
                    {valuetypes.map(value=>{
                        i=i+10
                    return <MenuItem key={value[0]} value={i}>{value}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                {selector==="Price Range"?<div className='w-full flex flex-row-reverse px-10 py-4'><button className='md:px-3 md:py-1 p-3 bg-blue-500 rounded-full md:rounded-xl'>
                <SearchIcon fontSize='large' style={{fill:'#fff'}}/>
                </button></div>:""}
            </div>
        </>
    );
}

export default Selector;
