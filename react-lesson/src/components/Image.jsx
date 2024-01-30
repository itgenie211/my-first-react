// Example of obj destructuring
// const { a, b, c } = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// b // 2
// c // 3

function Image ({ url, logo, alt = "Logo Image" }) {
    return (
      <a href={url} target="_blank">
        <img src={logo} className="logo" alt={alt} />
      </a>
    )
  }
  
  export default Image