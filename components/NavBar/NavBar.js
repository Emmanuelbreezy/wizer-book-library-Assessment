import React from 'react';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();
    return (
        <div className="header--nav  mb-4 ">
            <nav className="navbar navbar-expand-lg sticky-top navbar-light">
                <a className="navbar-brand ms-2" href="/">BookLib</a>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    {/* <form className=" col-4">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                    </form> */}
                    </div>
          </div>
        </nav>
        </div>
    )
}
