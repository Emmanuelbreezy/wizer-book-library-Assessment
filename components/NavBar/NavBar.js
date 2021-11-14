import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();
    return (
        <div className="header--nav  mb-4 ">
            <nav className="navbar navbar-expand-lg sticky-top navbar-light">
                <div className="container-fluid">
                   <Link href="/"><a className="navbar-brand ms-2" >BookLib</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   
                    </div>
          </div>
        </nav>
        </div>
    )
}
