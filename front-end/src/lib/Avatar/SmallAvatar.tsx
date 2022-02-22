import "./avatar.scss";

interface SmallAvatarProps {
    textColor: string;
}
export function SmallAvatar(props: SmallAvatarProps){
    return(
        <div className="avatar avatar--small">
            <img src="img/person-icon.jpg" alt="Kayla Person" className="avatar--small__image"/>
            <span className={`avatar--small__name text--${props.textColor}`}>Kayla Person</span>
        </div>
    );
}