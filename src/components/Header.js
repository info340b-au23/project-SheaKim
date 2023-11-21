import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Sickness Tracker</Link></li>
                    <li><CustomLink to="/medtracker">Medication Tracker</CustomLink></li>
                    <li><CustomLink to="/sicklog">Sickness Log</CustomLink></li>
                    <li><CustomLink to="search/">Resources</CustomLink></li>
                    <li><CustomLink to="/about">About</CustomLink></li>
                </ul>
            </nav>
        </header>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}