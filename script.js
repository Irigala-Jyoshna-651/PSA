document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');

    // Burger Menu Toggle Logic
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            body.classList.toggle('no-scroll');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    body.classList.remove('no-scroll');
                }
            });
        });
    }

    // Content Loading Logic with Fallback
    const loadContent = async () => {
        try {
            // Try to load from local JSON file first
            const response = await fetch('content.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            renderContent(data);
        } catch (fetchError) {
            console.warn('Failed to fetch content.json, using embedded data:', fetchError);
            
            // Embedded fallback data (same as your content.json)
            const fallbackData = {
                global: {
                    instituteName: "GATES INSTITUTE OF TECHNOLOGY",
                    projectType: "Community Service Project (CSP)",
                    logoImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCmGgdfTQvxIziaigTaStHsoz3nB4RZCOUoiERkRKU0SNxTbWriewBNchC7efQyLnzBc&usqp=CAU",
                    socialMedia: [],
                    footerLinks: [
                        { text: "Privacy Policy", url: "#" },
                        { text: "Terms of Service", url: "#" },
                        { text: "Sitemap", url: "#" }
                    ],
                    copyrightYear: "2025"
                },
                landingPage: {
                    title: "GATES Institute of Technology - Community Service Project",
                    hero: {
                        heading1: "Community Service Project",
                        heading2: "IoT Solutions for a Better Tomorrow",
                        paragraph: "Welcome to our academic endeavor from **GATES INSTITUTE OF TECHNOLOGY**. We're leveraging **IoT technology** to address real-world community challenges and create impactful solutions.",
                        ctaButtonText: "Explore Our Innovations",
                        ctaButtonLink: "projects_team.html",
                        backgroundImage: "https://source.unsplash.com/1600x900/?technology,community,iot"
                    },
                    acknowledgement: {
                        heading: "A Project by Students of GATES Institute of Technology",
                        paragraph: "This Community Service Project (CSP) is a testament to our commitment to practical learning and societal contribution. We aim to apply theoretical knowledge to solve tangible problems within our community."
                    },
                    features: [
                        {
                            icon: "https://via.placeholder.com/80x80/28a745/FFFFFF?text=IoT",
                            title: "IoT-Driven Solutions",
                            description: "Developing smart, connected systems to monitor, collect data, and automate community services."
                        },
                        {
                            icon: "https://via.placeholder.com/80x80/007bff/FFFFFF?text=Comm",
                            title: "Direct Community Impact",
                            description: "Our projects are designed to directly benefit local communities, addressing specific needs."
                        },
                        {
                            icon: "https://via.placeholder.com/80x80/6c757d/FFFFFF?text=Acad",
                            title: "Academic Excellence",
                            description: "Integrating advanced technical skills with practical application for robust solutions."
                        }
                    ],
                    aboutUs: {
                        heading: "Our Mission & Vision",
                        paragraph: "Our mission is to apply our knowledge in Information Technology and Electronics to develop sustainable and scalable solutions for community well-being. We envision a future where technology empowers every aspect of public service.",
                        buttonText: "Meet The Team",
                        buttonLink: "projects_team.html"
                    }
                },
                iframePage: {
                    title: "Live IoT Data - ThingSpeak",
                    mainHeading: "Live IoT Data from ThingSpeak",
                    description: "This section showcases real-time data from our **IoT projects**, streamed directly through **ThingSpeak**. This demonstrates the operational status and effectiveness of our implemented solutions.",
                    iframes: [
                        {
                            id: "thingSpeakChart1",
                            title: "IoT Reading: Environmental Sensor",
                            src: "https://thingspeak.com/channels/YOUR_CHANNEL_ID_1/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Environmental+Sensor&type=line&width=auto",
                            fieldDescription: "This chart displays real-time temperature and humidity data collected from our environmental monitoring unit, providing insights into local conditions."
                        }
                    ],
                    footerDescription: "The data shown reflects the current state of our IoT deployments. This real-time feedback is crucial for monitoring and validating our project's impact."
                },
                projectsTeamPage: {
                    title: "Our CSP Projects & Team - GATES",
                    projectsSectionHeading: "Our IoT-Based CSP Initiatives",
                    projectsDetails: {
                        title: "Integrated Smart Community Solutions",
                        description: "Our Community Service Project focuses on developing innovative IoT-based solutions to enhance various aspects of community living. We address challenges in waste management, environmental monitoring, and energy efficiency. Our approach involves deploying low-cost sensors, real-time data analysis through platforms like ThingSpeak, and creating user-friendly interfaces for community engagement. This project is a practical application of our academic knowledge to create tangible benefits for society."
                    },
                    teamSectionHeading: "Our Dedicated 5-Member Team",
                    teamMembers: [
                        {
                            image: "https://randomuser.me/api/portraits/men/1.jpg",
                            name: "[Student Name 1]",
                            role: "Team Lead / IoT Architect",
                            bio: "Responsible for overall project coordination and core IoT system architecture. Passionate about smart solutions and efficient data flow."
                        },
                        {
                            image: "https://randomuser.me/api/portraits/women/2.jpg",
                            name: "[Student Name 2]",
                            role: "Hardware & Sensor Integration",
                            bio: "Expert in sensor calibration, microcontroller programming, and building robust hardware prototypes for reliable data acquisition."
                        },
                        {
                            image: "https://randomuser.me/api/portraits/men/3.jpg",
                            name: "[Student Name 3]",
                            role: "Software & Data Management",
                            bio: "Handles data parsing, cloud integration (ThingSpeak), and developing the application logic for our IoT deployments and data processing."
                        },
                        {
                            image: "https://randomuser.me/api/portraits/women/4.jpg",
                            name: "[Student Name 4]",
                            role: "Web Development & UI/UX",
                            bio: "Focuses on creating user-friendly web interfaces and ensuring our project's data is presented clearly and effectively, enhancing user experience."
                        },
                        {
                            image: "https://randomuser.me/api/portraits/men/5.jpg",
                            name: "[Student Name 5]",
                            role: "Research & Community Liaison",
                            bio: "Conducts research on community needs and ensures our projects are relevant and impactful, bridging technological solutions with real-world problems and engagement."
                        }
                    ]
                }
            };
            
            renderContent(fallbackData);
        }
    };

    // Main render function
    function renderContent(data) {
        renderGlobalElements(data.global);

        const path = window.location.pathname;
        if (path.includes('iframe_page.html')) {
            renderIframePage(data.iframePage);
        } else if (path.includes('projects_team.html')) {
            renderProjectsTeamPage(data.projectsTeamPage);
        } else {
            renderLandingPage(data.landingPage);
        }
    }

    // Rendering Functions (keep your existing functions exactly as they are)
    function renderGlobalElements(globalData) {
        const pageTitleElement = document.getElementById('pageTitle');
        if (pageTitleElement) {
            pageTitleElement.textContent = globalData.instituteName + " - " + globalData.projectType;
        }

        const instituteLogo = document.getElementById('instituteLogo');
        if (instituteLogo) {
            instituteLogo.src = globalData.logoImage;
            instituteLogo.alt = globalData.instituteName + " Logo";
        }

        const footerLogo = document.getElementById('footerLogo');
        if (footerLogo) {
            footerLogo.textContent = globalData.instituteName;
        }

        const footerLinksUl = document.querySelector('#footerLinks ul');
        if (footerLinksUl) {
            footerLinksUl.innerHTML = '';
            globalData.footerLinks.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.text;
                li.appendChild(a);
                footerLinksUl.appendChild(li);
            });
        }

        const socialMediaIconsDiv = document.getElementById('socialMediaIcons');
        if (socialMediaIconsDiv) {
            socialMediaIconsDiv.innerHTML = '';
        }

        const copyrightText = document.getElementById('copyrightText');
        if (copyrightText) {
            copyrightText.textContent = `© ${globalData.copyrightYear} ${globalData.instituteName} ${globalData.projectType}. All rights reserved.`;
        }
    }

    function renderLandingPage(pageData) {
        document.getElementById('pageTitle').textContent = pageData.title;

        const heroSection = document.getElementById('heroSection');
        const heroBackgroundImage = pageData.hero.backgroundImage;

        const img = new Image();
        img.src = heroBackgroundImage;
        img.onload = () => {
            heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackgroundImage})`;
            heroSection.classList.add('loaded');
        };
        img.onerror = () => {
            console.error('Failed to load hero background image:', heroBackgroundImage);
            heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://via.placeholder.com/1600x900/444444/FFFFFF?text=Background+Error')`;
            heroSection.classList.add('loaded');
        };

        document.getElementById('heroHeading1').innerHTML = pageData.hero.heading1;
        document.getElementById('heroHeading2').innerHTML = pageData.hero.heading2;
        document.getElementById('heroParagraph').innerHTML = pageData.hero.paragraph;
        const heroCtaButton = document.getElementById('heroCtaButton');
        heroCtaButton.textContent = pageData.hero.ctaButtonText;
        heroCtaButton.href = pageData.hero.ctaButtonLink;

        document.getElementById('acknowledgementHeading').textContent = pageData.acknowledgement.heading;
        document.getElementById('acknowledgementParagraph').textContent = pageData.acknowledgement.paragraph;

        const featuresContainer = document.getElementById('featuresContainer');
        if (featuresContainer) {
            featuresContainer.innerHTML = '';
            pageData.features.forEach(feature => {
                const featureItem = document.createElement('div');
                featureItem.className = 'feature-item';
                featureItem.innerHTML = `
                    <img src="${feature.icon}" alt="${feature.title} Icon">
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                `;
                featuresContainer.appendChild(featureItem);
            });
        }

        document.getElementById('aboutUsHeading').textContent = pageData.aboutUs.heading;
        document.getElementById('aboutUsParagraph').textContent = pageData.aboutUs.paragraph;
        const aboutUsButton = document.getElementById('aboutUsButton');
        aboutUsButton.textContent = pageData.aboutUs.buttonText;
        aboutUsButton.href = pageData.aboutUs.buttonLink;
    }

    function renderIframePage(pageData) {
        document.getElementById('pageTitle').textContent = pageData.title;

        document.getElementById('iframeMainHeading').textContent = pageData.mainHeading;
        document.getElementById('iframeDescription').innerHTML = pageData.description;

        const iframesWrapper = document.getElementById('iframesWrapper');
        if (iframesWrapper) {
            iframesWrapper.innerHTML = '';
            if (pageData.iframes && pageData.iframes.length > 0) {
                const iframeData = pageData.iframes[0];
                const responsiveWrapper = document.createElement('div');
                responsiveWrapper.className = 'responsive-iframe-wrapper';
                responsiveWrapper.innerHTML = `
                    <iframe id="${iframeData.id}"
                            src="${iframeData.src}"
                            title="${iframeData.title}"
                            frameborder="0"
                            allowfullscreen>
                    </iframe>
                    <p class="iframe-description">${iframeData.fieldDescription}</p>
                `;
                iframesWrapper.appendChild(responsiveWrapper);
            } else {
                iframesWrapper.innerHTML = '<p>No ThingSpeak charts available.</p>';
            }
        }

        document.getElementById('iframeFooterDescription').textContent = pageData.footerDescription;
    }

    function renderProjectsTeamPage(pageData) {
        document.getElementById('pageTitle').textContent = pageData.title;

        document.getElementById('projectsSectionHeading').textContent = pageData.projectsSectionHeading;

        const projectDetailsTitle = document.getElementById('projectDetailsTitle');
        const projectDetailsDescription = document.getElementById('projectDetailsDescription');
        if (projectDetailsTitle && projectDetailsDescription && pageData.projectsDetails) {
            projectDetailsTitle.textContent = pageData.projectsDetails.title;
            projectDetailsDescription.textContent = pageData.projectsDetails.description;
        } else {
            console.warn("Project details elements or data not found.");
            document.querySelector('.project-details-section').style.display = 'none';
        }

        document.getElementById('teamSectionHeading').textContent = pageData.teamSectionHeading;
        const teamGrid = document.getElementById('teamGrid');
        if (teamGrid) {
            teamGrid.innerHTML = '';
            pageData.teamMembers.forEach(member => {
                const teamMemberCard = document.createElement('div');
                teamMemberCard.className = 'team-member-card';
                teamMemberCard.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                    <p class="member-bio">${member.bio}</p>
                `;
                teamGrid.appendChild(teamMemberCard);
            });
        }
    }

    // Initialize content loading
    loadContent();
});