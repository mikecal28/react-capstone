// About Page with a description of the Capstone and what you took away from this course.

function About() {
  return (
    <div className="about">
      <div className="description">
        <h1>Capstone Description</h1>
        <p>
          This is a culmination of the many skills I've gained over the past 6
          months. Throughout the site you can explore a few examples of the
          kinds of things I have learned. The widgets are far from perfect, but
          they provide insight into the skills I've acquired throughout this
          course.{" "}
        </p>
      </div>
      <div className="learned">
        <h1>What I've Learned</h1>
        <p>
          The biggest thing I've taken away from this frontend web-development
          course would be a strengthened ability to confront the unknown.
          Throughout my life I've found myself easily intimidated when diving
          into subjects that are new to me. This course, as well as this
          program, has instilled in me the persistence needed to confront new
          things and increase my skillset as a developer and lifelong learner.
        </p>
      </div>
    </div>
  );
}

export default About;
