import React, { useState } from 'react';
import './Banner.css';
import Button from '@mui/material/Button';
import Search from './Search';
import { useHistory } from 'react-router';


function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>
            <div className='banner__info'>
                <h1>Turn your tools and equipment into a revenue stream</h1>
                <h5>Rent tools from your neighbors not from big box retailers</h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Find the right tool</Button>
            </div>
        </div>
    )
}

export default Banner