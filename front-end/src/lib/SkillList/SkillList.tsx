import "./skill-list.scss";

interface SkillListProps{
    skillList: string[];
}
export function SkillList (props: SkillListProps) {
    return (
        <div className="skill-list">
            {
                props.skillList.map((i, idx) => (
                    <span 
                    key={idx}
                    className="text-pill">
                       {i}
                    </span>
                ))
            }
        </div>
    );
}