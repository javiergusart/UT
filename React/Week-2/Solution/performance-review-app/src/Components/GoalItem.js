import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button, Badge } from "react-bootstrap";

const GoalItem = ({ goal, onChange, onDelete }) => {
    const [autoSaveLabel, setAutoSaveLabel] = useState("");

    // componentDidUpdate equivalent for goal change
    useEffect(() => {
        if (goal.autoSaved) {
            setAutoSaveLabel("Auto-saved");
            const timeout = setTimeout(() => {
                setAutoSaveLabel("");
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [goal]);


    const handleChange = (field, value) => {
        onChange(goal.id, field, value);
    };

    return (
        <div className="border p-3 mb-3 rounded">
            <Row>
                <Col><h5>Goal: {goal.name}</h5></Col>
                <Col className="text-end">
                    {autoSaveLabel && <Badge bg="info">{autoSaveLabel}</Badge>}
                </Col>
            </Row>
            <Form.Group className="mb-2">
                <Form.Label>Goal Name</Form.Label>
                <Form.Control
                    type="text"
                    value={goal.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Work Done</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={goal.workDone}
                    onChange={(e) => handleChange("workDone", e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Self Rating (1-5)</Form.Label>
                <Form.Select
                    value={goal.rating}
                    onChange={(e) => handleChange("rating", e.target.value)}
                >
                    <option value="">Select rating</option>
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                </Form.Select>
            </Form.Group>
            <Button variant="danger" onClick={() => onDelete(goal.id)}>
                Delete
            </Button>
        </div>
    );
};

export default GoalItem;
