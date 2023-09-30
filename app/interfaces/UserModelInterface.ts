import {ExperienceInterface} from "@/app/components/shared/ExperienceCard";
import ProjectInterface from "@/app/interfaces/ProjectInterface";

export default interface UserModelInterface {
    githubUsername: string,
    name: string,
    designation: string,
    avatarUrl: string,
    email: string,
    phone: string,
    address: string,
    projects: ProjectInterface[],
    about: object,
    experiences: ExperienceInterface[],
    resumeUrl: string,
    socialLinks: {
        instagram?: string,
        twitter?: string,
        linkedin: string,
        github: string,
        facebook?: string,
        peerlist?: string,
    }
}