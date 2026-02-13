import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_ROOT}/${id}`;
        const response = await axios.get(apiUrl);

        if (
          response.status === 200 &&
          response.data?.statusText === "Ok"
        ) {
          setBlog(response.data.record);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]); // ✅ correct dependency

  if (loading) {
    return <Container className="py-5">Loading...</Container>;
  }

  if (error || !blog) {
    return <Container className="py-5">Blog not found.</Container>;
  }

  return (
    <Container className="py-4">
      <Row className="align-items-start">
        <Col md={7}>
          <h1 className="mb-3">{blog.title}</h1>
          <p className="blog-content">{blog.post}</p>
        </Col>

        <Col md={5} className="text-center">
          {blog.image && (
            <img
              src={`${process.env.REACT_APP_API_ROOT}/${blog.image}`}
              alt={blog.title}
              className="img-fluid blog-image"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;

