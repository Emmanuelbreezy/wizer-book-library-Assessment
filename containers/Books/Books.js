import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlidingPane from 'react-sliding-pane';
import bookplaceholder from  '../../public/assets/images/book_placeholder1.png';
import noItemImg from  '../../public/assets/images/not_exist.png';



export default function Books({simiplified}) {
    const [openPane,setOpenPane] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allbooks, setAllBooks] = useState(null);
    
    const [currentBook,setCurrentBook] = useState({});
    
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

   const handleBookDelete = (bookId) => {
        setOpenPane(false);
        setLoading(true);
        fetch(`https://61167dbc1c592d0017bb7f4c.mockapi.io/${bookId.toString()}`,{
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json();
        }).then(data => {
            // setAllCategories(data);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
        })
}

   const triggerSlidingPane = (bookId,bookName,bookDate) => {
    setCurrentBook({
        ...currentBook,
        id:bookId,
        name: bookName,
        createdAt:bookDate,
    });
    setOpenPane(true);
}


const closeSlidingPane = () => setOpenPane(false);
    

 console.log(currentBook,'crt');
    

   const limit = simiplified ? 4 : -1;

    return (
        <>
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
                    <a className="card" onClick={() => triggerSlidingPane(book.id,book.name,book.createdAt)}>
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

        {openPane && currentBook  ? (<SlidingPane
                    className="sliding--pane"
                    overlayClassName="overLay--sliding"
                    closeIcone={<i className="fa fas-times"></i>}
                   isOpen={openPane}
                    from="right"
                    onRequestClose={closeSlidingPane}
                    >

                        <div className="book--details">
                            <div className="container">
                                <div className="book-detail-top">
                                    <h5>About the book</h5>
                                    <div className="book--card">
                                        <div className="book--card--body">
                                            <div className="book--card--img">
                                                {/* <div className="imgPlaceholder"></div> */}
                                                <Image src={bookplaceholder} width="" />
                                            </div>
                                            <div className="book--card--title">
                                                <h5 className="display-4">{currentBook.name}</h5>
                                                <span>{ 
                                                        new Date(currentBook.createdAt).toLocaleDateString()
                                                        
                                                    }</span>
                                            </div>

                                            <div className="book--card--desc text-center">
                                              <p className="text-white">No description</p>
                                            </div>
                                        </div>
                                        <div className="book--card-action">
                                            <Link href={`/books/add-book?_id=${currentBook.id}&edit=true`}><button className="btn btn-primary w-100">Edit</button></Link>
                                            <button className="btn btn-danger w-100 mt-2" onClick={() => handleBookDelete(currentBook.id)}>Delete</button>
                                        </div>
                                </div>
                                
                             </div>
                            </div>
                        </div>
                     
                  </SlidingPane>
                )

        : null
       }
       </>
    )
}
