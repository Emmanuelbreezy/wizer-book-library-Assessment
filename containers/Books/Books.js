import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import bookplaceholder from  '../../public/assets/images/book_placeholder1.png';
import noItemImg from  '../../public/assets/images/not_exist.png';



export default function Books({simiplified}) {
   
    const [loading, setLoading] = useState(false);
    const [allbooks, setAllBooks] = useState(null);

    
  useEffect(() => {
    setLoading(true);
    fetch('https://61167dbc1c592d0017bb7f4c.mockapi.io/books',{
        method:"GET",
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
         return response.json();
    }).then(data => {
        setAllBooks(data);
        setLoading(false);
    })
    .catch(error => {
        setLoading(false);
        console.log(error)
    })
   }, [])
    

   const limit = simiplified ? 4 : -1;

    return (
        <div className="row g-3 mt-2 ">
            {loading === false && allbooks ? allbooks.slice(0,limit).map(book => {
                if(!book){
                    return (<div className="jumbotron">
                                <div className="noitem--img">
                                    <Image src={noItemImg} width=""  />
                                </div>
                                <a className="d-flex align-items-center">
                                    <i className="fas fa-plus"></i>
                                    <span>Create a Book</span> 
                                </a>
                            </div>)
                }
                return(
                <div className="col-6 col-md-4 col-lg-3" key={book.id}>
                    <a className="card">
                        <div className="card-body">
                            <div className="card--img">
                                {/* <div className="imgPlaceholder"></div> */}
                                <Image src={bookplaceholder} width="" />
                            </div>
                            <div className="card--description">
                                <h5 className="display-4">{book.name}</h5>
                                <span></span>
                            </div>
                        </div>
                    </a>
                </div>
                )
            }) :  (
            <div  className="jumbotron">
                <span className="p-4">
                    Loading....
                </span>
            </div>
        ) }
           </div>
    )
}
