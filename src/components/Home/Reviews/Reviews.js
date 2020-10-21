import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://fierce-cliffs-21804.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section style={{ margin: 200 }}>
            <div className="container">
                <div>
                    <h1 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        reviews.map(reviewData => <Review reviewData={reviewData} key={reviewData._id}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;