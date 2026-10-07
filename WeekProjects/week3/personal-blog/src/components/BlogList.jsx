import BlogCard from "./BlogCard";

function BlogList() {
  const blogs = [
    {
      id: 1,
      title: "My Journey as a BCA Student",
      category: "My Journey",
      date: "October 2026",
      description:
        "A little about my journey, what I am learning, and how I am building my skills in technology.",
      content:
        "I am currently pursuing BCA and learning different areas of computer science. I am exploring programming, data analytics, web development, and other technologies through practice and projects.",
    },
    {
      id: 2,
      title: "My Python Learning Journey",
      category: "Python",
      date: "October 2026",
      description:
        "What I have learned while practicing Python and building small projects.",
      content:
        "Python is one of the main programming languages I am learning. I am practicing concepts such as functions, loops, data structures, OOP, and working with libraries like NumPy and Pandas.",
    },
    {
      id: 3,
      title: "Learning SQL",
      category: "SQL",
      date: "September 2026",
      description:
        "My experience learning SQL and understanding how databases are used to work with data.",
      content:
        "I am learning SQL to understand how data is stored and retrieved from databases. I am practicing SELECT, WHERE, GROUP BY, ORDER BY, JOIN, and other important SQL concepts.",
    },
    {
      id: 4,
      title: "Getting Started with Data Analytics",
      category: "Data Analytics",
      date: "September 2026",
      description:
        "How I started learning data analysis using Python, Pandas, and data visualization.",
      content:
        "Data analytics interests me because it combines programming with problem solving. I am learning how to clean data, analyze datasets, find useful information, and create visualizations.",
    },
    {
      id: 5,
      title: "Learning React",
      category: "React",
      date: "October 2026",
      description:
        "My experience learning React components, props, state, and building simple interfaces.",
      content:
        "I am learning React by creating small projects. I am currently practicing components, props, state, events, lists, and conditional rendering.",
    },
    {
      id: 6,
      title: "Building Projects While Learning",
      category: "Projects",
      date: "August 2026",
      description:
        "Why I believe building projects is one of the best ways to understand programming concepts.",
      content:
        "Building projects gives me an opportunity to use the concepts I learn. It also helps me find mistakes, improve my problem-solving skills, and understand how different technologies work together.",
    },
  ];

  return (
    <section className="articles" id="articles">
      <h2>My Articles</h2>

      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            category={blog.category}
            date={blog.date}
            description={blog.description}
            content={blog.content}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogList;