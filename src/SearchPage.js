import React from 'react';
import './SearchPage.css';
import Button from '@mui/material/Button';
import Gene from './portable-generator.jpg';
import PowerWasher from './power-washer.jpg'
import Jackhammer from './jack-hammer.jpg';
import Leafblower from './leaf-blower.jpg';
import Chainsaw from './chainsaw.jpg';
import Lawnmower from './lawnmower.jpg';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>Date Range: Update to Dynamic Later</p>
                <h1>Tools and Equpment nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Tools and Equipment
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult 
            img={Gene}
            location="Overland Park, KS"
            title="6000W Generator"
            description="Dewalt 6000W Generator available for pickup"
            star={4.73}
            price="$50/day"
            total="$53 total"
            />
            <SearchResult 
            img={PowerWasher}
            location="Lenexa, KS"
            title="Gas Powered Pressure Washer"
            description="Kouler Pressure Washer available for pickup or delivery"
            star={5}
            price="$55/day"
            total="$58 total"
            />
            <SearchResult 
            img={Jackhammer}
            location="Olathe, KS"
            title="Jackhammer"
            description="Bosch Jackhammer available for pickup"
            star={4.75}
            price="$40/day"
            total="$43 total"
            />
            <SearchResult 
            img={Leafblower}
            location="Mission, KS"
            title="Gas Powered Leafblower"
            description="Leafblower available for pickup or delivery"
            star={4.88}
            price="$15/day"
            total="$18 total"
            />
            <SearchResult 
            img={Chainsaw}
            location="Shawnee, KS"
            title="Gas Powered Chainsaw"
            description="Coocheer Chainsaw available for pickup"
            star={5}
            price="$38/day"
            total="$41 total"
            />
            <SearchResult 
            img={Lawnmower}
            location="Overland Park, KS"
            title="Gas Powered Lawnmower"
            description="Lawnmower available for pickup"
            star={4.30}
            price="$18/day"
            total="$21 total"
            />
        </div>
    )
}

export default SearchPage;