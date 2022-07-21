import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMission, fetchMissions } from '../reduks/missions/missions';
import './styles/missionListItem.css';

export default function MissionsListItem() {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  const missionList = Object.keys(missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    missionList.map((mission) => (
      <tr key={mission}>
        <td className="title">
          <h1>{missions[mission].mission_name}</h1>
        </td>
        <td>
          <p>{missions[mission].description}</p>
        </td>
        <td>
          {
            missions[mission].reserved ? <button className="statusTrue" type="button" aria-label="Mission Status" value="Not a Member">Active Member</button> : <button className="statusFalse" type="button" aria-label="Mission Status" value="Not a Member">Not a Member</button>
          }
        </td>
        <td className={mission.mission_id}>
          {
            missions[mission].reserved ? <button onClick={() => dispatch(updateMission(mission))} className="enrolTrue" type="button" aria-label="Mission Status" value="Leave Mission">Leave Mission</button> : <button onClick={() => dispatch(updateMission(mission))} className="enrolFalse" type="button" aria-label="Mission Status" value="Join Mission">Join Mission</button>
          }
        </td>
      </tr>
    ))
  );
}
