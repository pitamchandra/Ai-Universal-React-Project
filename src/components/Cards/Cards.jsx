import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const showAllHandler = () => {
        setShowAll(false)
    }
    useEffect(() => {
        const loadData = async () =>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            const data = await res.json()
            setCards(data.data.tools)
        }
        loadData()
    },[])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-6 lg:px-10'>
            {
                cards.slice(0, showAll ? 6 : 12).map(card => <Card 
                    key={card.id}
                    card = {card}
                ></Card>)
            }
            </div>
            {
                showAll && <span onClick={showAllHandler}>
                <Button>Show All</Button>
                </span>
            }
            <Modal></Modal>
        </>
    );
};

export default Cards;