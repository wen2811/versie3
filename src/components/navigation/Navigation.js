import React, { useState } from 'react';


function Navigation () {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Treatments', href: '#treatments' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Our Story', href: '#ourStory' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav>
            <div className="brand__container" style={{ color: 'white' }}>
                <div className="toggle" onClick={toggleNav}>
                    {isNavOpen ? (
                        <span>Close</span>
                    ) : (
                        <span>Menu</span>
                    )}
                </div>
            </div>
            <div className={`links ${isNavOpen ? 'show' : ''}`}>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
