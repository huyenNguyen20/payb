import { BitcoinIcon } from "../Icon/BitcoinIcon";
import { Rating } from "../Rating/Rating";
import { SmallAvatar } from "../Avatar/SmallAvatar";
import "./project-card.scss";
import { SkillList } from "../SkillList/SkillList";

export function ProjectCard () {
    return(
        <div className="project-card">
            <div className="project-card-info">
                <h3 className="tertiary-heading">
                    IOS Developer
                </h3>
                <Rating/>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <SkillList skillList={["SQL", "IOS", "React"]} />
                <div className="project-card-info-developer">
                    <SmallAvatar textColor="black"/>
                    <div className="project-card-info-developer-date">
                        &bullet;  
                        <span>2021/04/06</span>
                    </div>
                </div>

            </div>
            <div className="project-card-price animation-moveInRight">
                <BitcoinIcon/>
            </div>
        </div>
    );
}