import React, { useState } from 'react';
import './styles/missionListItem.css';

export default function MissionsListItem() {
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
        <h1>Thaicom</h1>
      </td>
      <td>
        <p>
          Lorem ipsum dolor sit am, consectetur adipisicing elit. Qui dicta minus molestiae vel b
          eveniet ratione tempori aperiam harum alias officiis assumenda officia quibusdam deleni
          cupiditate dolore doloribus!
          Lorem ipsum dolor sit ametonsectetur adipisicing elit. Qui dicta minus molestiae vel b
          eveniet ratione temporibuseriam harum alias officiis assumenda officia quibusdam deleni
          cupiditate dolore doloribus
        </p>
      </td>
      <td>
        <button className="statusFalse" type="button" aria-label="Mission Status" value={state.status}>{state.status}</button>
      </td>
      <td>
        <button className="enrolFalse" type="button" aria-label="Mission Status" value={state.enrol} onClick={clickedMission}>{state.enrol}</button>
      </td>
    </tr>
  );
}
