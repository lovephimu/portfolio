import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Trying to come up with an about is harder than in looks! Do you
              start with something fun - or something motivational? So many
              questions when really all you want to say is: I like pizza.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
