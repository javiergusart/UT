import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import GoalItem from "./GoalItem";
import ConfirmationModal from "./ConfirmationModal";
import SubmittedReview from "./SubmittedReview";

const GoalForm = () => {
  const [goals, setGoals] = useState([]);
  const [comments, setComments] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ComponentDidMount (for example: you could load saved state)
  useEffect(() => {
    const storedGoals = localStorage.getItem("savedGoals");
    const storedComments = localStorage.getItem("savedComments");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  // Auto-save effect or localStorage integration (optional)
  useEffect(() => {
    localStorage.setItem("savedGoals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("savedComments", comments);
  }, [comments]);

  const handleAddGoal = () => {
    if (goals.length < 3) {
      const newGoal = {
        id: goals.length + 1,
        name: "",
        workDone: "",
        rating: "",
        autoSaved: false,
      };
      setGoals([...goals, newGoal]);
    }
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const handleGoalChange = (id, field, value) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, [field]: value, autoSaved: true } : goal
    );
    setGoals(updatedGoals);
  };

  const handleFinalCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = () => {
    setShowModal(true);

  };

  const confirmSubmit = () => {
    setIsSubmitted(true);
    setShowModal(false);

    localStorage.removeItem("savedGoals");
    localStorage.removeItem("savedComments");
  };

  // this will clear the data when back to form button is clicked.
  const backToGoals = () => {
    setIsSubmitted(false);       // Go back to form
    setShowModal(false);         // Ensure modal is closed
    setGoals([]);                // Clear all goals
    setComments("");             // Clear final comments
  };

  const handleResetGoals = () => {
    setGoals([]);
    setComments("");

    localStorage.removeItem("savedGoals");
    localStorage.removeItem("savedComments");
  };

  return (
    <div className="p-4 border rounded bg-white">
      {!isSubmitted ? (
        <>
          <h3 className="mb-3">Performance Review</h3>

          <div className="mb-3 d-flex gap-2">
            <Button onClick={handleAddGoal} disabled={goals.length >= 3}>
              Add Goal
            </Button>
            <Button variant="secondary" onClick={handleResetGoals} disabled={goals.length === 0}>
              Reset Goals
            </Button>
          </div>

          {goals.map((goal) => (
            <GoalItem
              key={goal.id}
              goal={goal}
              onChange={handleGoalChange}
              onDelete={handleDeleteGoal}
            />
          ))}

          <Form.Group className="mb-3">
            <Form.Label>Final Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={comments}
              onChange={handleFinalCommentChange}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit}>
            Submit Review
          </Button>

          <ConfirmationModal
            show={showModal}
            onHide={() => setShowModal(false)}
            onConfirm={confirmSubmit}
          />
        </>
      ) : (
        <SubmittedReview data={{ goals, comments }} onBack={backToGoals} />
      )}
    </div>
  );
};

export default GoalForm;
