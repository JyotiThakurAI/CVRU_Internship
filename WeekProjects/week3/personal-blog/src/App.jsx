import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <section className="home" id="home">
          <h1>Hi, I'm Jyoti 👋</h1>

          <p>
            I am a BCA student and an aspiring Data Analyst.
          </p>

          <p>
            I am learning Python, SQL, Data Analytics, and Web Development
            by building projects and practicing regularly.
          </p>
        </section>

        <BlogList />

        <section className="about" id="about">
          <h2>About Me</h2>

          <p>
            I am currently pursuing BCA and exploring different areas of
            technology. I enjoy learning programming, working with data,
            and building simple projects that help me improve my skills.
          </p>

          <p>
            This blog is a place where I can share my learning journey,
            experiences, and things I discover while studying and building
            projects.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;