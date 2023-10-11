import ProjectCardInterface from "@/interfaces/ProjectCardInterface";

export const PROJECTS: ProjectCardInterface[] = [
    {
        title: "1. Perfume World",
        description: "A renowned E-commerce store based in Bangladesh.",
        link: "https://perfumeworld.com.bd/",
        imgUrl: "https://s3.tebi.io/sahed/pw.png",
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
        imgUrl: "https://s3.tebi.io/sahed/banglalink.png",
        technologies: [
            "PHP", "Laravel", "Symfony",
            "React", "Redux","Oracle",
            "REST APIs", "AWS","GIT",
            "Blade", "Eloquent", "CMS"
        ]
    },
    {
        title: "3. Fosoli",
        description: "App-based platform offering advisory service for the farmers. ",
        role: "Full stack developer",
        link: "https://play.google.com/store/apps/details?id=bd.gov.dgfood.fps&hl=en&gl=US&pli=1",
        imgUrl: "https://s3.tebi.io/sahed/fosholi.jpeg",
        technologies: [
            "PHP", "Laravel", "Symfony",
            "React", "Redux", "EC2",
            "PostgresSQL", "REST APIs", "Firebase",
            "Jenkins", "Memcached", "RabbitMQ",
            "Blade", "Eloquent","CMS",

        ]
    },
    {
        title: "4. Abbvie Pro LMS",
        role: "LMS Developer",
        description: "Learning platform for Abbvie Pro internal medical professionals",
        link: "https://www.abbviepro.com/",
        imgUrl: "https://s3.tebi.io/sahed/abbvie-pro.png",
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
        imgUrl: "https://s3.tebi.io/sahed/rs-lms.png",
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
        imgUrl: "https://s3.tebi.io/sahed/joa.png",
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
        imgUrl: "https://s3.tebi.io/sahed/gp-vts.png",
        technologies: [
            "PHP", "Symfony", "Oracle",
            "Redis", "PHPUnit", "PDO",
            "Git", "Angular", "NPM"]
    }
];
