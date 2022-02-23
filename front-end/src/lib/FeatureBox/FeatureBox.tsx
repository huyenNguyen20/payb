import "./feature-box.scss";
import { SkillList } from "../SkillList/SkillList";
import { Experience } from "../../data/interface";

interface FeatureBoxProps {
    experience: Experience
}
export function FeatureBox (props: FeatureBoxProps) {
    return(
        <div className="feature-box">
            <div className="feature-box-stats">
                <div>
                    <span className="feature-box-stats__number">
                        {props.experience.jobCompleted}
                    </span>
                    <span className="feature-box-stats__title">
                        Jobs Completed
                    </span>
                </div>
                <div>
                    <span className="feature-box-stats__number">
                        {props.experience.rehire}
                    </span>
                    <span className="feature-box-stats__title">
                        Rehire
                    </span>
                </div>
            </div>
            <div className="feature-box-skill">
                <h2 className="secondary-heading">Skills</h2>
                <SkillList skillList={props.experience.skills} />
            </div>
        </div>
    )
}