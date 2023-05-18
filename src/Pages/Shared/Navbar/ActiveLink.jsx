import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            {/* <NavLink
                to={to}
                className={({ isActive }) => isActive ? "text-blue-500 border-b-[2px] pb-2 border-blue-700" : ""}
            >
                {children}
            </NavLink> */}
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-500" : ""}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;