export interface Person {
    fullName: string;
    jobs: string[];
    avatarUrl: string;
    stars: number;
    reviews: number;
    price: number;
    description: string;
    portfolio: Portfolio[];
    projects: Project[];
    experience: Experience;
}

export interface Portfolio {
    imageUrl: string;
}

export interface Project {
    name: string;
    stars: number;
    reviews: number;
    description: string;
    date: Date;
    skills: string[];
    price: number;
}

export interface Experience {
    jobCompleted: number;
    rehire: number;
    skills: string[];
}