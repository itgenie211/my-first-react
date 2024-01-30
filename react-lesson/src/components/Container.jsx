function Container(props) {
    return (
      <div>
        <h1>Hello World, I am a container and below are my children</h1>
        {props.children}
      </div>
    )
  }
  
  export default Container