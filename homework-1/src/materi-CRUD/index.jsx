import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import CourseCreateModal from './component/courseCreateModal';
import courseService from './utils/service';

const Content = () => {
    const [courses, setCourses] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const toggleCreateModal = () => {
        setShowCreateModal(!showCreateModal);
    };

    const handleAddCourse = () => {
        toggleCreateModal();
    };

    const fecthCourses = () => {
        const response = courseService.get();
        setCourses(response.data);
    };

    useEffect(() => {
        fecthCourses();
    }, []);

    return (
        <>
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Button onClick={toggleCreateModal}>Tambah Course</Button>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Deskripsi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={course.id}>
                                    <td>{index + 1}</td>
                                    <td>{course.title}</td>
                                    <td>{course.description}</td>
                                    <td>
                                        <Button variant="danger">Hapus</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        <CourseCreateModal
            show={showCreateModal}
            onCreate={() => {
                setShowCreateModal(false);
                handleAddCourse();
            }}
            onCancel={() => {
                setShowCreateModal(false);
            }}
        />
        </>
    );
}

export default Content;