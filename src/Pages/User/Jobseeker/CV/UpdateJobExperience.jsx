import React from 'react'
import { useParams } from 'react-router-dom'
import JobExperienceService from '../../../../Services/JobExperienceService'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Grid, Header, Button } from 'semantic-ui-react';
import HRMSInput from '../../../../utilities/customFormControls/HRMSInput';
import { toast } from 'react-toastify';

export default function UpdateJobExperience() {

    let { id } = useParams()
    let jobExperienceService = new JobExperienceService()

    const initialValues = {
        workplace: "",
        position: "",
        startDate: "",
        endDate: ""
    }

    const validationSchema = Yup.object({
        workplace: Yup.string().required("Giriş zorunludur"),
        position: Yup.string().required("Giriş zorunludur"),
        startDate: Yup.date().required("Giriş zorunludur"),
        endDate: Yup.date().required("Giriş zorunludur")
    });

    const onSubmit = ((values) => {
        values.id = id
        console.log(values)
        jobExperienceService.update(values).then(toast.success("Bilgilerin Başarıyla Güncellendi"))
    })

    return (
        <div className = "ui form">
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
                                <HRMSInput name = "workplace" placeholder="İş yeri konumu (şehir)"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name = "position" placeholder="İş Pozisyonu"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name = "startDate" placeholder="Eğitime başlama tarihi" type = "date"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name = "endDate" placeholder="Eğitim bitiş tarihi" type = "date"></HRMSInput>
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
