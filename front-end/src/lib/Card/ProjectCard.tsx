import { BitcoinIcon } from "../Icon/BitcoinIcon";
import { Rating } from "../Rating/Rating";
import { SmallAvatar } from "../Avatar/SmallAvatar";
import "./project-card.scss";
import { SkillList } from "../SkillList/SkillList";
import { useLayoutEffect, useRef, useState } from "react";
import { Project } from "../../data/interface";
import { getYYYYMMDD } from "../../data/utils";

interface ProjectCardProps{
    person: {fullname: string, avatarUrl: string}
    project: Project
}
export function ProjectCard (props: ProjectCardProps) {
    const [show, doShow] = useState({
        card: false,
    });
    const refCard = useRef(null);

    useLayoutEffect(() => {
        const topPos = (element : any) => element.getBoundingClientRect().top;

        const cardPos = topPos(refCard.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            doShow((state) => ({
                card: cardPos < scrollPos,
            }));
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return(
        <div className={`project-card ${show.card && "animation-moveInLeft"}`} ref={refCard}>
            <div className="project-card-info">
                <h3 className="tertiary-heading">
                    {props.project.name}
                </h3>
                <Rating stars={props.project.stars} reviews={props.project.reviews}/>
                <p className="paragraph">
                    {props.project.description}
                </p>
                <SkillList skillList={props.project.skills} />
                <div className="project-card-info-developer">
                    <SmallAvatar 
                    person={props.person}
                    textColor="black"
                    />
                    <div className="project-card-info-developer-date">
                        &#8226;
                        <span>{getYYYYMMDD(props.project.date)}</span>
                    </div>
                </div>

            </div>
            <div className="project-card-price animation-moveInRight">
                <BitcoinIcon price={props.project.price}/>
            </div>
        </div>
    );
}