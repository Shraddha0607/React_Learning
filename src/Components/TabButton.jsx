import React from 'react';
import EachExample from './Example/Example';
import { EXAMPLES } from '../data';


function TabButton({isTabSelected, children, ...props}) {
    console.log()
    return (
        <li><button className={isTabSelected ? 'active' : undefined} {...props}>{children}</button></li>
    );
}

export default TabButton
