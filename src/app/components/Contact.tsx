export default function Contact() {
    return <section id="contact" className="four">
        <div className="container">

            <header>
                <h2>Contact</h2>
            </header>

            <p>I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in my work. 
                Whether you have a project in mind, need some advice, or just want to chat about web development, feel free to reach out. 
                Let's create something amazing together!</p>

                <form id="contact-form">
                    <div className="row">
                        <div className="col-6 col-12-mobile">
                            <input type="text" name="name" placeholder="Name" id="name" required />
                        </div>
                        <div className="col-6 col-12-mobile">
                            <input type="email" name="email" placeholder="Email" id="email" required />
                        </div>
                        <div className="col-12">
                            <textarea name="message" placeholder="Message" id="message" required></textarea>
                        </div>
                        <div className="col-12">
                            <input type="submit" value="Send Message" className="submit" />
                        </div>
                    </div>
                </form>
                

        </div>
    </section>
}