import React, { useState } from "react";
import Layout from "../../layouts/layout";
import {Button, Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Logosmall from "../../assets/logo-small.png";
import './inventory.css';
import SearchPrescID from "./search-section/SearchPrescID";
import SearchPatID from "./search-section/SearchPatID";
import SupplyPopup from "./search-section/SupplyPopup";




function Supply(props) {
    const [showModal, setShowModal] = useState(false);
    const supplymodal = () => {
        setShowModal(!showModal);
    };

    const handleSearch2 = (searchTerm) => {
        // Perform search logic using the search term
        console.log('Search term:', searchTerm);
    };
    const handleSearch3 = (searchTerm1) => {
        // Perform search logic using the search term
        console.log('Search term:', searchTerm1);
    };
    const [drugList1, setdrugList1] = useState([
        {No: 1, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Pending"},
        {No: 2, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Pending"},
        {No: 3, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Pending"},
        {No: 4, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Delivered"},
        {No: 5, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Delivered"},
        {No: 6, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Delivered"},
        {No: 7, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Rejected"},
        {No: 8, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Delivered"},
        {No: 9, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Delivered"},
        {No: 10, date: "07-07-2023",Prescription_ID: "PRT00026", Patient_ID: "CST20008", Patient_Name: "Powsi", status: "Delivered"}


    ])

    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <Card className="Sliderr" style={{width: '1070px', marginTop: '10px', marginLeft: '20px'}}>
                            <Card.Body style={{display: 'flex', flexDirection: 'row'}}>
                                <Card.Title className="cardText1">Supply</Card.Title>
                                <Card.Img variant="top" src={Logosmall}
                                          style={{width: '150px', height: '150px', marginLeft: '500px'}}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className={"container"}>
                <div className={"p-5"}>
                    <div className={"SearchSection"} style={{display: 'flex', flexDirection: 'row'}}>
                        <div><h3 className={"content-heading"}>Filter the Results : </h3></div>
                        <div className={"SearchSection2"}>
                            <SearchPrescID onSearch={handleSearch2}/>
                            <SearchPatID onSearch={handleSearch3}/>
                        </div>

                    </div>
                    <div className={"table-container "}>
                        <table className={"table table-hover table-striped "}>
                            <thead className={"top-0 position-sticky h-45"}>
                            <tr>
                                <th scope="col">NO</th>
                                <th scope="col">DATE</th>
                                <th scope="col">PRESCRIPTION_ID</th>
                                <th scope="col">PATIENT_ID</th>
                                <th scope="col">PATIENT_NAME</th>
                                <th scope="col">STATUS</th>
                                <th scope="col">ACTION</th>
                            </tr>
                            </thead>
                            <tbody>
                            {drugList1.map((data, index) => (<tr>
                                <th scope="row">{data.No}</th>
                                <td>{data.date}</td>
                                <td>{data.Prescription_ID}</td>
                                <td>{data.Patient_ID}</td>
                                <td>{data.Patient_Name}</td>
                                <td className={data.status === "Pending" ? "pending" : data.status === "Delivered" ? "delivered" : "rejected"}>{data.status}</td>
                                <td>
                                    <Button variant="primary" className={"UpdtButt"} onClick={supplymodal}>Update</Button>
                                </td>
                            </tr>))}

                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
            <SupplyPopup  show={showModal} onHide={supplymodal}/>



        </Layout>
    );
}

export default Supply;