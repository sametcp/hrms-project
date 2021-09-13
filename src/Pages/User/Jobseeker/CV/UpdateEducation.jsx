import React from 'react'
import { useParams } from 'react-router-dom';
import EducationService from "../../../../Services/EducationService"
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { Button, Grid, Header } from 'semantic-ui-react';
import HRMSInput from '../../../../utilities/customFormControls/HRMSInput';

export default function UpdateEducation() {

    let { id } = useParams()
    //console.log(id)
    let educationService = new EducationService()

    const initialValues = {
        schoolName: "",
        department: "",
        startDate: "",
        endDate: ""
    }


    const validationSchema = Yup.object({
        schoolName: Yup.string().required("Giriş zorunludur"),
        department: Yup.string().required("Giriş zorunludur"),
        startDate: Yup.date().required("Giriş zorunludur"),
        endDate: Yup.date().required("Giriş zorunludur")
    });

    const onSubmit = ((values) => {
        values.id = id
        console.log(values)
        educationService.update(values).then(toast.success("Bilgilerin Başarıyla Güncellendi"))
    })

    return (
        <div className="ui form">
            <Header as="h2" inverted color="red">EĞİTİM BİLGİLERİNİ GÜNCELLE</Header>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="schoolName" placeholder="Okul Adı"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="department" placeholder="Fakülte"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="startDate" placeholder="Eğitime başlama tarihi" type = "date"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="endDate" placeholder="Eğitim bitiş tarihi" type = "date"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Button content="GÜNCELLE"
                        labelPosition="right"
                        icon="add"
                        positive
                        type="submit"
                        style={{ marginTop: "20px" }}>
                    </Button>
                </Form>
            </Formik><br/><br/><br/><br/>
        </div>
    )
}