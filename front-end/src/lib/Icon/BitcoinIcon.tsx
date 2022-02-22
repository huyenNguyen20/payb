import "./bitcoin-icon.scss";

export function BitcoinIcon () {
    return (
        <div className="bitcoin">
            <span className="bitcoin-icon">
                <img src="img/bitcoin-icon.svg" alt="" className="bitcoin-icon-image"/>
            </span>
            <span className="bitcoin-price">
                BTC 
                <span className="bitcoin-price-number">
                    0.0005
                </span>
            </span>
        </div>
    );
}