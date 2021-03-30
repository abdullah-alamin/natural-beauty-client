import React, { useEffect, useState } from 'react'

function ShowProject() {
    const [beauties, setBeauties]= useState([]);
    useEffect(()=> {
        fetch('http://localhost:3001/allBeauty')
        .then(res=> res.json())
        .then(data=> setBeauties(data))
    },[])
    return (
        <div>
            {beauties.map(beauty=> {
                return(
                    <div key={beauty._id}>
                        <h4>{beauty.name}</h4>
                        <img width='400px' src={beauty.imageURL} alt=""/>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowProject
