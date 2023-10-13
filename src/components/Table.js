import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function Table() {
    let sno=1;
    const [products,setProducts]=useState([{}]);
    useEffect(()=>{
        axios.get('http://localhost:3002/products')
        .then(res=>setProducts(res.data))
    },0)
    console.log(products)
    return(
        <>
        <table className='table table-bordered' style={{color:"white"}}>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>ProductId</th>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Thumbnail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                products.map((e,index)=>{
                    return(
                        <tr>
                            <td>{sno++}</td>
                            <td>{e.productId}</td>
                            <td>{e.title}</td>
                            <td>{e.brand}</td>
                            <td>{e.Price}</td>
                            <td>{e.description}</td>
                            <td><img src={e.thumbnail} id='thumb'/></td>
                            <td><td><i id="actions1" i class="fa-solid fa-pen-to-square"></i> <i id="actions2" class="fa-solid fa-trash-can"></i></td></td>
                        </tr>
                    )
                }
                )
            }
            </tbody>
        </table>
        </>
    );
}