import React from 'react'


class Child extends React.Component{
    componentWillUnmount(){
        
    }
      static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps Childern",props)
  return null
  }
    render(){
        return(
            <h1>{this.props.count}</h1>
        )
    }
}


export default Child;