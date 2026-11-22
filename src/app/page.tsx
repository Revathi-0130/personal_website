
const experience = [
  {
    company: "Axis Bank",
    role: "Manager – Data Analyst",
    period: "Apr 2026 – Present",
    location: "Mumbai",
    points: [
      "Delivered portfolio analytics across the AVC channel, supporting 100+ Relationship Managers.",
      "Analyzed 1M+ customer records using SQL, improving reporting efficiency by 30%.",
      "Developed executive reports and dashboards for 30+ stakeholders.",
      "Performed trend and variance analysis contributing to a 10–15% improvement in campaign effectiveness.",
      "Automated reporting and data quality checks, saving 10 hours weekly.",
    ],
  },
  {
    company: "Axis Bank",
    role: "Deputy Manager – Data Engineer",
    period: "Aug 2024 – Apr 2026",
    location: "Mumbai",
    points: [
      "Designed a Power BI Persona Dashboard for senior leadership.",
      "Architected a Star Schema integrating Trust account, employee activity and CRM datasets covering 1M+ records.",
      "Optimized Informatica and PL/SQL workflows, reducing ETL runtime by 35%.",
      "Automated KRA scorecards and incentive calculations, reducing manual effort by 40%.",
      "Implemented automated report distribution using Linux shell scripting.",
    ],
  },
  {
    company: "Finlatics",
    role: "Business Analyst Intern",
    period: "Apr 2023 – Jun 2023",
    location: "Remote",
    points: [
      "Improved financial data integrity by 7% through validation and quality assurance.",
      "Built interactive Power BI dashboards and analytical reports.",
    ],
  },
];


const projects = [
  {
    number: "01",
    category: "DATA ANALYTICS",
    title: "Banking Customer Intelligence",
    description:
      "Build a complete banking analytics solution to explore customer behaviour, product performance, revenue and portfolio trends.",
    tools: "SQL · Python · Power BI",
    status: "PLANNED",
  },
  {
    number: "02",
    category: "DATA ENGINEERING",
    title: "End-to-End ETL Pipeline",
    description:
      "Build a complete data pipeline that extracts, cleans, transforms and loads data into a structured database.",
    tools: "Python · SQL · PostgreSQL",
    status: "PLANNED",
  },
  {
    number: "03",
    category: "DATA SCIENCE",
    title: "Customer Churn Prediction",
    description:
      "Independently develop and evaluate machine learning models to predict customer churn using a new dataset.",
    tools: "Python · Scikit-learn · Pandas",
    status: "PLANNED",
  },
  {
    number: "04",
    category: "MACHINE LEARNING",
    title: "Production ML Platform",
    description:
      "Develop, deploy and monitor a machine learning model through a production-style API.",
    tools: "Python · FastAPI · Docker",
    status: "PLANNED",
  },
  {
    number: "05",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Financial Research Assistant",
    description:
      "Build an AI application that reads financial documents and answers questions using retrieval-augmented generation.",
    tools: "Python · LLM · RAG",
    status: "PLANNED",
  },
];


const learningTracks = [
  {
    title: "Data Analytics",
    description: "Business intelligence, financial analysis and interactive reporting.",
    tools: "SQL · Power BI · Python",
    count: "04 projects planned",
  },
  {
    title: "Data Engineering",
    description: "Data pipelines, orchestration, warehouses and scalable infrastructure.",
    tools: "Python · SQL · Spark · Airflow",
    count: "04 projects planned",
  },
  {
    title: "Data Science",
    description: "Statistics, predictive analytics and machine learning.",
    tools: "Python · Statistics · Scikit-learn",
    count: "04 projects planned",
  },
  {
    title: "ML Engineering",
    description: "Model deployment, automation and production monitoring.",
    tools: "FastAPI · Docker · MLflow",
    count: "03 projects planned",
  },
  {
    title: "Artificial Intelligence",
    description: "Building intelligent applications using LLMs, RAG and AI agents.",
    tools: "Python · LLMs · RAG",
    count: "03 projects planned",
  },
];

