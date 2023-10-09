import UserModelInterface from "@/interfaces/UserModelInterface";
import SocialLinksInterface from "@/interfaces/SocialLinksInterface";
import ProjectCardInterface from "@/interfaces/ProjectCardInterface";

export const PROJECTS: ProjectCardInterface[] = [
    {
        title: "1. Perfume World",
        description: "A renowned E-commerce store based in Bangladesh.",
        link: "https://perfumeworld.com.bd/",
        imgUrl: "/pw.png",
        role: "Solution Architect",
        technologies: [
            "EC2", "RDS", "S3",
            "Auto-Scaling", "ELB", "SNS",
            "CloudFront", "Elastic IP", "VPC",
            "KMS", "CloudWatch", "CloudTrail",
            "Gitlab", "Azure DevOps", "CodeDeploy"
        ]
    },
    {
        title: "2. Banglalink",
        description: "A prominent telecommunications company with 40 million customers",
        role: "Full stack developer",
        link: "https://banglalink.net/en",
        imgUrl: "/banglalink.png",
        technologies: [
            "PHP", "Laravel", "Oracle", "React", "Redux",
            "REST APIs", "Blade", "Eloquent", "AWS",
        ]
    },
    {
        title: "3. Fosoli",
        description: "App-based platform offering advisory service for the farmers. ",
        role: "Full stack developer",
        link: "https://play.google.com/store/apps/details?id=bd.gov.dgfood.fps&hl=en&gl=US&pli=1",
        imgUrl: "/fosholi.jpeg",
        technologies: [
            "PHP", "Laravel", "PostgresSQL",
            "React", "Redux", "AWS",
            "Jenkins", "Memcached", "RabbitMQ",
        ]
    },
    {
        title: "4. Abbvie Pro LMS",
        role: "LMS Developer",
        description: "Learning platform for Abbvie Pro internal medical professionals",
        link: "https://www.abbviepro.com/",
        imgUrl: "/abbvie-pro.png",
        technologies: [
            "PHP", "Moodle", "MySQL",
            "Node.js", "EC2", "RDS",
            "JIRA", "Confluence", "Brightcove",
            "OAuth 2.0", "SSO", "Google Analytics"
        ]
    },
    {
        title: "5. RS LMS",
        role: "LMS Team Lead",
        description: "RS is a voluntary, humanitarian member organisation, work to make it safer to travel on and by the sea",
        link: "https://rs.no/kurs",
        imgUrl: "/rs-lms.png",
        technologies: [
            "PHP", "Moodle", "MariaDB",
            "SAML2.0", "Azure VM", "Azure DevOps",
            "HTML5", "CSS3", "RequireJS"
        ]
    },
    {
        title: "6. JOA Automation",
        role: "Technical Lead",
        description: "JOA Automation is a Japan based aid (Grant-in-aid and subsidiary-aid) automation system.",
        link: "https://service.8link.jp",
        imgUrl: "/joa.png",
        technologies: [
            "PHP", "Laravel", "MySQL",
            "Livewire", "Alpine JS", "Tailwind CSS",
            "Nginx", "Cloudflare", "Axios"
        ]
    },
    {
        title: "7. Grameenphone VTS",
        role: "Full stack developer",
        description: "Real time GPS based vehicle tracking.",
        link: "https://vts.grameenphone.com/",
        imgUrl: "/gp-vts.png",
        technologies: [
            "PHP", "Symfony", "Oracle",
            "Redis", "PHPUnit", "PDO",
            "Git", "Angular", "NPM"]
    }
];

export const SOCIAL_LINKS: SocialLinksInterface = {
    instagram: "https://instagram.com/maninthere",
    twitter: "https://twitter.com/mannupaaji",
    linkedin: "https://linkedin.com/in/sahed-moral",
    github: "https://github.com/sahedbs23",
    facebook: "https://facebook.com/",
    peerlist: "https://peerlist.io/manuarora",
};

export const USERDATA: UserModelInterface = {
    githubUsername: "sahedbs23",
    name: "Sahed Moral",
    designation: "Full-Stack Developer",
    avatarUrl: "/avatar.png",
    email: "moral.sahed@gmail.com",
    phone: "+880 (171) 499-9720",
    address: "Dhaka, Dhaka, Bangladesh",
    resumeUrl:
        "https://drive.google.com/file/d/1xmE3BOmgM7TAOOgVp36xQIQvYDntDYoo/view?usp=sharing",
};