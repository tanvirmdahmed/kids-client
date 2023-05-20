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
                className={({ isActive }) => isActive ? "sm:text-blue-600 md:text-blue-600 lg:bg-blue-600 lg:text-white lg:p-6 lg:rounded-b-3xl lg:font-bold" : ""}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;