import Employee from "./Employee"
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Modal, Button, Alert } from 'react-bootstrap';
import AddForm from "./AddForm";
import Pagination from "./Pagination";


const EmployeeList = () =>{

    const {sortedEmployees} = useContext(EmployeeContext)

    const [showAlert, setShowAlert] = useState(false);


    const [ show, setShow ] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // const handleShowAlert = () => setShowAlert(true)

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(4)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout (()=>{
            setShowAlert(false)
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedEmployees])

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage)
    

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>React <b>CRUD Operation</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal">
                            <i className="material-icons">&#xE147;</i> <span>Add New Data</span>
                        </Button>	
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Data List Updated Successfully
            </Alert>


            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>                    
                    {
                        currentEmployees.map(employee => (
                            <tr key={employee.id}>
                                <Employee employee={employee}/>
                            </tr>
                        ))
                    }
                </tbody>  
            </table> 


            <Pagination 
                pages = {totalPagesNum} 
                setCurrentPage={setCurrentPage}
                currentEmployees = {currentEmployees}
                sortedEmployees = {sortedEmployees}
            />

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Data
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Button
                    </Button>
                </Modal.Footer>
            </Modal>
        </>       
    )
}
export default EmployeeList;