import React, { useEffect, useState } from "react";

function Home(){
    const [comment,setComment] = useState([]);
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }

    const Comments = () =>{
        fetch('http://localhost:8000/posts')
        .then(res => res.json())
        .then(data => setComment(data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        Comments();
    })
    return (
        <div>
            <h1>Home Page</h1>
            <table class="table table-dark table-striped">
                 <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Author</td>
                    </tr>
                 </thead>

                 <tbody>
                    {
                        comment.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.author}</td>
                                </tr>
                            )
                        })
                    }
                 </tbody>
            </table>
            
            <button onClick={logout} className="btn btn-primary">Logout</button>
        </div>
    );
}
export default Home;