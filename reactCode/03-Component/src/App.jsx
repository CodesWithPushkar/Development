import {useState} from 'react'

function App() {
  const[posts, setPost] = useState([
    {
      id: Date.now(),
      name: "Kallu",
      subtitle: "100 million loves",
      post: "Lots of love to you Lots of love to you Lots of love to you Lots of love to you",
      imgLink: "https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg",
      time: "20hr ago"
    }
  ]);
  function addPost() {
      setPost(prev => [...prev, 
      {
        id: Date.now(),
        name: "Kallu",
        subtitle: "100 million loves",
        post: "Lots of love to you Lots of love to you Lots of love to you Lots of love to you",
        imgLink: "https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg",
        time: "20hr ago"
      }
      ]);
     
  }
  return <div style={{backgroundColor: "#95a5a6", height: "100vh"}}>
    <button onClick={addPost}>Add Post</button>
    <div style={{display: "flex", alignItems: "center", display: "flex", flexDirection: "column"}}>
      {posts.map((post)=>(
        <PostComponent key={post.id} name={post.name} subtitle={post.subtitle} post={post.post} imgLink={post.imgLink} time={post.time}/>
      ))}
    </div>
  </div>

  


  function PostComponent(props) {
    return <div style={{width: 400, backgroundColor: "white",borderRadius: 10,borderColor: "gray", borderWidth: 1, padding: 20, margin: 10}}>
      <div style={{display: "flex"}}>
        <img src={props.imgLink} alt="catImage"  style={{
          width: 50,
          height: 48,
          borderRadius: 50,
          objectFit: "cover"
        }}/>
        <div style={{fontSize: 11, marginLeft: 6}}>
          <b>{props.name}</b>
          <div>{props.subtitle}</div>
          {props.time && <div style={{display: "flex"}}>
            <div>{props.time}</div>
            <img src="https://media.istockphoto.com/id/1031786258/vector/watch.jpg?s=612x612&w=0&k=20&c=U_7Euy34YQwrg2zgJw_VutYLUjDHYyKUr483e-w29RE=" alt="timeIcon" style={{height: 13, width: 13,marginLeft: 1}} />
          </div>}
          
        </div>
      </div>
      <div style={{fontSize: 15}}>{props.post}</div>
    </div> 
  }

  function ProfileCardComponent(){
    return <div style={{position: "relative",borderRadius: 20,overflow: "hidden",width: 200, height: 250, border: "2px solid black", display: "flex", flexDirection: "column"}}>
      <div style={{backgroundColor: "#b7babb", flex: 3.5}}></div>
     <div
  style={{
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
  >
       <img
    src="https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
    style={{
      width: 50,
      height: 50,
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid white",
    }}
  />
       <b style={{ marginTop: 4 }}>Kauua</b>
        <p style={{fontSize: 13,margin: 0}}>you got a good life</p>
      </div>


      <div style={{padding: 10,backgroundColor: "white", flex: 8,paddingTop: 90}}>
        <hr />
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>Profile Viewer:</div>
          <div>1000</div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>Profile Likes:</div>
          <div>10000</div>
        </div>
        
      </div>
    </div>
  }
}

export default App
