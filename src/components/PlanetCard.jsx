import React from 'react';
import PropTypes from 'prop-types';
import Planets from '../data/planets';

class PlanetCard extends React.Component {
  render() {
    const { planetName , planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
