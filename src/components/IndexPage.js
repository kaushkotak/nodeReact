// src/components/IndexPage.js
import React from 'react';
import JobPreview from './JobPreview';
import jobs from '../data/jobs';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="job-selector">
          {jobs.map(jobData => <JobPreview key={jobData.id} {...jobData} />)}
        </div>
      </div>
    );
  }
}
