import { SmallAvatar } from "../lib/Avatar/SmallAvatar";
import "./nav-bar.scss";

interface NavbarProps {
    user: {fullname: string, avatarUrl: string}
}
export function NavBar (props: NavbarProps) {
    return(
        <>
         <nav className="navigation-bar">
            <div className="navigation-bar-content">
                <div className="navigation-bar-content__icon-box">
                    <button 
                    className="navigation-bar-content__icon navigation-bar-content__icon--1"
                    style={{backgroundImage: `url("/img/message-icon.svg")`}}
                    >
                    </button>
                    <button className="navigation-bar-content__icon navigation-bar-content__icon--2"
                    style={{backgroundImage: `url("/img/notification-icon.svg")`}}>
                    </button>
                </div>
                <SmallAvatar person={props.user} textColor="white"/>
            </div>
        </nav>
        </>
    )
}