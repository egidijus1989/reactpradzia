import Article from "../article/Article";
import PostsData from "../../data/Posts";
import { useState } from "react";
import AddArticle from "../Addarticle/AddArticle";

const Main = () =>{
    const [clicked, setClicked] = useState(false);
    const [clicked2, setClicked2] = useState(false);

    const [post, setPosts] = useState([]);

    console.log(post)
    const handleClick = ()=>{
        setClicked(true);
    }
    const handleClick2 = ()=>{
        setClicked2(true);
    }

    const handleFormDate = (data)=>{
        setPosts((prevData)=>{
            return[data,...prevData]
        })
        setClicked2(false);
    }
    console.log('is main componento', post)
    return(
        <main>
            <div className="container">
                <button onClick={handleClick2}>Prideti naujiena</button>
                <h1>Naujienos</h1>
                {post.map((post)=>
                    <Article key={post.id} title={post.title} description={post.description}/>
                )}
                <button onClick={handleClick}>Paspaudziau</button>
               {clicked ? <h1>Mygtukas yra paspaustas</h1> : <div>kazkas kitka</div>}
            </div>

            {clicked2 ? <div >
                <h2>Prideti naujiena</h2>
                <AddArticle onSave={handleFormDate}/>
            </div> : <div>kazkas kitko</div>}
        </main>
    );
}
export default Main