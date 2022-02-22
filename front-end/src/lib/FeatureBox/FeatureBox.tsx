import "./feature-box.scss";
import { SkillList } from "../SkillList/SkillList";

export function FeatureBox () {
    return(
        <div className="feature-box">
            <div className="feature-box-stats">
                <div>
                    <span className="feature-box-stats__number">
                        32
                    </span>
                    <span className="feature-box-stats__title">
                        Jobs Completed
                    </span>
                </div>
                <div>
                    <span className="feature-box-stats__number">
                        24
                    </span>
                    <span className="feature-box-stats__title">
                        Rehire
                    </span>
                </div>
            </div>
            <div className="feature-box-skill">
                <h2 className="secondary-heading">Skills</h2>
                <SkillList skillList={["ISO", "SQL", "Android", "Python", "JavaScript", "PHP"]} />
            </div>
        </div>
    )
}