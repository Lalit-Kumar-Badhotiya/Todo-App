import { useState } from "react";

export function CreateTodo(){
    const [title ,setTitle] = useState("");
    const [description ,setDescription] = useState("");
    return <div>
        <input type="text" placeholder="Title" onChange={function(e){
            const title = e.target.value;
            setTitle(title);
        }}/>  <br /> <br />
        <input type="text" placeholder="Description" onChange={function(e){
            const description = e.target.value;
            setDescription(description);
        }}/><br /> <br />
        <button onClick={function(){
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert(json + "todo created ");
            })
        }}>Add a Todo</button>
    </div>
}
