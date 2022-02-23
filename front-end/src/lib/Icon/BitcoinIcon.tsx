import "./bitcoin-icon.scss";

interface BitcoinProps {
    price: number;
}
export function BitcoinIcon (props: BitcoinProps) {
    return (
        <div className="bitcoin">
            <span className="bitcoin-icon">
                <img src="img/bitcoin-icon.svg" alt="" className="bitcoin-icon-image"/>
            </span>
            <span className="bitcoin-price">
                BTC 
                <span className="bitcoin-price-number">
                    {props.price}
                </span>
            </span>
        </div>
    );
}