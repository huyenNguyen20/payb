import "./rating.scss";

interface RatingProps {
    stars: number;
    reviews: number;
}
export function Rating (props: RatingProps) {

    return(
        <div className="rating">
            <span className="star">
                {Array.from("abcde").map((i, idx) => (
                    <img 
                    key={idx}
                    src={(idx + 1 <= props.stars) ? 
                        "img/star-full-icon.svg" : 
                        "img/star-icon.svg"} 
                    alt="star" 
                    className="star-icon"/>
                ))}
            </span>
            <span className="rating-star-number">{props.stars}</span>
            <span className="rating-review-number">/{props.reviews} reviews</span>
        </div>
    )
}