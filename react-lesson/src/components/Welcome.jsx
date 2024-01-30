function Welcome (props) {
    console.log(props)
    return <h1 style={props.style} >Hello, {props.name} & {props.whateverValue}</h1>
  }
  
  export default Welcome