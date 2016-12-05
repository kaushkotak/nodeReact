// src/components/AthletePage.js
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import jobs from '../data/jobs';

export default class JobPage extends React.Component {
  render() {
    const id = this.props.params.id;
    console.log('this.props.params.id' + id);
    const job = jobs.filter((job) => job.id === id)[0];
    console.log('job' + job);
    if (!job) {
      return <NotFoundPage/>;
    }
    return (
      <div className="job-full">
        <div className="job">
          <section className="job-id">JOB ID: {job.id} </section>
          <section className="job-description">JOB DESCRIPTION: {job.description}</section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
