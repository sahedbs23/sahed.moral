import ExperienceInterface from "@/interfaces/ExperienceInterface";

const experiences: ExperienceInterface[] = [
    {
        company: "INMAGINE",
        location: "Collyer Quay, Singapore - remote",
        companyLink: "https://www.inmagine.com",
        positions: [
            {
                title: "Senior Web Application Developer",
                year: "April 2022 - Present",
                roleResponsibilities: [
                    'Led Backend Development',
                    'Front End Collaboration',
                ],
                description: 'As a senior full-stack software engineer, I spearheaded both backend development and collaborative efforts with the frontend team for the 123RF.COM checkout page.',
                achievements: [
                    'Successfully integrated the KG Inicis payment gateway, achieving an 8% reduction in payment processing costs',
                    'Implemented Auto-Rescue for the Adyen Payment gateway, boosted recurring payments by 5%',
                    'Spearheaded Unit and Integration testing efforts, reduced 3% production bugs',
                    'Refactored code, optimized and scaled database structure and queries, implemented API caching, improving API response time by 30%',
                    'Significantly enhanced application performance and memory efficiency by upgrading legacy PHP 5.6 Rest APIs to PHP 7.4',
                    'Streamlined the user onboarding process by integrating Social Login, reducing the time spent by new users by 25%',
                    'Collaborated with a cross-functional team of 4 Front-end developers and 3 designers to conceive, develop, and successfully deploy the checkout and pricing pages',
                    'Collaborated with the marketing team to boost sales by integrating third-party marketing tools such as GetResponse, Google Analytics, and etc'
                ]
            }
        ],

    },
    {
        company: "Brain Station 23 Ltd.",
        location: "Dhaka, Bangladesh - onsite",
        companyLink: "https://brainstation-23.com",
        positions: [
            {
                title: "Senior Software Engineer",
                year: "January 2021 - March 2022",
                description: 'Started LMS team just with 2 co-workers, Ended up with leading a team of 13 engineers, 1 QA, 1 BA(Business Analyst) to Design, Implement, and Deliver Moodle based Learning Management System',
                roleResponsibilities: [
                    'Led LMS development',
                    'Contribution to Moodle open-source community',
                    'Architecting cloud solutions',
                    // 'Train freshers',
                ],
                achievements: [
                    'Delivered LMS solution for more tha 5 clients.',
                    'Led the development and publication of 5+ open-source Moodle plugins adopted by 1500+ organizations.',
                    'As a AWS cloud solution architect designed a scalable cloud solution to support 20,000 concurrent users.',
                    'Implemented Continuous Integration/Delivery (CI/CD) with the Blue-Green deployment strategy, achieved a zero deployment downtime.',
                    'Designed the database, Led a team of 4 to build and ship JOA-Automation, delivered 4 weeks ahead of the deadline.',
                    'Implemented Single Sign-On (SSO) functionality, optimizing access for a user base exceeding 50,000 individuals.',
                ]
            },
            {
                title: "Software engineer",
                year: "September 2019 – December 2020",
                description: 'A full stack software engineer for 123RF.COM checkout page, responsible for led backend development and frontend collaborations',
                roleResponsibilities: [
                    'Front End Development',
                    'Backend Development',
                ],
                achievements: [
                    'Designed and launched an AD portal for Fosholi, successfully delivering personalized advertisements to the intended target audience.',
                    'Built and shipped the Plans and Offers page for Banglalink, a prominent telecommunication company with 40 million customers.',
                    'Designed and developed the Fosholi web portal, a transformative web application empowering 2.6 million Bangladeshi farmers.',
                    'Created reliable, secure, scalable APIs, enhancing system security and reliability',
                    'Upgraded Fosholi web portal from react version 9 to version 13',
                    'Collaboration a team of 5 to develop Content Management System (CMS)'
                ]
            },
        ]

    },

    {
        company: "NexDecade Technology Pvt. Ltd.",
        location: "Dhaka, Bangladesh - onsite",
        companyLink: "https://en.nexdecade.com",
        positions: [{
            title: "Software Engineer",
            year: "April 2018 - August 2019",
            description: 'A full stack software engineer for 123RF.COM checkout page, responsible for led backend development and frontend collaborations',
            roleResponsibilities: [
                'Front End Development',
                'Backend Development',
            ],
            achievements: [
                'Restructured Grameenphone vehicle tracking system (VTS) web application, separated frontend and backend.',
                'Improved website performance by implementing a custom PHP framework, seamlessly integrated with CodeIgniter and Symfony components, and leveraging REST APIs, resulting in a 5-second reduction in page load time.',
                'Rebuilt live vehicle tracking page to the new design system, which increased user engagement and time spent by 5+%.',
                'Led the development of vehicle management system.',
            ]
        }]

    },
    {
        company: "Insert Technologies",
        location: "Dhaka, Bangladesh - onsite",
        companyLink: "https://www.linkedin.com/company/inserttech/",
        positions: [{
            title: "Software Engineer",
            year: "December 2014 - March 2018",
            description: 'A full stack software engineer for 123RF.COM checkout page, responsible for led backend development and frontend collaborations',
            roleResponsibilities: [
                'Front End Development',
                'Backend Development',
            ],
            achievements: [
                'Designed, built, and shipped a car booking management application.',
                'Develop a Hospital Enterprise Resource Planning (ERP) system in collaboration with a team of 9.',
                'Designed and developed in-patient and out-patient modules from scratch.',
                'Collaborated with 3 others developer to develop a Inventory Management System. Implemented (First-in first-out) FIFO to reduce risk of obsolescence and spoilage',
                'Developed 10+ custom wordpress plugins'
            ]
        }]

    }
];
export default experiences;