import UserModelInterface from "@/interfaces/UserModelInterface";
import {ExperienceInterface} from "@/components/shared/ExperienceCard";
import ProjectInterface from "@/interfaces/ProjectInterface";
import AboutMeInterface from "@/interfaces/AboutMeInterface";
import SocialLinksInterface from "@/interfaces/SocialLinksInterface";
import ProjectCardInterface from "@/interfaces/ProjectCardInterface";

export const experiences: ExperienceInterface[] = [
    {
        title: "Software Developer",
        company: "mroads",
        year: "2021",
        companyLink: "https://mroads.com",
        desc: "Contributed to our flagship product - Panna - which is an AI powered candidate interviewing product.",
    },
    {
        title: "Founder and Developer",
        company: "TailwindMasterKit",
        year: "2021",
        companyLink: "https://tailwindmasterkit.com",
        desc: "Developed a marketplace for tailwind web components (React, HTML and Angular) and templates.",
    },
    {
        title: "Founder and Developer",
        company: "Algochurn",
        year: "2021",
        companyLink: "https://algochurn.com",
        desc: "Your last moment revision friend right before a Tech coding interview. Practice problems and get hired at top Product based companies.",
    },
    {
        title: "Internship",
        company: "Intel Corporation",
        year: "2019",
        companyLink: "https://intel.com",
        desc: "Developed pothole detection system with OpenCV and computer vision, detects potholes on roads and informs the driver.",
    },
    {
        title: "Graduation",
        company: "UPES, Dehradun.",
        year: "2019",
        companyLink: "https://upes.co.in",
        desc: "Major in Computer Science and Engineering with a CGPA of 7.0. Nobody asks this but it's okay.",
    },
    {
        title: "High School",
        company: "Delhi Public School, Jaipur.",
        year: "2015",
        companyLink: "https://upes.co.in",
        desc: "Subjects being PCM - I barely survived with 93.6% marks aggregate. Flex fridays, fellas.",
    },
];
export const PROJECTS: ProjectCardInterface[] = [
    {
        title: "Banglalink Telecommunication",
        link: "https://banglalink.net/en",
        imgUrl: "/banglalink.png",
        technologies:[
            "PHP", "Laravel", "Oracle","React", "Redux",
            "REST APIs", "Blade", "Eloquent","AWS",
        ]
    },
    {
        title: "Fosoli",
        link: "https://play.google.com/store/apps/details?id=bd.gov.dgfood.fps&hl=en&gl=US&pli=1",
        imgUrl: "/fosholi.jpeg",
        technologies:[
            "PHP", "Laravel", "PostgresSQL","React", "Redux",
            "Jenkins", "Memcached", "RabbitMQ","AWS",
        ]
    },
    {
        title: "Abbvie Pro",
        link: "https://www.abbviepro.com/",
        imgUrl: "/abbvie-pro.png",
        technologies:[
            "PHP","Moodle", "MySQL",
            "Node.js", "OAuth 2.0", "Brightcove"
        ]
    },
    {
        title: "RS LMS",
        link: "https://rs.no/kurs",
        imgUrl: "/rs-lms.png",
        technologies:[
            "PHP","Moodle", "MariaDB", "SAML2.0", "Azure VM", "Azure DevOps",
        ]
    },
    {
        title: "Grameenphone VTS",
        link: "https://vts.grameenphone.com/",
        imgUrl: "/gp-vts.png",
        technologies:["PHP","Symfony", "Oracle", "Redis", "Angular", "Git"]
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

export const SOCIAL_LINKS:SocialLinksInterface = {
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