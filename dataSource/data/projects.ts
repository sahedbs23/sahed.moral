import ProjectCardInterface from "@/interfaces/ProjectCardInterface";

export const PROJECTS: ProjectCardInterface[] = [
    {
        title: "1. 123RF.COM",
        description: `123RF.COM is a royalty free stock photo agency with more than <i>28 millions</i> active users.
            As a full stack web application developer <span class="text-black">led the backend development</span> of checkout team in a distributed architecture.
            Also, collaborated with a team of 5 Front-end developers to deliver <a class="text-purple" href="https://www.123rf.com/products/" target="_blank">pricing</a> and <a class="text-purple" target="_blank" href="https://www.123rf.com/purchase/?pkg=credits&plan=30&po=pricing">checkout page</a>.`,
        link: "https://www.123rf.com",
        imgUrl: "https://s3.tebi.io/sahed/123rf.com.png",
        role: "As a result added support for new payment gateways and increased annual revenue by 15%.",
        technologies: [
            "PHP", "Laravel", "Symfony",
            "Node.JS", "Next.JS", "Datadog",
            "Aurora MySQL", "Redis", "ElasticSearch",
            "SCSS", "Eslint", "Babel",
            "Docker", "AWS S3", "Snyk",
            "PayPal", "Adyen", "KG Inicis"
        ]
    },
    {
        title: "2. Perfume World",
        description: `As an AWS Cloud Solution Architect at Perfume World, a leading E-commerce store in Bangladesh, I designed a cutting-edge solution leveraging Amazon Web Services (AWS) to accommodate 20,000 concurrent users, ensuring robust and scalable performance.`,
        link: "https://perfumeworld.com.bd/",
        imgUrl: "https://s3.tebi.io/sahed/perfume-world.com.png",
        role: "Solution Architect",
        technologies: [
            "EC2", "RDS", "S3",
            "Auto-Scaling", "ELB", "SNS",
            "CloudFront", "Elastic IP", "VPC",
            "ElasticCache", "Linux", "CentOS",
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
        imgUrl: "https://s3.tebi.io/sahed/banglalink.net.png",
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
        imgUrl: "https://s3.tebi.io/sahed/fosholi.com.png",
        technologies: [
            "PHP", "Laravel", "Symfony",
            "React", "Redux", 'Nginx', "EC2",
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
        imgUrl: "https://s3.tebi.io/sahed/abbviepro.com.png",
        technologies: [
            "PHP", "Moodle", "MySQL",
            "Node.js", "EC2", "RDS",
            "JIRA", "Confluence", "Brightcove",
            "OAuth 2.0", "SSO", "Google Analytics"
        ]
    },
    {
        title: "6. RS LMS",
        role: "LMS Team Lead",
        description: "RS is a voluntary, humanitarian member organisation, work to make it safer to travel on and by the sea",
        link: "https://rs.no/kurs",
        imgUrl: "https://s3.tebi.io/sahed/learning.rs.no.png",
        technologies: [
            "PHP", "Moodle", "MariaDB",
            "SAML2.0", "Azure VM", "Azure DevOps",
            "HTML5", "CSS3", "RequireJS"
        ]
    },
    {
        title: "7. JOA Automation",
        role: "Technical Lead",
        description: "JOA Automation is a Japan based aid (Grant-in-aid and subsidiary-aid) automation system.",
        link: "https://service.8link.jp",
        imgUrl: "https://s3.tebi.io/sahed/service.8link.jp.png",
        technologies: [
            "PHP", "Laravel", "MySQL",
            "Livewire", "Alpine JS", "Tailwind CSS",
            "Nginx", "Cloudflare", "Axios"
        ]
    },
    {
        title: "8. Grameenphone VTS",
        role: "Full stack developer",
        description: "Real time GPS based vehicle tracking.",
        link: "https://vts.grameenphone.com/",
        imgUrl: "https://s3.tebi.io/sahed/gp-vts.png",
        technologies: [
            "PHP", "Symfony", "Oracle",
            "Redis", "PHPUnit", "PDO",
            "Git", "Angular", "NPM", 'Eslint']
    }
];
