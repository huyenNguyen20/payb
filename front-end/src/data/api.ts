import { Person, Portfolio, Project } from "./interface";

const JanePortfolio : Portfolio[] = [
    {
        imageUrl: "/img/nat-1.jpg"
    },
    {
        imageUrl: "/img/nat-2.jpg"
    },
    {
        imageUrl: "/img/nat-3.jpg"
    },
    {
        imageUrl: "/img/nat-4.jpg"
    },
    {
        imageUrl: "/img/nat-5.jpg"
    },
]
const JaneProject : Project[] = [
    {
        name: "Local Ecommerce",
        stars: 4,
        reviews: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date("2018-02-14"),
        skills: ["Android", "IOS", "SQL", "Python"],
        price: 0.05,
    },
    {
        name: "Online Learning Platform",
        stars: 3,
        reviews: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date("2019-10-14"),
        skills: ["Android", "IOS", "SQL", "Go"],
        price: 0.05,
    },
    {
        name: "Chinese Online School",
        stars: 5,
        reviews: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date("2020-05-14"),
        skills: ["ReactJS", "Flutter", "Loopback"],
        price: 0.05,
    },
    {
        name: "Food Delivery",
        stars: 4,
        reviews: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date("2021-01-14"),
        skills: ["Android", "IOS", "SQL", "Python"],
        price: 0.05,
    },
    {
        name: "Inventory Management System",
        stars: 3,
        reviews: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date("2021-09-14"),
        skills: ["Android", "IOS", "SQL"],
        price: 0.05,
    }

];

const JaneExperience : Experience = {
    jobCompleted: 20,
    rehire: 15,
    skills: ["Android", "IOS", "Flutter", "Go", "Python", "SQL"]
}

const Jane : Person = {
    fullName: "Jane Behr",
    jobs: ["Developer", "Designer"],
    avatarUrl: "/img/person-icon.jpg",
    stars: 4,
    reviews: 10,
    price: 0.0005,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    portfolio: JanePortfolio,
    projects: JaneProject,
    experience: JaneExperience,
}


export interface Experience {
    jobCompleted: number;
    rehire: number;
    skills: string[];
}
export function getPersonDetail() {
    return Jane;
}

export function getExperience() {
    return JaneExperience;
}

export function getPortfolio(){
    return JanePortfolio;
}

export function getProjects(){
    return JaneProject;
}