import "./ExperienceStyles.css"

function Experience () {
    return (
        <section id='experience'>
            <div className="experience">
                <h1 className="title">Experience</h1>

                <div className="exp">
                    <div className="expContainer">
                        <h3 className="date">Jan 2024 - May 2024</h3>
                        <h2 className="company">Top Hat</h2>
                        <h3 className="location">Toronto, ON</h3>
                        <div className="description">
                            <h4>Software Engineer</h4>
                            <p>• Migrated over 500 unit tests from an Enzyme Library to a React Testing Library for easier maintainability, and
                                better support for user interactions, resulting in a 4% decrease in errors caught by Sentry.</p>
                            <p>• Fixed 20+ critical bugs by utilizing thorough debugging techniques and collaborating with cross-functional teams,
                                contributing to a 40% reduction in average bug resolution time and a 25% increase in user satisfaction ratings.</p>
                            <p>• Refined the notification menu by adding features (name wrapping, thread deep linking, mark all button FASTApi
                                endpoints and react for frontend) which resulted in a 35% increase in student usage</p>
                        </div>
                    </div>
                </div>

                <div className="exp">
                    <div className="expContainer">
                        <h3 className="date">May 2023 - Sept 2023</h3>
                        <h2 className="company">VitaShop</h2>
                        <h3 className="location">Toronto, ON</h3>
                        <div className="description">
                            <h4>Digital Marketing / Frontend Developer</h4>
                            <p>• Refined the website’s interactivity and categorization of products using, PHP, HTML, and CSS, improving
                                customer’s ease of use, resulting in 5-figures in increased earnings.</p>
                            <p>• Integrated advanced tracking solutions and streamline analytic processes through Google Analytics to capture user
                                interactions and behaviour on the website.</p>
                            <p>• Developed code in JavaScript to automate the capture and parsing of website engagement, subsequently decreasing
                                the time required to analyze customer data by 4 hours/week</p>
                        </div>
                    </div>
                </div>

                <div className="exp">
                    <div className="expContainer">
                        <h3 className="date">June 2022 - Sept 2022</h3>
                        <h2 className="company">Cooke Aquaculture</h2>
                        <h3 className="location">Saint John, NB</h3>
                        <div className="description">
                            <h4>Software Developer Intern</h4>
                            <p>• Engineered a Python script to optimize the organization of the company’s active directory, managing over 4000
                                users. The solution significantly enhanced the directory structure, leading to a notable 25% increase in operational
                                efficiency.</p>
                            <p>• Implemented an automated system with PowerShell to reset over 30 development servers every month for
                                reusability, freeing up valuable developer time for more critical tasks.</p>
                            <p>• Developed a Python based IP address tracking solution for company routers to identify any unknown devices, in
                                order to strengthen the network security and defend against potential threats.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience
