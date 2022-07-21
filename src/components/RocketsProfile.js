import React from 'react';
import { useSelector } from 'react-redux';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <table>
      {rockets.map((rocket) => {
        if (rocket.reserved) {
          return (
            <tr
              key={rocket.id}
            >
              <td>{rocket.rocket_name}</td>
            </tr>
          );
        } return null;
      })}
    </table>
  );
};

export default RocketList;
