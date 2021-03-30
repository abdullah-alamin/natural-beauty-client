import React, { useState } from 'react'

function CreateProject() {
    const [imageURL, setImageURL]= useState('');
    const [name, setName]= useState('');
    const handleSubmit= (e)=>{
        const data= {name, imageURL};

        fetch('http://localhost:3001/addBeauty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        .catch(err=> 'error: '+err)
    }
    const handleName= (e)=> {
        setName(e.target.value);
    }
    const handleImage= (e)=> {
        const file= e.target.files[0];
        const img= new FormData();
        img.append('image', file);
        img.set('key', "8ce188d14fc210b8d6e1c1165b3dac8c")
        fetch('https://api.imgbb.com/1/upload',{
            method: 'POST',
            body:img,
        })
        .then(res=> res.json())
        .then(data=> setImageURL(data.data.display_url))
        .catch(err=> console.log(err))
    }
    return (
        <div>
            <p>{name}</p>
           <div>
               <p>Beauty:-</p>
               <input onBlur={handleName} type="text"/>
           </div>
           <div>
               <p>Image:-</p>
               <input onChange={handleImage} type="file"/>
           </div>
           <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default CreateProject
