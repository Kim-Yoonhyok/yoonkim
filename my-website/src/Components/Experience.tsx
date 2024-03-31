import "./ExperienceStyles.css"

function Experience () {
    return (
        <div className="experience">
            <h1 className="title">Experience</h1>

            <div className="firstExp">
                <div className="expContainer">
                    <h3 className="date">Jan 2024 - Present</h3>
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

            <h4 className="first"></h4>
            <h4 className="second"></h4>
            <h4 className="third"></h4>
        </div>
    )
}

export default Experience
