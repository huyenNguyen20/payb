import { BigButton } from "../../lib/Button/BigButton";
import { FeatureBox } from "../../lib/FeatureBox/FeatureBox";
import { ProjectCard } from "../../lib/Card/ProjectCard";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import "./home.scss";

export function Home () {
    return(
        <>
        <NavBar/>
        <Header/>
        <main className="home-main">
            <section className="section-main-info">
                <div className="section-main-info-aboutMe">
                    <h2 className="secondary-heading">About Me</h2>
                    <p className="paragraph paragraph--animated">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="section-main-info-porfolio">
                    <h2 className="secondary-heading">Portfolio</h2>
                    <div className="section-main-info-porfolio-list animation-moveInLeft">
                        <div className="section-main-info-porfolio-list-image">
                            <img src="img/person-icon.jpg" alt="porfolio" className="porfolio-image"/>
                        </div>
                        <div className="section-main-info-porfolio-list-image">
                            <img src="img/person-icon.jpg" alt="porfolio" className="porfolio-image"/>
                        </div>
                        <div className="section-main-info-porfolio-list-image">
                            <img src="img/person-icon.jpg" alt="porfolio" className="porfolio-image"/>
                        </div>
                        <div className="section-main-info-porfolio-list-image">
                            <img src="img/person-icon.jpg" alt="porfolio" className="porfolio-image"/>
                        </div>
                    </div>
                </div>
                <div className="section-main-info-projects">
                    <h2 className="secondary-heading">Projects</h2>
                    <div className="section-main-info-projects-list animation-moveInLeft">
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                </div>
            </section>
            <section className="section-additional-info">
                <div className="section-additional-info-button animation-moveInRight">
                    <BigButton/>
                </div>
                <div className="section-additional-info-feature-box animation-moveInRight">
                    <FeatureBox/>
                </div>
                <div className="section-additional-info-attachments">
                    <h2 className="secondary-heading">Attachments</h2>
                    <div className="section-additional-info-attachments-list animation-moveInRight">
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