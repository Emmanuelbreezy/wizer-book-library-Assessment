import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bookreadingImg from  '../../public/assets/images/book_lover.png';
import Books from '../Books/Books';
import Categories from '../Categories/Categories';

export default function Home() {
  
    return (
        <div className="home--section">
            <div className="container-fluid">
                <div className="col-12">
                    
                    <div className="home--top--wrapper "style={{display:"block"}}>
                         <div className="row">
                             <div className="col-12 col-lg-6 pr-0 p-5 ">
                                 <h3 className="display-3">
                                     <span className="d-block">Your library</span>
                                     <span className="d-block">anywhere</span>
                                 </h3>
                                 <p>Learn with fun..........</p>
                             </div>
                             <div className="col-12 col-lg-6 pl-0">
                                 <div className="home--top-img">
                                     <Image src={bookreadingImg} width="" />
                                 </div>
                             </div>
                         </div>
                    </div>

                <br />
                <div className="home--list--books mt-3 mb-2">
                    <div className="top--head--bar d-flex align-items-center justify-content-between">
                        <h3 className="display-4">My Books</h3>
                         <Link href="/books">
                             <button className="btn btn-default d-flex align-items-center">
                                <span>View all</span>
                                <i className="fas fa-angle-right"></i>
                            </button>
                        </Link>
                    </div>
                    <div className="top--book">
                         <Books simiplified />
                    </div>
                </div>

                <br />
                <div className="home--list--books">
                    <div className="top--head--bar d-flex align-items-center justify-content-between">
                        <h3 className="display-4">Top Categories</h3>
                        <Link href="/categories"><button className="btn btn-default d-flex align-items-center">
                            <span>View all</span>
                            <i className="fas fa-angle-right"></i>
                        </button>
                        </Link>
                    </div>
                                  
                   
                   <div className="all--category">
                       <Categories simiplified />
                   </div>
                   <br />
                   <br />
                </div>
            </div>
          </div>
        </div>
    )
}
