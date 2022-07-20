import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionsListItem from './MissionsListItem';
import { fetchMissions } from '../reduks/missions/missions';
import './styles/missions.css';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div className="container">
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions.map((mission) => (
          <MissionsListItem
            key={mission.mission_id}
            mission={mission}
          />
        ))}
      </table>
    </div>
  );
}
