import React,{useState} from 'react'
export const ToggleButton = (props:any)=>{
    const [toggle, setToggle] = useState(false)
    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    return (
        <div>
            <div onClick={handleToggle}>Toggle data</div>
            {toggle?<div>{props.children}</div>:''}
            
        </div>
    )
}