const skillGroups = [
  {
    title: "Programming & Querying",
    items: ["SQL", "PL/SQL", "Python", "PySpark"],
  },
  {
    title: "Data Analysis",
    items: ["EDA", "Data Validation", "Data Quality", "Customer Segmentation", "Trend Analysis"],
  },
  {
    title: "Visualization & Reporting",
    items: ["Power BI", "Advanced Excel", "Power Query", "Dashboard Development"],
  },
  {
    title: "Databases & ETL",
    items: ["Oracle SQL", "Informatica PowerCenter", "ETL Pipelines", "Star Schema", "Data Modeling"],
  },
  {
    title: "Tools",
    items: ["Jira", "Bitbucket", "Git", "Linux", "GenAI Tools"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="brand">
          <span className="brand-mark">PR.</span>
          <span>POCHIREDDY REVATHI</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#learning">Learning</a>
        </div>

        <a href="#contact" className="nav-contact">
          Contact <span>↗</span>
        </a>
      </nav>

      <section className="hero section-container">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            DATA ANALYST · DATA ENGINEER
          </div>

          <p className="eyebrow">HELLO, I&apos;M POCHIREDDY REVATHI</p>

          <h1>
            Transforming Data
            <br />
            Into <span className="gradient-text">Intelligence.</span>
          </h1>

          <h2 className="hero-role">
            Data Analyst <span>·</span> Data Engineer
          </h2>

          <p className="hero-description">
            Analytical professional with 2 years of experience in banking
            analytics, data engineering, business intelligence and report
            automation. Experienced in building data solutions and delivering
            actionable business insights using SQL, Python, Power BI and
            enterprise data technologies.
          </p>

          
          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore My Work <span>↗</span>
            </a>

            <a
              href="/resume/Revathi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="button-resume"
            >
              <span>↓</span> Download Resume
            </a>

            <a href="#experience" className="button-secondary">
              Professional Experience
            </a>
          </div>


          <div className="hero-meta">
            <span>BANKING ANALYTICS</span>
            <span>DATA ENGINEERING</span>
            <span>BUSINESS INTELLIGENCE</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="visual-card">
            <div className="visual-top">
              <span>PROFESSIONAL SNAPSHOT</span>
              <span className="live-indicator">● EXPERIENCE</span>
            </div>

            <div className="visual-heading">
              <span>Working across the data ecosystem</span>
              <strong>DATA × BUSINESS × TECHNOLOGY</strong>
            </div>

            <div className="visual-chart">
              {[35, 52, 43, 68, 48, 76, 58, 88, 66, 96, 72, 84].map(
                (height, index) => (
                  <div
                    key={index}
                    className="chart-bar"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>

            <div className="visual-bottom">
              <div>
                <span>PROFESSIONAL EXPERIENCE</span>
                <strong>2 Years</strong>
              </div>
              <div>
                <span>INDUSTRY</span>
                <strong>Banking</strong>
              </div>
            </div>
          </div>

          <div className="floating-tag tag-one">Power BI</div>
          <div className="floating-tag tag-two">SQL</div>
          <div className="floating-tag tag-three">Python</div>
        </div>
      </section>

      <section className="stats-strip">
        <div>
          <strong>1M+</strong>
          <span>CUSTOMER RECORDS ANALYZED</span>
        </div>
        <div>
          <strong>35%</strong>
          <span>ETL RUNTIME REDUCTION</span>
        </div>
        <div>
          <strong>30%</strong>
          <span>REPORTING EFFICIENCY IMPROVEMENT</span>
        </div>
        <div>
          <strong>10 hrs</strong>
          <span>WEEKLY MANUAL EFFORT SAVED</span>
        </div>
      </section>

      <section id="about" className="section-container about-section">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>
            Data-driven thinking.
            <br />
            <span className="muted-heading">Business-focused solutions.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            I am a Data Analyst and Data Engineer with experience at Axis Bank,
            working across banking analytics, enterprise data pipelines,
            executive reporting and business intelligence.
          </p>
          <p>
            My work includes analyzing large customer datasets, designing
            analytical data models, optimizing ETL workflows and automating
            business reporting processes.
          </p>
          <p>
            Beyond my professional experience, I am expanding my knowledge
            into data science, machine learning engineering and artificial
            intelligence through practical projects.
          </p>
          <a href="#experience" className="text-link">
            Explore my professional journey ↗
          </a>
        </div>
      </section>

      <section id="experience" className="section-container experience-section">
        <div className="section-heading">
          <p className="eyebrow">02 / PROFESSIONAL EXPERIENCE</p>
          <h2>
            Experience that
            <br />
            <span className="muted-heading">creates impact.</span>
          </h2>
        </div>

        <div className="experience-list">
          {experience.map((job, index) => (
            <article className="experience-card" key={`${job.company}-${job.role}`}>
              <div className="experience-index">
                0{index + 1}
              </div>

              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company-name">{job.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-heading">
            <p className="eyebrow">03 / PROJECTS</p>
            <h2>
              Practical work.
              <br />
              <span className="muted-heading">Measurable outcomes.</span>
            </h2>
            <p className="section-description">
              Original projects developed through practical learning
and hands-on implementation
            </p>
          </div>


          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-art">
                  <span className="project-art-label">{project.category}</span>
                  <div className="art-decoration">
                    <div className="art-circle" />
                    <div className="art-line art-line-one" />
                    <div className="art-line art-line-two" />
                    <div className="art-line art-line-three" />
                  </div>
                  <span className="art-number">{project.number}</span>
                </div>

                <div className="project-info">
                  <div className="project-meta">
                    <span>PORTFOLIO PROJECT</span>
                    <span className="planned-label">{project.status}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tools">{project.tools}</div>

                  <div className="project-footer">
                    <span>Independent Portfolio Project</span>
                    <span>Development planned ↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section id="skills" className="section-container skills-section">
        <div className="section-heading">
          <p className="eyebrow">04 / TECHNICAL SKILLS</p>
          <h2>
            Technologies and
            <br />
            <span className="muted-heading">technical expertise.</span>
          </h2>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-list">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="learning" className="section-container disciplines-section">
        <div className="section-heading">
          <p className="eyebrow">05 / CONTINUOUS LEARNING</p>
          <h2>
            Exploring what&apos;s
            <br />
            <span className="muted-heading">next in technology.</span>
          </h2>
          <p className="section-description">
            Building on professional experience while expanding into
            emerging data and AI disciplines.
          </p>
        </div>

        <div className="category-grid">
          {learningTracks.map((track, index) => (
            <article className="category-card" key={track.title}>
              <div className="category-top">
                <span>0{index + 1} / 05</span>
                <span>↗</span>
              </div>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <div className="category-footer">
                <span>{track.tools}</span>
                <span>{track.count}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-section">
        <div className="section-container learning-content">
          <p className="eyebrow">06 / BEYOND PROFESSIONAL EXPERIENCE</p>
          <h2>
            Learning by building.
            <br />
            <span className="gradient-text">
              Growing through technology.
            </span>
          </h2>
          <p>
            My journey continues beyond analytics and data engineering.
            I am developing practical skills in data science, machine
            learning and AI through hands-on projects.
          </p>
          <a href="#learning" className="button-primary">
            Explore Learning Journey ↗
          </a>
        </div>
      </section>

      <footer id="contact" className="footer section-container">
        <div>
          <p className="eyebrow">07 / CONTACT</p>
          <h2>
            Let&apos;s connect.
            <br />
            <span className="muted-heading">Let&apos;s create impact.</span>
          </h2>
        </div>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/revathi-pochireddy-69a594192"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Revathi-0130"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a href="mailto:pochireddyrevathi@gmail.com">
            Email ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>POCHIREDDY REVATHI</span>
          <span>DATA ANALYTICS · ENGINEERING · AI</span>
          <span>© 2026</span>
        </div>

      </footer>
    </main>
  );
}



