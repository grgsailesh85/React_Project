import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';



const AddForm = () => {

    const {addEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const onInputChange = (e) => {
        setNewEmployee({
            ...newEmployee,
            [e.target.name] : e.target.value
        })
    }

    const { name, email, address, phone } = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control 
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value = {name}
                    onChange={ (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control 
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value = {email}
                    onChange={ (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control 
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value = {address}
                    onChange={ (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control 
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value = {phone}
                    onChange={ (e) => onInputChange(e)}
                />
            </Form.Group>


            <Button variant="success" type="submit" block>
                Add New Data
            </Button>
        </Form>
    )
}
export default AddForm;