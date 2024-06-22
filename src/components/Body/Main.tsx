import React from "react";

const Main = () => {
  return (
    <div className="h-screen w-full bg-blue-50 float-right text-blue-400">
      <h1 className="text-4xl font-bold text-center mb-4">Hello World</h1>
      <div className="flex flex-col ">
        <section className="text-2xl bg-blue-100 rounded m-5 shadow w-auto ">
          <h1 className="text-blue-950">Module 1: Introduction to React</h1>
          <p>
            Definition: React is a popular JavaScript library for building user
            interfaces, particularly single-page applications where data changes
            dynamically over time.
          </p>
          <br />
          <p>
            History: Developed by Facebook, React was first deployed on
            Facebook's news feed in 2011 and later on Instagram in 2012.
          </p>
          <br />
          <p>
            Features: React uses a virtual DOM to improve performance and
            supports server-side rendering for SEO optimization.
          </p>
        </section>
        <section className="text-2xl bg-blue-100 rounded m-5 shadow w-auto">
          <h1 className="text-blue-950">
            Module 2: Setting Up Your React Environment
          </h1>
          <p>
            <h3>
              <b>Download and Install Node.js:</b>
            </h3>
            Go to the{" "}
            <a
              href="https://nodejs.org/en"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              target="_blank"
            >
              Node.js website.
            </a>
            Download the LTS version and follow the installation instructions
            for your operating system.
          </p>
          <p>
            <h3>
              <b>Check the Installation:</b>
            </h3>
            Open a terminal or command prompt and type the following commands:
            <br />
            <code>node -v</code> and <code>npm -v</code>
          </p>
        </section>
        <section className="text-2xl bg-blue-100 rounded m-5 shadow w-auto">
          <h1 className="text-blue-950">
            Module 3: Creating Your First React App
          </h1>
          <p>
            <b>Step 1: Install Create React App:</b> Create React App is a
            command-line tool that generates a new React project with a
            pre-configured development environment.
          </p>
          <br />
          <p>
            <b>Step 2: Create a New React App:</b> Open a terminal or command
            prompt and run the following command:
            <br />
            <br />
            <code>npx create-react-app my-app</code>
          </p>
          <br />
          <br />
          <p>
            <b>Step 3: Start the Development Server:</b> Change into the new
            project directory and start the development server with the
            following command:
            <br />
            <br />
            <code>cd my-app</code>
            <br />
            <code>npm start</code>
            <br />
            <br />
          </p>
          <br />
          <p>
            <b>Step 4: View Your React App:</b> Open a web browser and go to{" "}
            <a
              href="http://localhost:3000"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              target="_blank"
            >
              http://localhost:3000
            </a>
            . You should see the default React welcome page.
          </p>
        </section>
        <section className="text-2xl bg-blue-100 rounded m-5 shadow w-auto">
          <h1 className="text-blue-950">
            Module 4: Understanding React Components
          </h1>
          <p>Suport us on Patreon to see More</p>
        </section>
        <section className="text-2xl bg-blue-100 rounded m-5 shadow w-auto">
          <h1 className="text-blue-950">Module 5: Styling React Components</h1>
          <p>
            <b>Inline Styles:</b> Inline styles are defined directly in the JSX
            code using the style attribute.
          </p>
          <br />
          <p>
            <b>CSS Stylesheets:</b> CSS stylesheets can be imported into React
            components using the import statement.
          </p>
          <br />
          <p>
            <b>Styled Components:</b> Styled components are a popular way to
            style React components using tagged template literals.
            <br />
            <br />
            <p className=" italic">
              I do Recomend using Tailwind CSS for styling React Components
            </p>
          </p>
        </section>
        <section className="text-2xl bg-blue-100 rounded m-5 shadow w-auto">
          <h1 className="text-blue-950">Module 6: Managing State in React</h1>
          <p>Suport us on Patreon to see More</p>
        </section>
        <section className="text-2xl bg-blue-100 rounded m-5 shadow w-auto">
          <h1 className="text-blue-950">
            Module 7: Handling Events in React...
          </h1>
          <p>Suport us on Patreon to see More</p>
        </section>
        <section className="text-2xl bg-blue-100 rounded m-5 shadow w-auto">
          <h1 className="text-blue-950">
            Module 8: Building and Deploying Your React App...
          </h1>
          <p>Suport us on Patreon to see More</p>
        </section>
        <section>
          <h1 className="text-2xl bg-blue-100 rounded m-5 shadow w-auto">
            <h1 className="text-blue-950">Module 9: Conclusion</h1>
            <p>
              Congratulations! You have completed the React tutorial. You should
              now have a good understanding of React fundamentals, including
              components, state, props, and event handling.
            </p>
            <br />
            <p>
              Continue to build on your knowledge by creating more complex React
              applications and exploring additional features like context,
              hooks, and routing.
            </p>
            <br />
            <p>
              Thank you for learning with us! If you have any questions or
              feedback, please feel free to reach out to us.
            </p>
            <h1>
              <a
                href="https://github.com/FarciarzYT"
                target="_blank"
                className="align-center"
              >
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
              </a>
            </h1>
          </h1>
        </section>
      </div>
    </div>
  );
};
export default Main;
