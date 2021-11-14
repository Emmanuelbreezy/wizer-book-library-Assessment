import React from 'react'
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';

export default function Layout(props) {
    return (
        <div className=" app--layout">
            <SideBar />

            <main className="w-100 app--mainbar">
              <NavBar />
              <div className="col-12 ps-3">
                {props.children}
              </div>
            </main>
        </div>
    )
}
