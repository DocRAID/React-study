import { Link } from "react-router-dom";

function Home() {
    
  return(
    <div>
        <h1>Home!</h1>
        here is a tags!
        <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="api">api</Link></li>
            <li><Link to="detail">detail</Link></li>
            <li><Link to="todo">todo</Link></li>
            <li><Link to="museum">뮤-지엄</Link></li>
        </ol>
        
    </div>
  )
}

export default Home;
