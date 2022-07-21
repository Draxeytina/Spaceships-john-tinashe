import React from 'react';
import { useSelector } from 'react-redux';

const MissionsList = () => {
  const { missions } = useSelector((state) => state.missions);

  const reservedMissions = Object.values(missions).filter((mission) => mission.reserved === true);

  return (
    <table>
      {
        reservedMissions.length ? reservedMissions.map((mission) => (
          <tbody key={mission.mission_name}>
            <tr>
              <td>
                {mission.mission_name}
              </td>
            </tr>
          </tbody>
        )) : (
          <tbody>
            <tr>
              <td>
                No Missions Reserved.
              </td>
            </tr>
          </tbody>
        )
      }
    </table>
  );
};

export default MissionsList;
