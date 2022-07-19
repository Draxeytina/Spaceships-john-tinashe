import React from 'react';
import MissionsListItem from './MissionsListItem';
import './styles/missions.css';

export default function Missions() {
  return (
    <div className="container">
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        <MissionsListItem />
      </table>
    </div>
  );
}
