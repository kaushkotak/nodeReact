// src/components/AthletePreview.js
import React from 'react';
import { Link } from 'react-router';

export default class JobPreview extends React.Component {
  render() {
    return (
      <Link to={`/job/${this.props.id}`}>
        <div className="job-preview">
          <h2 className="job-id">{this.props.id}</h2>
          <span className="job-description">{this.props.description}</span>
        </div>
      </Link>
    );
  }
}
