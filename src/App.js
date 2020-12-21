import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './component/child'
import {connect} from 'react-redux'
import {set_data} from './store/action'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
  }
  console.log("contructor")
}
  s  
  conponentDidMount(){
    console.log("componentDidMount")
  }
  // shouldComponentUpdate(){
  //   if (this.state.count <5){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  getSnapshotBeforeUpdate(preprops,prestate){
console.log (prestate)
return 10
  }
  componentDidUpdate(preprops,prestate,snapshot){
console.log(snapshot)
  }
  render(){
console.log("redux data",this.props)
    return(
  <div>
         {this.state.count < 5 && <Child count={this.state.count}/>}
         <button onClick={()=>this.setState({count:this.state.count + 1})}>Increment</button>
         <button onClick={()=>this.setState({count:this.state.count - 1})}>Decrement</button>
         <br/>
         <button onClick={()=>this.props.set_data("bhai dksdfklasdl")}>Set data</button>
         
         
         </div>
    )
  }
}

const mapStateToProps=(state) =>({
username:state.auth.username,
email:state.auth.email,
app_name: state.app.app_name,
})

const mapDispatchToProps=(dispatch)=>({
  set_data:(data)=> dispatch(set_data(data))})

export default connect(mapStateToProps,mapDispatchToProps)(App);
