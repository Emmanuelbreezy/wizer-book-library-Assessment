import React,{useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Menus() {
    const [toggleNav,setToggleNav] = useState(false);
    const [toggleBookNav,setToggleBookNav] = useState(false);
    const router = useRouter();


    const handleToggle = () => setToggleNav(prevState => !prevState);
    const handleBookNavToggle = () => setToggleBookNav(prevState => !prevState);

    return (
            <ul className="menus--nav nav">
                <li className="nav-item">
                    <Link href="/">
                        <a className={router.pathname === '/' ? 'active' : ''}>
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                        <a className={router.pathname === '/categories' || router.pathname === '/categories/add-category'   
                                            ? 'active' : ''} aria-expanded="false" 
                                            onClick={handleToggle}
                                    >
                            <i className="fas fa-list"></i>
                                <span>Categories</span>
                            </a>
                    <ul className={toggleNav ? 'show':'collapse'} id="collapseMenu">
                        <li >
                            <Link href="/categories/add-category?edit=false">
                                    <a className="">
                                    <i className="fas fa-plus"></i>
                                        <span>Add Category</span>
                                    </a>
                                </Link>
                        </li>
                        <li >
                            <Link href="/categories">
                                    <a className="">
                                    <i className="fas fa-list"></i>
                                        <span>List Categories</span>
                                    </a>
                                </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className={router.pathname === '/books'|| router.pathname === '/books/add-book' ? 'active' : ''}
                                aria-expanded="false"
                                 onClick={handleBookNavToggle}>
                        <i className="fas fa-book"></i>
                            <span>Books</span>
                        </a>
                    <ul className={toggleBookNav ? 'show':'collapse'}>
                        <li>
                            <Link href="/books/add-book">
                                    <a className="">
                                    <i className="fas fa-plus"></i>
                                        <span>Add Book</span>
                                    </a>
                                </Link>
                        </li>
                        <li>
                            <Link href="/books">
                                    <a className="">
                                    <i className="fas fa-list"></i>
                                        <span>List Books</span>
                                    </a>
                                </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/favorites">
                    <a className={router.pathname === '/favorities' && 'active'}>
                    <i className="fas fa-heart"></i>
                        <span>Favorities</span>
                    </a>
                    </Link>
                </li>
            </ul>
    )
}
