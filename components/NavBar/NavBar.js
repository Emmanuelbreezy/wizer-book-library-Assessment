import React,{useState} from 'react';
import Link from 'next/link';
import Menus from '../Menus/Menus';

export default function NavBar() {
    const [toggleDrop,setToggleDrop] = useState(false);

    const handleToggleDrop = () => setToggleDrop(prevState => !prevState);
    return (
        <div className="header--nav  mb-4 ">
            <nav className="navbar navbar-expand-lg  navbar-light">
                <div className="container-fluid">
                   <Link href="/"><a className="navbar-brand ms-2" >BookLib</a></Link>
                    <button className="navbar-toggler" type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target="#navbarSupportedContent" onClick={handleToggleDrop} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                   
          </div>
            {toggleDrop ? (<div className="colld-lg-none d-md-block d-sm-block shadow navbar-collapse" id="navbarSupportedContent">
            <div className="container">
                <Menus />
            </div>
            </div>
            ):  null}
        </nav>
        </div>
    )
}
