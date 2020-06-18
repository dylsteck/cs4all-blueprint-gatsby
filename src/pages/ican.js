import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const ICan = () => (
  <Layout>
    <SEO title="I Can Statements" />
    {/* <link rel="prerender" href="http://blueprint.cs4all.nyc/cs-concepts-and-practices">
    <script src="/static/js/jquery-3.2.1.js"></script> */}
    <script src="/static/js/ican.js"></script>
    {/* <script src="/static/js/floatMenu.js"></script> */}

    <div className="col-md-3"><h4>Blueprint CS Foundations</h4>
      <ul>
        <li><a href="/what-is-cs">What is CS education?</a></li>
        <li><a href="/meaningful-cs">What is a meaningful CS Unit?</a></li>
        <li><a href="/concepts">CS Concepts</a></li>
        <li><a href="/practices">CS Practices</a></li>
        <li><a href="/perspectives">CS Perspectives</a></li>
        <li><a className="filter" href="/ican">I Can Statements</a></li>
      </ul>
    </div>
    <div className="col-md-9" id="mean">
      <p>Computer science (CS) is the practice of its concepts from a student's perspective. As students learn computer science, they should be able to articulate their understanding of what they've learned. </p>
      <p>The tool below helps us explore &quot;I can&quot; statements that provide the vocabulary and a frame of reference for how our students will engage with CS content. </p>
      <p>The rigorous instructional material should include a mixture of tasks from across Webb's Depth of Knowledge (DOK) levels. </p>
      <p>Teachers are encouraged to use the following tool to develop  learning objectives based on what they want students to be able to do at varying levels of CS cognitive complexity.</p>
    </div><br><br>
    <div className="col-md-3"></div>
    <div className="col-md-9">
      <div style={{clear: 'both'}} id="contain">
        <div id="intro">
          <p>Choose a Perspective, Practice, and Concept to see "I can" statements that illustrate a student practicing concepts from a perspective. </p>
          <p> Each combination of perspective, practice and concept will provide multiple "I can" statements for each combination of sub-practice and subconcept.</p>
        </div><br>
        <div id="statement">
          As a(n)
          <div className="dropdown">
            <button id="perspective" className="dropbtn perspective">Perspective</button>
            <div className="dropdown-content ">
              <a href="#/" className="e perbtn perspectiveinvert">Explorer</a>
              <a href="#/" className="c perbtn perspectiveinvert">Creator</a>
              <a href="#/" className="i perbtn perspectiveinvert">Innovator</a>
              <a href="#/" className="z perbtn perspectiveinvert">Citizen</a>
            </div>
          </div>
          I can
          <div className="dropdown">
            <button id="practice" className="dropbtn practice">Practice</button>
            <div className="dropdown-content">
              <a href="#/" className="an prbtn practiceinvert">Analyze</a>
              <a href="#/" className="co prbtn practiceinvert">Communicate</a>
              <a href="#/" className="pr prbtn practiceinvert">Prototype</a>
            </div>
          </div>
          <div className="dropdown">
            <button id="concept" className="dropbtn concept">Concept</button>
            <div className="dropdown-content" >
              <a href="#/" className="ab conbtn conceptinvert">Abstraction</a>
              <a href="#/" className="al conbtn conceptinvert">Algorithms</a>
              <a href="#/" className="p conbtn conceptinvert">Programming</a>
              <a href="#/" className="d conbtn conceptinvert">Data</a>
              <a href="#/" className="n conbtn conceptinvert">Networks</a>
            </div>
          </div>
        </div>
        <div style={{margin: '10px 0px 10px 0px'}} id="loaderContainer"></div>
        <section>
          <div className="tblinfo"></div><br><br>
          <div className="tbl-content">
            <table id= "userdata"  cellpadding="0" cellspacing="0" border="0">
              <tbody></tbody>
            </table>
          </div>
        </section>
      </div>
    </div>

    {/* HOVER SIDE/INFO CONTENT */}
    <div>
      <p className="ancon" hidden="hidden">People of all backgrounds must evaluate and respond to the ways that computing is affecting their lives, their families and friends, and their communities. Government, industry, start-ups, non-profits, researchers, artists and many others use the principles of computing to accomplish a fast-growing number of things. Some of these things we may think of as beneficial or malicious, but others we’re still not sure how to evaluate.</p>
      <p className="cocon" hidden="hidden">Postsecondary pursuits, whether it be college or career, will require students to communicate the complex thought processes behind their work with computer science. Students will work with collaborators, professors, advisors, project leaders, customers, and many others on issues or projects around computing. These people will be interested in the how and why behind students projects or thoughts.</p>
      <p className="prcon" hidden="hidden">The goal of the prototyping practice is to help students build a mental model of how to use a computer to create new applications. Computer applications or programs like Word, Photoshop, or Chrome define how we use computers. When we practice prototyping computing projects, we are creating our own applications, using computers in different ways than when we fire up our word processor or web browser.</p>

      <p className="abcon" hidden="hidden">An abstraction represents a simplified idea or problem derived by ignoring details and using patterns or general characteristics. A simple example of a CS abstraction is a programming language, they allow programmers to give complex instructions to computers without worrying about the bits and bytes!</p>
      <p className="alcon" hidden="hidden">Algorithms are generalized and repeatable sequence of instructions that achieve a particular purpose and output, given a set of inputs. It's important to understand when, why, and how to implement an algorithm and to consider who or what might be affected.</p>
      <p className="pcon" hidden="hidden">Programming is about giving instructions to computers. Programming can be done through a constantly changing set of languages and frameworks. Each language is translated from human-readable code into machine code that can be executed by the computer’s central processing unit, CPU.</p>
      <p className="dcon" hidden="hidden">Computers can be used to collect, store, and analyze massive amounts of data quickly and reliably. Computers programs can use data to make decisions or automate tasks. </p>
      <p className="ncon" hidden="hidden">Networks, like the Internet, allow computers to interface with other computers through a set of rules, or protocols, that define how computers send and receive data. Protocols and standards are created and agreed upon by groups of people.</p>

      <p className="econ" hidden="hidden">Students begin their CS journey as Explorers playing with computing. To make CS real to them, Explorers manipulate computing applications, problems, and topics with physical or visual manifestations.</p>
      <p className="ccon" hidden="hidden">Students continue their CS journey as Creators expressing their ideas through computing. Intrigued by the possibilities of computing, Creators use computing to represent their ideas, thoughts, or interests.</p>
      <p className="iicon" hidden="hidden">Innovators engage with open-ended topics connected to the work of individuals in public, private and open-source domains of CS practice.</p>
      <p className="zcon" hidden="hidden">Citizens examine and try to influence the intersection of computing with social, economic and political systems.</p>
    </div>

    {/* STATIC SIDE/INFO CONTENT */}
    <div>
      {/* MUST VERIFY THAT ANCHORS ARE PERMALINKS!! */}
      {/* practices */}
      <div className="ancon2" hidden="hidden"><span className="infoTitle">Analyze:</span className="infoTitle"></br>People of all backgrounds must evaluate and respond to the ways that computing is affecting their lives, their families and friends, and their communities. Government, industry, start-ups, non-profits, researchers, artists and many others use the principles of computing to accomplish a fast-growing number of things. Some of these things we may think of as beneficial or malicious, but others we’re still not sure how to evaluate.<br><br><a href="/practices#analyze" target="external" rel="prefetch" className="readMore green-media">Read More >></a><br><br></div>
      <div className="cocon2" hidden="hidden"><span className="infoTitle">Communicate:</span className="infoTitle"></br>Postsecondary pursuits, whether it be college or career, will require students to communicate the complex thought processes behind their work with computer science. Students will work with collaborators, professors, advisors, project leaders, customers, and many others on issues or projects around computing. These people will be interested in the how and why behind students projects or thoughts.<br><br><a href="/practices#communicate" target="external" className="readMore greenMedia">Read More >></a><br><br></div>
      <div className="prcon2" hidden="hidden"><span className="infoTitle">Prototype:</span className="infoTitle"></br>The goal of the prototyping practice is to help students build a mental model of how to use a computer to create new applications. Computer applications or programs like word processors or web browsers define how we use computers in a limited way.When we practice prototyping computing projects, we are creating our own applications, using computers in different ways than when we fire up our word processor or web browser.<br><br><a href="/practices#prototype" target="external" className="readMore greenMedia">Read More >></a><br><br></div>

      {/* concepts */}
      <div className="abcon2" hidden="hidden"><span className="infoTitle">Abstraction:</span className="infoTitle"></br>An abstraction represents a simplified idea or problem derived by ignoring details and using patterns or general characteristics. A simple example of a CS abstraction is a programming language, they allow programmers to give complex instructions to computers without worrying about the bits and bytes!<br><br><a href="/concepts#abstraction" target="external" className="readMore whiteMedia">Read More >></a><br><br></div>
      <div className="alcon2" hidden="hidden"><span className="infoTitle">Algortihms:</span className="infoTitle"></br>Algorithms are generalized and repeatable sequence of instructions that achieve a particular purpose and output, given a set of inputs. It is important to understand when, why, and how to implement an algorithm and to consider who or what might be affected.<br><br><a href="/concepts#algorithm" target="external" className="readMore whiteMedia">Read More >></a><br><br></div>
      <div className="pcon2" hidden="hidden"><span className="infoTitle">Programming:</span className="infoTitle"></br>Programming is about giving instructions to computers. Programming can be done through a constantly changing set of languages and frameworks. Each language is translated from human-readable code into machine code that can be executed by the computer’s central processing unit, CPU.<br><br><a href="/concepts#programming" target="external" className="readMore whiteMedia">Read More >></a><br><br></div>
      <div className="dcon2" hidden="hidden"><span className="infoTitle">Data:</span className="infoTitle"></br>Computers can be used to collect, store, and analyze massive amounts of data quickly and reliably. Computers programs can use data to make decisions or automate tasks. <br><br><a href="/concepts#data" target="external" className="readMore whiteMedia">Read More >></a><br><br></div>
      <div className="ncon2" hidden="hidden"><span className="infoTitle">Networks:</span className="infoTitle"></br>Networks, like the Internet, allow computers to interface with other computers through a set of rules, or protocols, that define how computers send and receive data. Protocols and standards are created and agreed upon by groups of people.<br><br><a href="/concepts#networks" target="external" className="readMore whiteMedia">Read More >></a><br><br></div>

      {/* perspectives */}
      <div className="econ2" hidden="hidden"><span className="infoTitle">Explorer:</span className="infoTitle"></br>Students begin their CS journey as Explorers playing with computing. To make CS real to them, Explorers manipulate computing applications, problems, and topics with physical or visual manifestations.<br><br><a href="/perspectives#explorer" target="external" className="readMore blackMedia">Read More >></a><br><br></div>
      <div className="ccon2" hidden="hidden"><span className="infoTitle">Creator:</span className="infoTitle"></br>Students continue their CS journey as Creators expressing their ideas through computing. Intrigued by the possibilities of computing, Creators use computing to represent their ideas, thoughts, or interests.<br><br><a href="/perspectives#creator" target="external" className="readMore blackMedia">Read More >></a><br><br></div>
      <div className="icon2" hidden="hidden"><span className="infoTitle">Innovate:</span className="infoTitle"></br>Innovators engage with open-ended topics connected to the work of individuals in public, private and open-source domains of CS practice.<br><br><a href="/perspectives#innovator" target="external" className="readMore blackMedia">Read More >></a><br><br></div>
      <div className="zcon2" hidden="hidden"><span className="infoTitle">Citizen:</span className="infoTitle"></br>Citizens examine and try to influence the intersection of computing with social, economic and political systems.<br><br><a href="/perspectives#citizen"target="external"  className="readMore blackMedia">Read More >></a><br><br></div>
    </div>
    <style>
      .filter{color: grey}
    </style>
  </Layout>
)
export default ICan
