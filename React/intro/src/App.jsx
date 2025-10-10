
const App = () => {

   // js logic
   // Non-parameterized function
   const handleClick = ()=> {
      alert("button Clicked")
   }

      // parameterized function
      const handleparaClick = (msg)=>{
        alert(msg);
      }
      
//  const wrapperhandler = ()=> handleparaClick("Hello from parameter!")


  return (
    <>
    <h1>{2+3}</h1>
    <div>App </div>
    <button onClick={handleClick}> click </button>
    <button onClick={()=> handleparaClick("Hello from parameter!") }> click This is parameter </button>
    </>
  )
}

export default App