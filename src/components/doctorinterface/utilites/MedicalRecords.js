import React from 'react';
import MedRecordModal from './MedRecordModal';
import { useState } from 'react';

export default function MedicalRecords(props) {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const { date,complain ,examination ,tests ,diagnosis,prescription } = props;

    // const date = props.date;
    // const complain = props.complain;
    // const examination = props.examination;
    // const tests = props.tests;
    // const diagnosis = props.diagnosis;
    // const prescription = props.prescription;

    // let data = [{
    //     date : props.date,
    //     complain : props.complain,
    //     examination : props.examination,
    //     tests : props.tests,
    //     diagnosis : props.diagnosis,
    //     prescription : props.prescription,
    // }]
    return (
        <>
            <tr>
                <td style={{ minWidth: '100px', }}>{date}</td>
                <td className='text-truncate' style={{ maxWidth: '150px', }}>{complain}</td>
                <td className='text-truncate' style={{ maxWidth: '150px', }}>{examination}</td>
                <td className='text-truncate' style={{ maxWidth: '150px', }}>{tests}</td>
                <td className='text-truncate' style={{ maxWidth: '150px', }}>{diagnosis}</td>
                <td className='text-center'><button className='btn text-white btn-gr p-1'>Prescription</button></td>
                <td className='text-center'><button className='btn text-white btn-gr p-1' onClick={toggleModal}>View</button></td>
            </tr>
            <MedRecordModal show={showModal} onHide={toggleModal} recordData={props}/>
        </>
    )
}
