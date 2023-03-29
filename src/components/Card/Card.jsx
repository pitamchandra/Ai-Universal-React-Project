import React from 'react';

const Card = (props) => {
    const {image,features,name,published_in} = props.card;
    console.log(props.card);
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='image-full h-64' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Feature</h2>
                    {
                        features.map((feature,index) => <p>{index + 1}. {feature}</p>)
                    }
                    <hr />
                    <h2 className='font-bold text-2xl'>{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
             </div>
        </>
    );
};

export default Card;