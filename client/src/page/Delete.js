import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setLoading(true);
    setError("");

    try {
      const apiUrl = `${process.env.REACT_APP_API_ROOT}/${id}`;
      const response = await axios.delete(apiUrl);

      if (response.status === 200) {
        navigate("/", {
          state: "Record deleted successfully.",
        });
      }
    } catch (err) {
      console.error(err);
      setError("Failed to delete the record. Please try again.");
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="delete-card">
            <h3 className="delete-title">Delete Confirmation</h3>

            <p className="delete-text">
              This action is <strong>irreversible</strong>.  
              Are you sure you want to permanently delete this record?
            </p>

            {error && <p className="delete-error">{error}</p>}

            <div className="delete-actions">
              <button
                className="btn btn-outline-secondary"
                onClick={handleCancel}
                disabled={loading}
              >
                Cancel
              </button>

              <button
                className="btn btn-danger"
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
