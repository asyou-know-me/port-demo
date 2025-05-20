import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    transition: { type: "spring", stiffNess: 250 },
    y: 0,
  },
  view: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay: 0.2, duration: 0.4 },
  },
};

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "42b1acf7-ef6e-445c-9b65-ad6712eb51c6");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    window.location.reload();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }
};
function Details() {
  return (
    <>
      <motion.div
        className="profile-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView="view"
      >
        <div className="profile">
          <img src="port-prpfile.png" alt="" />
        </div>
        <div className="about">
          <>
            Hi, I'm Kasa Anil Kumar — a passionate and innovative Web Developer
            currently pursuing a Bachelor of Science in Computer Science at
            Osmania University (2023-2026). <br />
            <br />
            My journey in web development is driven by a deep interest in
            creating responsive, user-centric digital experiences. With a strong
            foundation in HTML, CSS, JavaScript, and React.js, I've built
            several hands-on projects, including:
            <ul>
              <li>A fully interactive Netflix Clone</li>
              <li>
                A dynamic Movie Browser built using React.js and Bootstrap 5
              </li>
              <li>
                {" "}
                A feature-rich To-Do List app with local storage integration
              </li>
              <li>A fully interactive Netflix Clone</li>
              <li>
                A Notes app that helps user to take down important notes when
                needed{" "}
              </li>
            </ul>
            These projects highlight my commitment to blending creativity with
            technical precision. I'm a fast learner with an eye for detail, and
            I thrive on solving complex challenges and collaborating to turn
            ideas into reality. I continuously strive to stay at the cutting
            edge of technology. With strong communication skills and a growth
            mindset, I'm eager to join a forward-thinking full-stack development
            team where I can contribute, learn from experienced professionals,
            and build impactful digital solutions. <br /> <br />
            Let's connect and create something amazing together !!
          </>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffNess: 300 }}
        className="skills-container"
      >
        <h2>Languages known</h2>
        <div>
          <img src="HTML5.svg" alt="" />
          <img src="CSS3.svg" alt="" />
          <img src="js.png" alt="" />
          <img src="React.svg" alt="" />
          <img src="Node.js_logo.svg" alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="prjcts"
      >
        <h1>PROJECTS</h1>
        <div className="prjcts-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="prjct"
          >
            <img src="Movie Browser.png" alt="" />
            <div style={{ borderTop: "1px solid #b2beb5" }}>
              <h4>Movie Browser</h4>
              <p>
                Created a dynamic movie search platform using React.js and
                external movie API.
              </p>
              <a
                href="https://github.com/asyou-know-me/Movie-Browser.git"
                target="/"
              >
                <button className="src-btn">Source code </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="prjct"
          >
            <img src="React.svg" alt="" />
            <div style={{ borderTop: "1px solid #b2beb5" }}>
              <h4>To-Do-List App</h4>
              <p>
                Built a task Management app with features like adding, editing,
                and deleting tasks.
              </p>
              <a href="" target="/">
                <button className="src-btn">Source code </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="prjct"
          >
            <img src="Notes.png" alt="" />
            <div style={{ borderTop: "1px solid #b2beb5" }}>
              <h4>Notes App</h4>
              <p>
                This App is a lightweight and intuitive tool built to help users
                create, manage, and organize their daily notes.
              </p>
              <a href="https://github.com/asyou-know-me/Notes.git" target="/">
                <button className="src-btn">Source code </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="prjct"
          >
            <img src="Catch.png" alt="" />
            <div style={{ borderTop: "1px solid #b2beb5" }}>
              <h4>Catch The Bob</h4>
              <p>
                Catch the Bob is a fast-paced, interactive browser game where
                players test their reflexes by catching a bouncing “Bob”
                character.
              </p>
              <a
                href="https://github.com/asyou-know-me/Catch-the-bob.git"
                target="/"
              >
                <button className="src-btn">Source code </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="prjct"
          >
            <img src="Weather.png" alt="" />
            <div style={{ borderTop: "1px solid #b2beb5" }}>
              <h4>Weather App</h4>
              <p>
                A sleek and user-friendly weather app that provides real-time
                weather updates, details based on your current location or any
                city worldwide.
              </p>
              <a
                href="https://github.com/asyou-know-me/Weather-App.git"
                target="/"
              >
                <button className="src-btn">Source code </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="prjct"
          >
            <img src="Tic-Tac-Toe.png" alt="" />
            <div style={{ borderTop: "1px solid #b2beb5" }}>
              <h4>Tic-Tac-Toe</h4>
              <p>
                A classic 2-player Tic Tac Toe game built with HTML, CSS, and
                JavaScript.
              </p>
              <a
                href="https://github.com/asyou-know-me/Tic-Tac-Toe.git"
                target="/"
              >
                <button className="src-btn">Source code </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="prjct"
          >
            <img src="React.svg" alt="" />
            <div style={{ borderTop: "1px solid #b2beb5" }}>
              <h4>New project</h4>
              <p>Takes Time</p>
              <a href="#">
                <button className="src-btn">Source code </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="prjct"
          >
            <img src="React.svg" alt="" />
            <div style={{ borderTop: "1px solid #b2beb5" }}>
              <h4>New Project</h4>
              <p>Takes Time</p>
              <a href="">
                <button className="src-btn">Source code </button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="get-in-touch"
      >
        <div className="contact-container">
          <form action="" className="contact-me" onSubmit={onSubmit}>
            <h2>Get In Touch</h2>
            <input
              type="text"
              name="name"
              className="name"
              required
              placeholder="Your name"
            />
            <input
              type="text"
              name="email"
              className="phn-number"
              placeholder="E-mail"
              required
            />
            <textarea
              name="message"
              className="msg"
              placeholder="Your message here !"
              required
            ></textarea>
            <button type="submit" className="send">
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default Details;

//Enthusiastic and detail-oriented Web Developer with strong foundational skills in HTML, CSS, JavaScript, and ReactJs. Eager to leverage hands-on project experience to contribute to full-stack development teams. Passionate about building responsive, user-friendly web applications and continuously improving technical skills. Seeking a challenging role as a Full-Stack Web Developer to grow and deliver impactful solutions.
