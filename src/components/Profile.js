import React from 'react';
import RocketList from './RocketsProfile';

class Profile extends React.PureComponent {
  render() {
    return (
      <div className="profile">
        <div className="myMissions">
          <h3>My Missions</h3>
          <table>
            <tr>
              <td>Mission 1</td>
            </tr>
            <tr>
              <td>Mission 2</td>
            </tr>
            <tr>
              <td>Mission 3</td>
            </tr>
            <tr>
              <td>Mission 4</td>
            </tr>
          </table>
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
