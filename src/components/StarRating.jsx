const StarRating= ({card}) => {
    return (
        <div className="star-rating">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className={index < card.rating ? 'star-filled' : 'star-empty'}>
                                {index < card.rating ? '★' : '☆'}
                            </span>
                        ))}
                    </div>
    )
}

export default StarRating;