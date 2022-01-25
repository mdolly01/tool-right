import React from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css'; // main file
import 'react-date-range/dist/theme/default.css' //theme file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

//Date Picker component
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <Button onClick={() => history.push('/search')}>Search Tool Right</Button>
        </div>
    )
}

export default Search;