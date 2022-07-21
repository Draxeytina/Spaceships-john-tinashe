import React from 'react';
import { useSelector } from 'react-redux';

const RocketList = () => {
  const allRockets = useSelector((state) => state.rockets);
  const rockets = allRockets.filter((rocket) => rocket.reserved !== true);

  return (
    <table>
      {rockets.map((rocket) => (
        <tr
          key={rocket.id}
        >
          <td>{rocket.rocket_name}</td>
        </tr>
      ))}
    </table>
  );
};

export default RocketList;
