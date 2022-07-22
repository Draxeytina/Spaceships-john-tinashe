import React from 'react';
import RocketList from './RocketsProfile';
import MissionsList from './MissionsProfile';

class Profile extends React.PureComponent {
  render() {
    return (
      <div className="profile">
        <div className="myMissions">
          <h3>My Missions</h3>
          <MissionsList />
        </div>
        <div className="myRockets">
          <h3>My Rockets</h3>
          <RocketList />
        </div>
      </div>
    );
  }
}
export default Profile;
