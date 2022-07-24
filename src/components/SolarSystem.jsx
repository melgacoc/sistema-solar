import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const planetCardList = Planets.map((object) => (
      <PlanetCard key={ object.name } planetName={ object.name } planetImage={ object.image } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />

        { planetCardList }

      </div>
    );
  }
}

export default SolarSystem;
