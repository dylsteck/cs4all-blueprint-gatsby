/**
 * About page that describes what the Blueprint is, what went into creating
 * it, and who was involved in the process
 */

/* General Imports */
import React, { useState, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import scrollTo from "gatsby-plugin-smoothscroll"

/* Blueprint fellow pictures */
import alana from "../assets/images/alana-robinson.png"
import ariadna from "../assets/images/ariadna-phillips-santos.png"
import ben from "../assets/images/ben-samuels-kalow.png"
import christa from "../assets/images/christa-quint.jpg"
import christy from "../assets/images/christy-crawford.png"
import joann from "../assets/images/joann-westhall.png"
import matt from "../assets/images/matt-boyle.png"
import sean from "../assets/images/sean-pawelec.jpg"
import timF from "../assets/images/tim-feimer.png"
import timC from "../assets/images/tim-chen.png"
import workshop from "../assets/images/cs4all-workshop.jpg"

/* Component */
const About = () => {
  /* Variables */
  const [aboutState, setAboutState] = useState(false)
  const [aboutHeight, setAboutHeight] = useState("0px")
  const aboutContent = useRef(null)

  const [fellowState, setFellowState] = useState(false)
  const [fellowHeight, setFellowHeight] = useState("0px")
  const fellowContent = useRef(null)

  /* Display component */
  return (
    <Layout>
      <SEO title="About the Blueprint" />
      <div id="page">
        <article className="light-theme">
          <header>
            <h2>
              <span className="preamble">About the</span> Blueprint
            </h2>
            <p>
              The Computer Science for All (CS4All) Blueprint is an academic and
              implementation guide for teaching computer science in New York
              City public schools.
            </p>
          </header>

          <div id="about-blueprint" className="article-content">
            <img src={workshop} alt="Blueprint fellows at work" />
            <p>
              We know that it's a big undertaking to support educators and their
              school communities as they begin to integrate, many for the first
              time, computer science into their classrooms. So we created the
              Blueprint with a dedicated group of{" "}
              <a
                href="#page"
                onClick={e => {
                  scrollTo("#fellow-list")
                  e.preventDefault()
                }}
                onKeyPress={() => {
                  scrollTo("#fellow-list")
                  return false
                }}
                role="button"
                tabIndex="0"
              >
                Blueprint Teacher Fellows
              </a>
              , elevating their CS teaching knowledge and experience in NYC
              classrooms.
            </p>
            <div
              id="about-blueprint-more"
              className="read-more"
              ref={aboutContent}
              style={{ maxHeight: `${aboutHeight}` }}
            >
              <p>
                We also gathered feedback from more than 30 sessions with
                researchers, the CS education community, industry, and families;
                and incorporated their needs, values, and goals in our design
                direction and content.{" "}
              </p>
              <p>
                A list of these stakeholders, as well as the important ideas and
                feedback they offered, are summarized below.
              </p>
              <p>
                With this beta (first published draft) version of the Blueprint,
                the CS4All team is engaging a new cohort of Teacher Fellows, and
                work with administrators to further refine and develop the
                resources schools need to implement a rigorous computer science
                curriculum.
              </p>
            </div>
            <p>
              <a
                className="btn btn-sm open"
                href="#about-blueprint-text"
                onClick={() => {
                  setAboutState(!aboutState)
                  setAboutHeight(
                    aboutState
                      ? "0px"
                      : `${aboutContent.current.scrollHeight}px`
                  )
                  setTimeout(() => {
                    scrollTo("#about-blueprint")
                  }, 500)
                  return false
                }}
                role="button"
                tabIndex="0"
              >
                <span
                  className={aboutState ? "label inactive" : "label active"}
                >
                  Read More
                </span>
                <span
                  className={aboutState ? "label active" : "label inactive"}
                >
                  Collapse Text
                </span>
              </a>
            </p>
          </div>

          <section>
            <div className="section-content">
              <h3>What we learned in 2016</h3>
              <p>A huge thank you to all those who attended our sessions!</p>
              <ul>
                <li>
                  <h4>
                    CS education researchers at the{" "}
                    <a
                      href="https://csnyc.org/our-work/csnyc-programs/knowledge-forum-2016"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CSNYC Knowledge Forum
                    </a>
                  </h4>
                  Generalize concepts and practices to elevate computer science
                  thinking on the CSNYC Knowledge Forum.
                </li>
                <li>
                  <h4>
                    CS education community at{" "}
                    <a
                      href="https://hiveresearchlab.org/what-we-do/ideologies-of-computer-science-education/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hive Research Lab CS Visions Convenings
                    </a>
                  </h4>
                  Develop multiple perspectives about how to connect CS to each
                  school's visions and goals.
                </li>
                <li>
                  <h4>
                    Tech and tech-related industry at CS4ALL industry
                    roundtables
                  </h4>
                  Collaboration and critical thinking are equally important to
                  technical skills.
                </li>
                <li>
                  <h4>
                    School leaders at principal and assistant principal
                    conferences
                  </h4>
                  Include practical guides to support the roll-out of CS in
                  schools.
                </li>
                <li>
                  <h4>
                    Families at{" "}
                    <a
                      href="http://makerfaire.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      World Maker Faire
                    </a>
                  </h4>
                  Families were most interested in general problem-solving and
                  design-thinking skills.
                </li>
              </ul>
            </div>
          </section>

          <section id="fellow-list">
            <div className="section-content">
              <h3> 2016-2017 CS4ALL Blueprint Teacher Fellows</h3>
              <div id="fellows" className="chart">
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + alana + ")" }}
                >
                  <div className="fellow-content">
                    <h4>Alana Robinson</h4>
                    <span className="fellow-text">
                      Alana Robinson teaches CS to elementary and middle school
                      self-contained special education classes at the Mickey
                      Mantle School, a District 75 school in Manhattan.
                    </span>
                  </div>
                </div>
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + ariadna + ")" }}
                >
                  <div className="fellow-content">
                    <h4>Ariadna Phillips-Santos</h4>
                    <span className="fellow-text">
                      Ariadna Phillips-Santos is a passionate Dual Language
                      (Spanish) Computer Science and ESL/ELA teacher at the
                      Laboratory School of Finance and Technology in the South
                      Bronx.
                    </span>
                  </div>
                </div>
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + ben + ")" }}
                >
                  <div className="fellow-content">
                    <h4>Ben Samuels-Kalow</h4>
                    <span className="fellow-text">
                      Ben Samuels-Kalow was a Computer Science and Economics
                      teacher at the Laboratory School of Finance and Technology
                      in the South Bronx.
                    </span>
                  </div>
                </div>
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + christa + ")" }}
                >
                  <div className="fellow-content">
                    <h4>Dr. Christa Quint</h4>
                    <span className="fellow-text">
                      Dr. Christa Quint is in her 12th year teaching in New York
                      City. She is an experienced Math teacher and and a new
                      Computer Science teacher at the Urban Assembly Gateway
                      School for Technology.
                    </span>
                  </div>
                </div>
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + christy + ")" }}
                >
                  <div className="fellow-content">
                    <h4>Christy Crawford</h4>
                    <span className="fellow-text">
                      Christy Crawford has taught in Harlem and the Bronx for
                      more than 13 years. She is an education consultant and
                      contributor to{" "}
                      <a
                        href="https://www.scholastic.com/teachers/contributors/bloggers/christy-crawford/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Scholastic's Top Teaching blog.
                      </a>
                      .
                    </span>
                  </div>
                </div>
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + joann + ")" }}
                >
                  <div className="fellow-content">
                    <h4>JoAnn Westhall</h4>
                    <span className="fellow-text">
                      JoAnn Westhall is a Computer Science Instructor, Grades
                      Pre-K-5, at PS 31 in Bayside, Queens.
                    </span>
                  </div>
                </div>
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + matt + ")" }}
                >
                  <div className="fellow-content">
                    <h4>Matt Boyle</h4>
                    <span className="fellow-text">
                      Matthew Boyle has background in architecture and graphic
                      design. He helps lead operations, arts, and digital media
                      programming at the Renaissance Charter HS for Innovation.
                    </span>
                  </div>
                </div>
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + sean + ")" }}
                >
                  <div className="fellow-content">
                    <h4>Sean Pawelec</h4>
                    <span className="fellow-text">
                      Sean Pawelec has a background in earth science who teaches
                      computer science at the Renaissance Charter HS for
                      Innovation where he is the Science Department Chair.
                    </span>
                  </div>
                </div>
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + timF + ")" }}
                >
                  <div className="fellow-content">
                    <h4>Tim Feimer</h4>
                    <span className="fellow-text">
                      Tim Feimer is a certified SS 7-12 teacher who enjoys
                      building and learning all about CS topics for all middle
                      school grade levels (6-8).
                    </span>
                  </div>
                </div>
                <div
                  className="fellow"
                  style={{ backgroundImage: "url(" + timC + ")" }}
                >
                  <div className="fellow-content">
                    <h4>Tim Chen</h4>
                    <span className="fellow-text">
                      Tim Chen was a software engineering teacher at the Urban
                      Assembly Gateway School for Technology. He is interested
                      in everything related to computer science education!
                    </span>
                  </div>
                </div>
              </div>

              <div id="about-fellows" className="article-content introduction">
                <h4>
                  <span>A message from the fellows:</span> What are we trying to
                  teach?
                </h4>
                <p>
                  In Math class, students hold a pencil. They may hold that same
                  pencil in English, but what they’re asked to produce, how
                  they’re trained to think and question – look different. In
                  neither class is the pencil the focus.
                </p>
                <p>In computer science, the computer is the pencil.</p>
                <div
                  id="about-fellows-more"
                  className="read-more"
                  ref={fellowContent}
                  style={{ maxHeight: `${fellowHeight}` }}
                >
                  <p>
                    Your students have used computers to convey their thinking
                    -- to get it on a document, on a slide, in a picture, or on
                    a piece of paper. Our hope is that these resources will help
                    you create a classroom in which students think with the
                    computer, where the computer becomes &quot;a bicycle for the
                    mind,&quot; a tool for empowering and unlocking our
                    students' curiosity and creativity.
                  </p>
                  <p>
                    We'll be tackling everything from recommended programming
                    languages and courses of study, to the arrangement of tables
                    and chairs in your classroom. There is a lot to digest (and
                    a lot that we are still learning,) but these resources were
                    put together by folks who love teaching computer science and
                    learned to teach it, just like you, while in the classroom.
                  </p>
                  <p>
                    A final thought before we jump into the nitty-gritty. Why
                    CS4All? After all, not everyone will become a computer
                    programmer, and that is totally fine. Not every student will
                    become a novelist, but every student has the right to read
                    great literature, to be exposed to the possibility that she
                    can create something great and enduring. CS4All is about
                    unlocking potential. Our objective is not to produce coders,
                    but young people who think about code and are not afraid to
                    try to read and write it.{" "}
                  </p>
                  <p>
                    In the history of computer science, we have mostly been
                    content to wait for prodigies to drive innovation. We
                    believe there is more prodigious talent in our students that
                    can be unlocked by learning to create and iterate. These
                    resources are a commitment to equity, to unlocking more
                    unrealized potential in all our students, in as many ways as
                    we possibly can.
                  </p>
                </div>
                <p>
                  <a
                    className="btn btn-sm open"
                    href="#about-fellows"
                    onClick={() => {
                      setFellowState(!fellowState)
                      setFellowHeight(
                        fellowState
                          ? "0px"
                          : `${fellowContent.current.scrollHeight}px`
                      )
                      setTimeout(() => {
                        scrollTo("#about-fellows")
                      }, 500)
                      return false
                    }}
                    role="button"
                    tabIndex="0"
                  >
                    <span
                      className={
                        fellowState ? "label inactive" : "label active"
                      }
                    >
                      Read More
                    </span>
                    <span
                      className={
                        fellowState ? "label active" : "label inactive"
                      }
                    >
                      Collapse Text
                    </span>
                  </a>
                </p>
              </div>

              <div className="case-study">
                <h4>2017-2018 Fellows</h4>
                <p>
                  {" "}
                  The Blueprint Fellowship for the 2017-18 school year is
                  structured as two tracks - Curriculum and Pedagogy. We have
                  almost 50 teachers participating this year!
                </p>
                <p>
                  The Curriculum Fellows, who got started in early July 2017,
                  are designed Blueprint-aligned CS units to test in the
                  classroom and eventually publish on the Blueprint. The
                  Pedagogy Fellows will meeting in August to kick-off a year of
                  interivistation and peer observation that will published as
                  video <a href="/resources">resources</a> on the Blueprint.
                </p>
                <p> Names and bios will be posted soon!</p>
              </div>
            </div>
          </section>

          <div className="article-content">
            <p>
              If you have thoughts or feedback about the Blueprint website,{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeIeJ9xKpfT-ngiOeMY01GF-vounSQxMjnYzaePEsMXhwIEcQ/viewform"
                target="_blank"
                rel="noreferrer"
              >
                please share them with us
              </a>
              !
            </p>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default About
