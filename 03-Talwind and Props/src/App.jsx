import "./App.css";
import Card1 from "./Components/Card";



function App() {



  let myObj = {
    name:"Asif Raza",
    age:20,
    city:"Lucknow"
  }

   let newArr=[1,23,4,54,56,54]
  
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl ">Talwind Test</h1>
      <Card1 username="Asif Raza" someObj={myObj} btnText="Click Me! to learn more" myArr={newArr}/>
      <Card1 username="Hi how are you!" btnText="Click Here!" />
      <Card1 username="Hello!" />
      
      
    </>
  );
}



export default App;
