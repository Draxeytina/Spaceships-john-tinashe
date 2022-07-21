import React from 'react';
import { useSelector } from 'react-redux';

const MissionsList = () => {
  const { missions } = useSelector((state) => state.missions);
  const missionList = Object.keys(missions);
  const reservedMissions = [];

  if (missionList.length) {
    missionList.forEach((item) => {
      if (missions[item].reserved) {
        reservedMissions.push({
          id: reservedMissions.length + 1,
          title: missions[item].mission_name,
        });
      }
    });
  }

  return (
    <table>
      {
        reservedMissions.length ? reservedMissions.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>
                {item.title}
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
