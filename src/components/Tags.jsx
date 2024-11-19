const Tags = ({accommodation}) => {
    return (
        <div className="tags">
        {accommodation.tags.map((tag) => (
            <div key={`${accommodation.id}-${tag}`} className="tag">
                {tag}
            </div>
        ))}
        </div>
    )
}

export default Tags;