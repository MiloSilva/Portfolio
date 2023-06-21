import { Card, Header } from '@components'

export const Landing = () => {
  return (
    <>
      <Header imageURL='https://placehold.co/600x400' title='Milo Silva'/>

      <Card header='Seasoning the Web'>
          <p>
            Innovative, detail focused, passionate, optimization nerd, these are
            only a few words that have been used to describe me as a web developer
            with a knack for bringing projects from simple ideas to working
            products. Love for learning, experimenting and providing unique
            solutions to unique problems and giving a new point of view to
            existing projects. Proud of my coding and people skills, great at
            troubleshooting and bug hunting, love for attention to detail and
            viewing products from the user's point of view.
          </p>
      </Card>

      <Card header='Tecnical Skills'>
        <ul>
          <li><h4>HTML 100%</h4></li>
          <li><h4>CSS3 100%</h4></li>
          <li><h4>Typescript 100%</h4></li>
          <li><h4>React 100%</h4></li>
          <li><h4>REST APIs 100%</h4></li>
          <li><h4>SQL & NoSQL 80%</h4></li>
          <li><h4>Agile Technologies 80%</h4></li>
          <li><h4>Python 90%</h4></li>
        </ul>
      </Card>

      <section>
        <Card header='Neostella'>
          <h6>2023 - Now</h6>
        </Card>

        <Card header='Kiwi Campus'>
          <h6>2021 - 2023</h6>
          <ul>
            <li>
              Update and maintain the landing page with updated information and
              new visuals provided by the design team of the company.
            </li>
            <li>
              Brought to life a react component library from a document of
              designs in search of unifying internal tools and ease the
              development process
            </li>
            <li>
              Developed a hub for various internal tools allowing for updating,
              viewing and analyzing information gathered from the ongoing
              operation.
            </li>
            <li>
              Brought to life a new web application allowing for livestreaming
              and monitoring of the bots.
            </li>
          </ul>
        </Card>

        <Card header='National University of Colombia'>
          <h6>2020 - 2021</h6>
            <ul>
              <li>
                Led a group of developers in creating a new web application
                hosting course literature, videos and exams.
              </li>
              <li>
                Containerized the application and hosted it in AWS allowing for a
                scalable infrastructure and minimal downtime.
              </li>
              <li>Provide server solutions for managing software licenses</li>
            </ul>
        </Card>
      </section>

      <section id="footer">
        <h1>Hire me, I'm desperate</h1>
        <br />
        <h3>
          <a href="mailto:jcsilvaroldan@gmail.com">jcsilvaroldan@gmail.com</a>
        </h3>
        <br />
        <h3>
          <a href="tel:+573113063382">+57 3113063382</a>
        </h3>
        <h3>
          <a href="tel:+16092564623">+1 (609)256-4623</a>
        </h3>
        <br />
        <h4>Trenton, New Jersey</h4>
        <h4>Medellin, Colombia</h4>
        <br />
        <h3>
          <a href="https://www.linkedin.com/in/miloflowers/">LinkedIn</a>
        </h3>
        <h3>
          <a href="https://github.com/MiloSilva">Github</a>
        </h3>
        <br />
        <h4>
          <a href="https://github.com/MiloSilva/Portfolio">Source Code</a>
        </h4>
      </section>
    </>
  );
};
