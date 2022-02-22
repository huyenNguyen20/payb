import "./rating.scss";

export function Rating () {
    return(
        <div className="rating">
            <span className="star">
                <img src="img/star-full-icon.svg" alt="star" className="star-icon"/>
                <img src="img/star-full-icon.svg" alt="star" className="star-icon"/>
                <img src="img/star-full-icon.svg" alt="star" className="star-icon"/>
                <img src="img/star-icon.svg" alt="star" className="star-icon"/>
                <img src="img/star-icon.svg" alt="star" className="star-icon"/>
            </span>
            <span className="rating-star-number">3.0</span>
            <span className="rating-review-number">/6 reviews</span>
        </div>
    )
}