export default function Portfolio() {
    return <section id="portfolio" className="two">
        <div className="container">

            <header>
                <h2>Portfolio</h2>
            </header>

            <p>Welcome to my projects section! Here, you can check out the web applications I've built.  For the time being, I have linked to Github repositories containing the code. 
                If you have any questions or just want to chat, feel free to reach out via the form below.</p>

            <div className="row">
                <div className="col-4 col-12-mobile">
                    <article className="item">
                        <a href="https://github.com/warnerjoe/rddb-2" className="image fit"><img src="images/rddb.png" alt="" /></a>
                        <header>
                            <h3>RDDB</h3>
                            <p>Stack: React, Node, Mongoose, Express, TailwindCSS</p>
                        </header>
                    </article>
                    <article className="item">
                        <a href="https://github.com/warnerjoe/employee-error-reporter" className="image fit"><img src="images/error-reporter.png" alt="" /></a>
                        <header>
                            <h3>Error Tracker Spreadsheet</h3>
                            <p>Stack: Google App Scripts, Javascript</p>
                        </header>
                    </article>
                </div>
                <div className="col-4 col-12-mobile">
                    <article className="item">
                        <a href="mma.html" className="image fit"><img src="images/mma.png" alt="" /></a>
                        <header>
                            <h3>MMA Gym Website</h3>
                            <p>Stack: HTML, CSS</p>
                        </header>
                    </article>
                    <article className="item">
                        <a href="https://github.com/warnerjoe/nodeportfolio" className="image fit"><img src="images/nodeportfolio.png" alt="" /></a>
                        <header>
                            <h3>Node Portfolio</h3>
                            <p>Stack: Node, HTML, CSS, JS</p>
                        </header>
                    </article>
                </div>
                <div className="col-4 col-12-mobile">
                    <article className="item">
                        <a href="https://github.com/warnerjoe/WrestleGPT" className="image fit"><img src="images/wrestlegpt.png" alt="" /></a>
                        <header>
                            <h3>WrestleGPT</h3>
                            <p>Stack: HTML, Bootstrap CSS, JavaScript, Node, Express, Axios, Mongoose, OpenAI API</p>

                        </header>
                    </article>
                    <article className="item">
                        <a href="restaurant.html" className="image fit"><img src="images/restaurant.png" alt="" /></a>
                        <header>
                            <h3>Restaurant Website</h3>
                            <p>Stack: HTML, CSS</p>
                        </header>
                    </article>
                </div>
            </div>

        </div>
    </section>
}