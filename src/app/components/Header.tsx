export default function Header() {
    return <div id="header">

        <div className="top">
            <div id="logo">
                <span className="image avatar48"><img src="images/avatar.jpg" alt="" /></span>
                <h1 id="title">Joe Warner</h1>
                <p>Software Engineer</p>
            </div>

            <nav id="nav">
                <ul>
                    <li><a href="#top" id="top-link"><span className="icon solid fa-home">Intro</span></a></li>
                    <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
                    <li><a href="#about" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
                    <li><a href="#contact" id="contact-link"><span className="icon solid fa-envelope">Contact</span></a></li>
                </ul>
            </nav>

        </div>
        <div className="bottom">
            <ul className="icons">
                <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/superradjoe" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="https://github.com/warnerjoe" className="icon brands fa-github"><span className="label">Github</span></a></li>
                <li><a href="https://www.linkedin.com/in/josephwarner87/" className="icon brands fa-dribbble"><span className="label">LinkedIn</span></a></li>
                <li><a href="mailto:warnerjoe337@icloud.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
            </ul>
        </div>
    </div>
}