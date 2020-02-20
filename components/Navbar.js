import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router'

const Navbar = ({ router }) => {
    const activePath = (router && router.asPath) || '/';
    const menus = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Login',
            href: '/login',
        },
    ]
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
                        {menus.map(({ title, ...rest }, idx) => (
                            <li key={title} className={`nav-item ${activePath === rest.as || activePath === rest.href ? 'active' : ''}`} >
                                <Link {...rest}>
                                    <a className="nav-link">{title}
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </Link>
                            </li>

                        ))}
                    </ul>

                </div>
            </div>

        </nav>
    );
}

export default withRouter(Navbar);
