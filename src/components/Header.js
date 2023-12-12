import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const currentUser = props.currentUser;
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const handleSignOut = (event) => {
        signOut(getAuth());
        navigate("/"); 
    }

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Sickness Tracker</Link></li>
                    <li><CustomLink to="/medtracker">Medication Tracker</CustomLink></li>
                    <li><CustomLink to="/sicklog">Sickness Log</CustomLink></li>
                    <li><CustomLink to="search/">Resources</CustomLink></li>
                    <li><CustomLink to="/about">About</CustomLink></li>
                    {user &&
                        <>
                        <button className="btn btn-secondary btn-sm logged-in" onClick={handleSignOut}>Sign Out</button>
                        <li className="logged-in mt-1">Welcome, {user.displayName}</li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <a className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </a>
    )
}