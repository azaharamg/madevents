import React from 'react';
import { Link } from 'react-router-dom';
import getData from '../service/serverData.js';
import Calendar from './landingComponents/Calendar';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      selectedDay: ''
    };
    this.handleSelectedDay = this.handleSelectedDay.bind(this);
  }

  componentDidMount() {
    getData().then(data => this.setState({ events: data['@graph'] }));
  }

  //Handles
  handleSelectedDay = event => {
    this.setState({
      selectedDay: event.target.dataset.value
    });
  };

  render() {
    return (
      <main>
        <h1>¿ Qué planes hay ?</h1>
        <Calendar handleSelectedDay={this.handleSelectedDay} selectedDay={this.state.selectedDay} />
        <Link to='/main'>
          <h2>Ver en el mapa</h2>
        </Link>
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
}

export default Landing;
