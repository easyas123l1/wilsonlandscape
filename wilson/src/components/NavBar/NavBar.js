import React from 'react';
import { Link } from 'react-router-dom';
import landscape from '../../styles/landscape.module.scss';

export default function NavBar() {
    return (
        <div className={landscape.navBar}>
            <div>
                <Link to='/'>
                    About
                </Link>
            </div>
            <div>
                <Link to='/portfolio'>
                    Portfolio
                </Link>
            </div>
            <div>
                <Link to='/contact'>
                    Contact
                </Link>
            </div>
        </div>
    )
}
