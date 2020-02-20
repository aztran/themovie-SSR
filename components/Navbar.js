import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
            <div className="container">
                <Link href="/" >
                    <a className="navbar-brand" href="#">The Movie DB</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link href="/" >
                                <a className="nav-link">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login">
                                <a className="nav-link">Login

                                </a>
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>

        </nav>
    );
}

export default Navbar;
