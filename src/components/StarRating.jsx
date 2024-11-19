const StarRating= ({accommodation}) => {
    return (
        <div className="star-rating">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className={index < accommodation.rating ? 'star-filled' : 'star-empty'}>
                                {index < accommodation.rating ? '★' : '☆'}
                            </span>
                        ))}
                    </div>
    )
}

export default StarRating;