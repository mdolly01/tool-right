import React from 'react';
import './ToolTycoon.css';


function ToolTycoon() {
    return (<div className='account__info'>
    <h1>
        Become a Tool Tycoon:
    </h1>
    <div>
    </div>
    <input placeholder="First Name" type='text'></input>
    <input placeholder="Last Name" type='text'></input><p>{<br/>}</p>
    <input placeholder="Email" type='text'></input>
    <input placeholder="Phone Number" type='text'></input><p>{<br/>}</p>
    <input placeholder="Address" type='text'></input>
    <input placeholder="Address 2 optional" type='text'></input><p>{<br/>}</p>
    <input placeholder="City" type='text'></input>
    <input placeholder="State" type='text'></input>
    <input placeholder="Zip Code" type='text'></input><p>{<br/>}</p>
    <button type="submit">Sign Up!</button>
</div>
)
}

export default ToolTycoon;