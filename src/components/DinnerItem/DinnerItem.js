import React from 'react';

const DinnerItem = (props) => {
    const meal = props.meal;
    return (
        <div className='col-lg-4 col-md-6 col-12'>
        <div className="meal-card p-5">
            <img src={meal.images} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <p className='fw-bold'>{meal.name}</p>
                    <p>{meal.shortDescription}</p>
                    <p className='fw-bold'>${meal.price}</p>
                </div>
        </div>
    </div>
    );
};

export default DinnerItem;