
interface ExperienceDetail {
    title: string
    description: string
    year: string
    roleResponsibilities: string[],
    achievements: string[],
    additionalData?: string[]
}

export default interface ExperienceInterface {
    company: string
    positions:ExperienceDetail[]
    location?: string
    companyLink: string
}