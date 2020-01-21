import React from 'react';
import Calendar from './landingComponents/Calendar';
import LinkButton from './landingComponents/LinkButton';

function Landing() {
  return (
    <main>
      <h1>¿ Qué planes hay ?</h1>
      <Calendar />
      <LinkButton />
      <section>
        <h2>MadEvents</h2>
        <p>
          Es una aplicación web para consultar los eventos en Madrid y poder filtrarlos por distrito o categotías, asi
          encontrarás facilmente nuevos eventos a los que asistir !!!
        </p>
      </section>
    </main>
  );
}

export default Landing;
