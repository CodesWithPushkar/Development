
function App() {
  const Card = ({children, style={}}) =>{
    return <div style={{
      border: "2px solid gray",
      padding: 4,
      margin: 2,
      ...style
    }}>
      {children}
    </div>
  }


  return(
    <div>
      <Card style={{width: 1000}}>
          <h1>hello kaise ho</h1>
          <p>This is me how are you learning react</p>
      </Card>
      <Card>
          <h1>Changing content</h1>
          <p>Yes i learn something new in react</p>
          <textarea name="hello" id="23"></textarea>
      </Card>
    </div> 
  )
}

export default App
