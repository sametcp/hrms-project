import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import EducationService from "../../../../Services/EducationService"
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { Card, Form } from 'semantic-ui-react';
import HRMSInput from '../../../../utilities/customFormControls/HRMSInput';

export default function UpdateEducationJobSeeker() {

    let {id} = useParams()

    let educationService = new EducationService()
    const history = useHistory();
    const [education, setEducation] = useState([]);

    useEffect(() => {
        educationService.getByJobSeekerId(id).then(result => setEducation(result.data.data));
    }, [])

    //console.log(education)


    const initialValues = {
        id: education.id,
        schoolName: education.schoolName,
        department: education.department,
        startDate: education.startDate
    }

    const validationSchema = Yup.object({
        schoolName: Yup.string().required("Giriş Zorunludur"),
        department: Yup.string().required("Giriş Zorunludur"),
        startDate: Yup.date().required("Giriş Zorunludur")
    })


    const handleEducationValue = (values) =>{
        return{
            id : values.id,
            schoolName : values.schoolName,
            department : values.department,
            department : values.department
        }
    }

    return (
        <Formik
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {(values) => {
            console.log(values)
        }}
        >

            <Form className="form ui">
                <Card>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Update Education</h1></Card.Header>

                    <Card.Content>
                        <HRMSInput name = "schoolName" placeholder = "Okul adını giriniz"></HRMSInput>
                    </Card.Content>
                </Card>
            </Form>
            
        </Formik>
    )
}
