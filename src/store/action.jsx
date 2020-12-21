


const set_data =(data)=>{
return (dispatch)=>{
    dispatch({type:"SETDATA",data})
}
}

export {
    set_data
}