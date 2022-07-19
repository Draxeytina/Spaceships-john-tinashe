import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { rocket } = props;

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
          {rocket.description}
        </p>
        <button type="button" className="reserveBtn">Reserve Rocket</button>
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.instanceOf(Array).isRequired,
};

export default RocketItem;
