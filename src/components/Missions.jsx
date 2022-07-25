import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missionsDone = missions.map((object) => (
      <MissionCard
        key={ object.name }
        name={ object.name }
        year={ object.year }
        country={ object.country }
        destination={ object.destination }
      />
    ));
    return (
      <div data-testid="missions">

        <Title headline="Missões" />

        { missionsDone }

      </div>
    );
  }
}

export default Missions;
