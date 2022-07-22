import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketItem from './RocketItem';
import { fetchRockets } from '../reduks/rockets/rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if ((rockets.length) === 0)dispatch(fetchRockets());
  }, []);
  return (
    <ul className="rockets">
      {rockets.map((rocket) => (
        <RocketItem
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </ul>
  );
};

export default RocketList;
