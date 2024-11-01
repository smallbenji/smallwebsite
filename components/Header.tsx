import React from 'react';

import './Header.scss';

const Header = () => {
    return (
        <>
            <header>
                <div className='header'>
                    <div className='header-text'>
                        <p>SmallWebsite</p>
                    </div>
                    <div className='header-grow'>

                    </div>
                    <div className='header-nav'>
                        <nav>
                            <a href="https://fisk.dk">
                                Kort
                            </a>
                            <a href="https://fisk.dk">
                                Reservation
                            </a>
                            <a href="https://fisk.dk">
                                Om os
                            </a>
                            <a href="https://fisk.dk">
                                Log ind
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;