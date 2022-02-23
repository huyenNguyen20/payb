import { BigButton } from "../../lib/Button/BigButton";
import { FeatureBox } from "../../lib/FeatureBox/FeatureBox";
import { ProjectCard } from "../../lib/Card/ProjectCard";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import "./home.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Experience, Person, Portfolio, Project } from "../../data/interface";
import { getExperience, getPersonDetail, getPortfolio, getProjects } from "../../data/api";

export function Home () {
    //For Data
    const [person, setPerson] = useState<Person | null>(null);
    const [personPortfolio, setPersonPortfolio] = useState<Portfolio[]>([]);
    const [personProjects, setPersonProjects] = useState<Project[]>([]);
    const [personExperience, setPersonExperience] = useState<Experience | null>(null);
    //For Animations
    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false,
        itemFour: false,
        itemFive: false,
    });
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const refFour = useRef(null);
    const refFive = useRef(null);

    useEffect(() => {
        const personData = getPersonDetail();
        if(personData) setPerson(personData);

        const experienceData = getExperience();
        if(experienceData) setPersonExperience(experienceData);

        const portfolioData = getPortfolio();
        if(portfolioData) setPersonPortfolio(portfolioData);

        const projectsData = getProjects();
        if(projectsData) setPersonProjects(projectsData);

    }, []);


    useLayoutEffect(() => {
        const topPos = (element : any) => element.getBoundingClientRect().top;

        const div1Pos = topPos(refOne.current);
        const div2Pos = topPos(refTwo.current);
        const div3Pos = topPos(refThree.current);
        const div4Pos = topPos(refFour.current);
        const div5Pos = topPos(refFive.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            doShow((state) => ({
                itemOne: div1Pos < scrollPos,
                itemTwo: div2Pos < scrollPos,
                itemThree: div3Pos < scrollPos,
                itemFour: div4Pos < scrollPos,
                itemFive: div5Pos < scrollPos,
            }));
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return(
        <>
        <NavBar user={{fullname: "Octavia Jr.", avatarUrl: "/img/person-icon-2.jpg"}}/>
        {person && <Header person={person}/>}
        <main className="home-main">
            <section className="section-main-info">
                <div className="section-main-info-aboutMe">
                    <h2 className="secondary-heading">About Me</h2>
                    <p 
                    className={`paragraph ${show.itemOne && "paragraph--animated"}`} 
                    ref={refOne}>
                        {person && person.description}
                    </p>
                </div>
                <div className="section-main-info-porfolio">
                    <h2 className="secondary-heading">Portfolio</h2>
                    <div 
                    className={`section-main-info-porfolio-list ${show.itemTwo && "animation-moveInLeft"}`} 
                    ref={refTwo}>
                        {personPortfolio.map((item, idx) => (
                            <div key={idx} className="section-main-info-porfolio-list-image">
                                <img src={item.imageUrl} alt="porfolio" className="porfolio-image"/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section-main-info-projects">
                    <h2 className="secondary-heading">Projects</h2>
                    <div className={`section-main-info-projects-list`}>
                        {personProjects.map((i, idx) => (
                            <ProjectCard 
                            key={idx} 
                            project={i}
                            person={{
                                fullname: person?.fullName || "", 
                                avatarUrl: person?.avatarUrl || ""
                            }}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="section-additional-info">
                <div 
                className={`section-additional-info-button ${show.itemOne && "animation-moveInRight"}`} 
                ref={refThree}>
                    <BigButton/>
                </div>
                <div 
                className={`section-additional-info-feature-box ${show.itemTwo && "animation-moveInRight"}`} 
                ref={refFour}>
                    {personExperience && <FeatureBox experience={personExperience}/>}
                </div>
                <div className="section-additional-info-attachments">
                    <h2 className="secondary-heading">Attachments</h2>
                    <div 
                    className={`section-additional-info-attachments-list ${show.itemTwo && "animation-moveInRight"}`}  
                    ref={refFive}>
                        <button className="section-additional-info-attachments-list-item">
                            <span className="subtract-triangle">&nbsp;ab</span>
                            CV
                        </button>
                        <button className="section-additional-info-attachments-list-item">
                            <span className="subtract-triangle">&nbsp;ab</span>
                            Cover Letter
                        </button>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}