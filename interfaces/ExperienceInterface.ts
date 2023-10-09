export default interface ExperienceInterface {
    title: string
    description: string
    year: string
    company: string
    location?: string
    companyLink: string
    roleResponsibilities: string[],
    achievements: string[],
    additionalData?: string[]
}