import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/missionListItem.css';

export default function MissionsListItem(props) {
  const { mission } = props;
  const [state, setState] = useState({
    status: 'NOT A MEMBER',
    enrol: 'Join Mission',
  });

  const clickedMission = (event) => {
    event.preventDefault();
    if (event.target.value === 'Join Mission') {
      setState({
        ...state,
        enrol: 'Leave Mission',
        status: 'Active Member',
      });
    } else {
      setState({
        ...state,
        enrol: 'Join Mission',
        status: 'NOT A MEMBER',
      });
    }
  };
  return (
    <tr>
      <td className="title">
        <h1>{mission.mission_name}</h1>
      </td>
      <td>
        <p>{mission.description}</p>
      </td>
      <td>
        <button className="statusFalse" type="button" aria-label="Mission Status" value={state.status}>{state.status}</button>
      </td>
      <td className={mission.mission_id}>
        <button onClick={clickedMission} className="enrolFalse" type="button" aria-label="Mission Status" value={state.enrol}>{state.enrol}</button>
      </td>
    </tr>
  );
}

MissionsListItem.propTypes = {
  mission: PropTypes.instanceOf(Array).isRequired,
};
