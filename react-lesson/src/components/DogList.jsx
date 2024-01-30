function DogList(props) {

  //An array of dogs.
const dogs = [
    {name: "Sparky", age: 5, id:1 },
    {name: "Spot", age: 5, id:2 },
    {name: "Ralph", age: 5, id:3 },
    {name: "Fido", age: 5, id:4 },
]

const dogJSX = dogs.map(dog => {
    return(
        <div key={dog.id}>
            <h1>{dog.name}</h1>
            <h2>{dog.age}</h2>
        </div>
    )
})
console.log(dogJSX)

return <div>{dogJSX}</div>
}

export default DogList