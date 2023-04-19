import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import courseService from "../utils/service";


const CourseCreateModal = ({ show, onCreate, onCancel }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submitData = () => {
        const submitPayload = {
            id: Math.floor(Date.now() / 1000),
            title,
            description,
        };
        handleSubmit(submitPayload);
    };

    const handleSubmit = (payload) => {
        onCreate(payload);
        courseService.add(payload);
    };

    return (
        <Modal
            show={show}
            onHide={onCancel}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Tambah Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={onCancel}>Cancel</button>
                <button onClick={submitData}>Create</button>
            </Modal.Footer>

        </Modal>
    );
}

export default CourseCreateModal;