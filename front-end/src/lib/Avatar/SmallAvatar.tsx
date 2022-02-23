import "./avatar.scss";

interface SmallAvatarProps {
    textColor: string;
    person: {fullname: string, avatarUrl: string}
}
export function SmallAvatar(props: SmallAvatarProps){
    return(
        <div className="avatar avatar--small">
            <img 
            src={props.person.avatarUrl} 
            alt={props.person.fullname} 
            className="avatar--small__image"/>
            <span 
            className={`avatar--small__name text--${props.textColor}`}>
                {props.person.fullname}
            </span>
        </div>
    );
}