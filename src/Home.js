import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import Gene from './portable-generator.jpg';
import Powerwasher from './power-washer.jpg';
import Chainsaw from './chainsaw.jpg';
import Woman from './woman-in-woodshop.jpg';
import Rewards from './rewards.png';
import Workshop from './work-shop.jpg';

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card id="woman-card"
                    src={Woman}
                    title="Become a Tool Tycoon"
                    description="Make over $1500/mo from Home renting your tools and equipment."
                />
                <Card 
                    src={Rewards}
                    title="First 100,000 Tool Tycoons get hosting fees waived for life!"
                    description="We want to reward our early adopters with lifetime rewards for their loyalty."
                />
                <Card 
                    src={Workshop}
                    title="Our first 100,000 renters get discounted rental fees for life."
                    description="We will give you a discounted flat rate for tool rentals for life the rest of the money goes directly to the renter."
                />
            </div>
            <div className='home__section'>
                <Card 
                    src={Chainsaw}
                    title="Rent a Chainsaw"
                    description="Cheaper more convenient."
                    price="$35/day"
                />
                <Card 
                    src={Gene}
                    title="Rent a Power Washer"
                    description="Cheaper more convenient."
                    price="$50/day"
                />
                <Card 
                    src={Powerwasher}
                    title="Rent a Power Washer"
                    description="Cheaper more convenient."
                    price="$57/day"
                />
            </div>
        </div>
    )
}

export default Home;