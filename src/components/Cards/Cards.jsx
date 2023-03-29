import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const loadData = async () =>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            const data = await res.json()
            setCards(data.data.tools)
        }
        loadData()
    },[])
    // console.log(cards);
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-6 lg:px-10'>
            {
                cards.map(card => <Card 
                    key={card.id}
                    card = {card}
                ></Card>)
            }
            </div>
        </>
    );
};

export default Cards;