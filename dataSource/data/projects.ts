import ProjectCardInterface from "@/interfaces/ProjectCardInterface";

export const PROJECTS: ProjectCardInterface[] = [
    {
        title: "1. 123RF.COM",
        description: `123RF.COM is a royalty-free stock photo agency with more than 28 million active users. As a full-stack web application developer I led the backend development of the checkout team in a distributed architecture. Also, collaborated with a team of 5 Front-end developers to deliver pricing and checkout page.`,
        link: "https://www.123rf.com",
        imgUrl: "https://s3.tebi.io/sahed/123rf.com-compresed.png",
        role: "As a result added support for new payment gateways and increased annual revenue by 15%.",
        technologies: [
            "PHP", "Laravel", "Symfony",
            "NodeJS", "NextJS",
            "Aurora MySQL", "Redis", "ElasticSearch",
            "Docker", "AWS S3",
            "SCSS", "Eslint", "Babel",
            "AWIN", "GetResponse", "Google Analytics",
            // "Snyk",  "Datadog",
            // "PayPal", "Adyen", "KG Inicis"
        ]
    },
    {
        title: "2. Perfume World",
        description: `As a Solution Architect at Perfume World, a leading E-commerce store in Bangladesh, I designed a cutting-edge solution leveraging Amazon Web Services (AWS) to accommodate 20,000 concurrent users, ensuring robust and scalable performance.`,
        link: "https://perfumeworld.com.bd/",
        imgUrl: "https://s3.tebi.io/sahed/prefume-world.com-min.png",
        role: "Solution Architect",
        technologies: [
            'CI/CD', "EC2", "RDS", "S3",
            "Auto-Scaling", "ELB", "SNS",
            "CloudFront", "Elastic IP", "VPC",
            "ElasticCache", "Linux",
            // "CentOS",
            "KMS", "CloudWatch", "CloudTrail",
            "Gitlab", "Azure DevOps"
        ]
    },
    {
        title: "3. Banglalink",
        description: `I served as a Frontend Developer, responsible for designing and deploying the plan and pricing page at Banglalink, the second-largest telecommunications company in Bangladesh with 40 million customers.
         Additionally, I worked as a Backend Developer, creating a Content Management System (CMS) for content distribution and developing REST APIs to serve both mobile and web clients.`,
        role: "Full stack developer",
        link: "https://banglalink.net/en",
        imgUrl: "https://s3.tebi.io/sahed/banglalink.net-min.png",
        technologies: [
            "PHP", "Laravel", "Symfony",
            "React", "Redux","Oracle",
            "REST APIs", "AWS","GIT",
            "Blade", "Eloquent", "CMS"
        ]
    },
    {
        title: "4. Fosholi.COM",
        description: `I served as a Full-stack Developer at FOSHOLI.COM, a platform empowering 2.6 million Bangladeshi farmers with crop advisory services, disease reporting, pesticide recommendations, and real-time weather updates within a scrum team`,
        role: "Full stack developer",
        link: "https://play.google.com/store/apps/details?id=bd.gov.dgfood.fps&hl=en&gl=US&pli=1",
        imgUrl: "https://s3.tebi.io/sahed/fosholi.com-min.png",
        technologies: [
            "PHP", "Laravel", "Symfony",
            "ReactJS", "Redux", 'Nginx', "EC2",
            "PostgresSQL", "REST APIs", "Firebase",
            "Jenkins", "Memcached", "RabbitMQ",
            "Blade", "Eloquent","CMS",
        ]
    },
    {
        title: "5. Abbvie Pro LMS",
        role: "LMS Developer",
        description: `As an Offshore Lead Learning Management Developer at AbbVie, I led the development of AbbviePro LMS for internal medicine professionals. This collaborative effort involved Brain Station 51 and the AbbVie Germany team. The LMS, integrated with Adobe Experience Manager (AEM), effectively serves over 5,000 medical professionals in 10 countries across Europe and North America`,
        link: "https://www.abbviepro.com/",
        imgUrl: "https://s3.tebi.io/sahed/abbvie-pro.com-min.png",
        technologies: [
            "PHP", "Moodle", "MySQL",
            "NodeJS", "EC2", "RDS",
            // "JIRA", "Confluence",
            "Brightcove",
            // "OAuth 2.0", "SSO",
            "Google Analytics"
        ]
    },
    {
        title: "6. RS LMS",
        role: "LMS Team Lead",
        description: "As the LMS Technical Lead at RS, a humanitarian organization focused on sea safety, I led a collaborative effort with Brain Station 23 Ltd's Norwegian partner, GTure, within an agile team. I played a pivotal role in architecting and implementing critical features for the Learning Management System (LMS). Today, this LMS successfully educates over 40,000 students in sea rescue training.",
        link: "https://rs.no/kurs",
        imgUrl: "https://s3.tebi.io/sahed/learning.rs.no-min.png",
        technologies: [
            "PHP", "Moodle", "MariaDB",
            'Single sign-on (SSO)', "SAML2.0", "Azure VM", "Azure DevOps",
            "HTML5", "CSS3", "RequireJS"
        ]
    },
    {
        title: "7. JOA Automation",
        role: "Technical Lead",
        description: "At JOA Automation, a Japan-based aid automation system, I led an offshore team consisting of 3 developers and 1 designer. My responsibilities included analyzing project requirements, designing the database, leading the development efforts, and successfully delivering the project.",
        link: "https://service.8link.jp",
        imgUrl: "https://s3.tebi.io/sahed/service.8link.jp-min.png",
        technologies: [
            "PHP", "Laravel", "MySQL",
            "Livewire", "AlpineJS", "Tailwind CSS",
            "Nginx", "Cloudflare",
            // "Axios"
        ]
    },
    {
        title: "8. Grameenphone VTS",
        role: "Full stack developer",
        description: "GP VTS is a realtime GPS based vehicle tracking application. As a backend-focused full-stack developer, I developed a lightweight PHP framework utilizing Symfony components, designed REST APIs, and collaborated with other frontend developers to implement pixel-perfect responsive design.",
        link: "https://vts.grameenphone.com/",
        imgUrl: "https://s3.tebi.io/sahed/gp-vts-compresed.png",
        technologies: [
            "PHP", "Symfony", "Oracle",
            "Redis", "PHPUnit", "PDO",
            "Git", "Angular", "Bootstrap"
            // "NPM", 'Eslint'
        ]
    }
];
