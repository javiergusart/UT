// src/components/SubmittedReview.js
import React from "react";
import { Button } from "react-bootstrap";

const SubmittedReview = ({ data, onBack }) => {
  return (
    <div className="container mt-4">
      <h2>Review Submitted</h2>
      <hr />
      {data.goals.map((goal, idx) => (
        <div key={idx} className="mb-3">
          <h5>Goal: {goal.name}</h5>
          <p><strong>Details:</strong> {goal.workDone}</p>
          <p><strong>Rating:</strong> {goal.rating}</p>
        </div>
      ))}
      <h5>Final Comments:</h5>
      <p>{data.comments}</p>

      <div className="text-center mt-4">
        <Button variant="secondary" onClick={onBack}>
          Back to Form
        </Button>
      </div>
    </div>
  );
};

export default SubmittedReview;
