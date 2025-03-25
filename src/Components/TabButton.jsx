import React from 'react';
import EachExample from './Example/EachExample';
import { EXAMPLES } from '../data';


function TabButton(props) {
    return (
        <li><button className={props.isTabSelected ? 'active' : undefined} onClick={props.onClickHandler}>{props.children}</button></li>
    );
}

export default TabButton
