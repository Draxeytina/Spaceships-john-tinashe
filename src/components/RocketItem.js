import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelRocket } from '../reduks/rockets/rockets';

const RocketItem = (props) => {
  const { rocket } = props;

  const dispatch = useDispatch();
  const handleReserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const handleCancel = () => {
    dispatch(cancelRocket(rocket.id));
  };

  return (
    <li className="rocket">
      <div className="rocketImg">
        <img src={rocket.flickr_images[0]} alt="rocket" />
      </div>
      <div className="rocketInfo">
        <h3>
          {rocket.rocket_name}
        </h3>
        <p>
          {rocket.reserved === true && (<div className="reserved">Reserved</div>)}
          {rocket.description}
        </p>
        { rocket.reserved === true
          ? (
            <button type="button" className="cancelBtn" onClick={handleCancel}>
              Cancel Reservation
            </button>
          )
          : (
            <button type="button" className="reserveBtn" onClick={handleReserve}>
              Reserve Rocket
            </button>
          )}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.instanceOf(Array).isRequired,
};

export default RocketItem;
