
const Tags = ({card}) => {
    return (
        <div className="tags">
        {card.tags.map((tag) => (
            <div key={`${card.id}-${tag}`} className="tag">
                {tag}
            </div>
        ))}
        </div>
    )
}

export default Tags;
