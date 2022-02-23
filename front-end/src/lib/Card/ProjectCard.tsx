import { BitcoinIcon } from "../Icon/BitcoinIcon";
import { Rating } from "../Rating/Rating";
import { SmallAvatar } from "../Avatar/SmallAvatar";
import "./project-card.scss";
import { SkillList } from "../SkillList/SkillList";
import { useLayoutEffect, useRef, useState } from "react";


export function ProjectCard () {
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
                        &#8226;
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