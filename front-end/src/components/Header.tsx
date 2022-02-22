import { BitcoinIcon } from "../lib/Icon/BitcoinIcon";
import { Rating } from "../lib/Rating/Rating";
import "./header.scss";

export function Header () {

    return(
        <>
        <header className="header">
            <div className="header-content">
                <div className="header-content-info animation-moveInLeft">
                    <div className="avatar avatar--big">
                        <img src="img/person-icon.jpg" alt="Kayla Person" className="avatar--big__image"/>
                        <div className="avatar--big--info text-black">
                            <h1 className="primary-heading">Kayla Person</h1>
                            <h4 className="avatar--big--info__job">Professor, Engineer</h4> 
                            <Rating/>
                        </div>
                    </div>
                </div>
                <div className="header-content-price">
                    <BitcoinIcon/>
                </div>
            </div>
        </header>
        </>
    )
}