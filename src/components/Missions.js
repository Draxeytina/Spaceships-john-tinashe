import React from 'react';
import MissionsListItem from './MissionsListItem';
import './styles/missions.css';

export default function Missions() {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <MissionsListItem />
        </tbody>
      </table>
    </div>
  );
}
