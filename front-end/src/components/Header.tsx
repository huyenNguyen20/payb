import { Person } from "../data/interface";
import { BitcoinIcon } from "../lib/Icon/BitcoinIcon";
import { Rating } from "../lib/Rating/Rating";
import "./header.scss";

interface HeaderProps {
    person: Person
}
export function Header (props: HeaderProps) {
    return(
        <>
        <header className="header">
            <div className="header-content">
                <div className="header-content-info animation-moveInLeft">
                    <div className="avatar avatar--big">
                        <img src={props.person.avatarUrl} alt="Kayla Person" className="avatar--big__image"/>
                        <div className="avatar--big--info text-black">
                            <h1 className="primary-heading">{props.person.fullName}</h1>
                            <h4 className="avatar--big--info__job">{props.person.jobs.join(", ")}</h4> 
                            <Rating stars={props.person.stars} reviews={props.person.reviews}/>
                        </div>
                    </div>
                </div>
                <div className="header-content-price">
                    <BitcoinIcon price={props.person.price}/>
                </div>
            </div>
        </header>
        </>
    )
}