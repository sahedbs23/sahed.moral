import UserModelInterface from "@/interfaces/UserModelInterface";
import ExperienceInterface from "@/interfaces/ExperienceInterface";
import AboutMeInterface from "@/interfaces/AboutMeInterface";
import SocialLinksInterface from "@/interfaces/SocialLinksInterface";
import ProjectCardInterface from "@/interfaces/ProjectCardInterface";

export const experiences: ExperienceInterface[] = [
    {
        title: "Senior Web Application Developer",
        company: "INMAGINE Lab. Pvt. Ltd.",
        year: "April 2022 - Present",
        companyLink: "https://www.inmagine.com",
        roleResponsibilities: [
            'Front End Development',
            'Backend Development',
        ],
        achievements:[
            'developed social login',
            'Integrated PayPal, Adyen, and KG Inicis payment gateway',
        ]
    },
    {
        title: "Senior Software engineer",
        company: "Brain Station 23 Limited",
        year: "2021",
        companyLink: "https://brainstation-23.com",
        roleResponsibilities: [
            'Front End Development',
            'Backend Development',
        ],
        achievements:[
            'developed social login',
            'Integrated PayPal, Adyen, and KG Inicis payment gateway',
        ]
    },
    {
        title: "Software engineer",
        company: "Brain Station 23 Limited",
        year: "2021",
        companyLink: "https://algochurn.com",
        roleResponsibilities: [
            'Front End Development',
            'Backend Development',
        ],
        achievements:[
            'developed social login',
            'Integrated PayPal, Adyen, and KG Inicis payment gateway',
        ]
    },
    {
        title: "Software Engineer",
        company: "NexDecade Technology Pvt. Ltd.",
        year: "2019",
        companyLink: "https://intel.com",
        roleResponsibilities: [
            'Front End Development',
            'Backend Development',
        ],
        achievements:[
            'developed social login',
            'Integrated PayPal, Adyen, and KG Inicis payment gateway',
        ]
    },
    {
        title: "Software Engineer",
        company: "Inert Technologies",
        year: "2019",
        companyLink: "https://www.linkedin.com/company/inserttech/",
        roleResponsibilities: [
            'Front End Development',
            'Backend Development',
        ],
        achievements:[
            'developed social login',
            'Integrated PayPal, Adyen, and KG Inicis payment gateway',
        ]
    }
];
export const PROJECTS: ProjectCardInterface[] = [
    {
        title: "1. Perfume World",
        description: "A renowned E-commerce store based in Bangladesh.",
        link: "https://perfumeworld.com.bd/",
        imgUrl: "/pw.png",
        role:"Solution Architect",
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
        role:"Full stack developer",
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
        role:"Full stack developer",
        link: "https://play.google.com/store/apps/details?id=bd.gov.dgfood.fps&hl=en&gl=US&pli=1",
        imgUrl: "/fosholi.jpeg",
        technologies: [
            "PHP", "Laravel", "PostgresSQL", "React", "Redux",
            "Jenkins", "Memcached", "RabbitMQ", "AWS",
        ]
    },
    {
        title: "4. Abbvie Pro LMS",
        role:"LMS Developer",
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
        role:"LMS Team Lead",
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
        title: "6. Grameenphone VTS",
        role:"Full stack developer",
        description: "Real time GPS based vehicle tracking.",
        link: "https://vts.grameenphone.com/",
        imgUrl: "/gp-vts.png",
        technologies: [
            "PHP", "Symfony", "Oracle",
            "Redis", "PHPUnit", "PDO",
            "Git","Angular","NPM"]
    }
];

export const ABOUT_ME: AboutMeInterface = {
    title:
        "I'm a software developer that loves building products and web applications that impact millions of lives",
    description: [
        `I've been developing full-stack application since I was 10 years old. I didn't know what full-stack meant at that time because the term was not coined back then. I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.`,
        `After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don't have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.`,
        `But now, I'm a legend. I've been coding in React, Angular, Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and YouDontKnowShit programming language etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.`,
    ],
    currentProject: "Tailwind Master Kit",
    currentProjectUrl: "https://tailwindmasterkit.com",
};

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