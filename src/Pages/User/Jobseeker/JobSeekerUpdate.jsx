import React from 'react'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
import JobSeekerService from '../../../Services/JobSeekerService';
import HRMSInput from '../../../utilities/customFormControls/HRMSInput';
import { Grid, Header, Button } from 'semantic-ui-react';

export default function JobSeekerUpdate() {

    let { id } = useParams()
    let jobSeekerService = new JobSeekerService()

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        nationalId: "",
        password: ""
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Giriş zorunludur"),
        lastName: Yup.string().required("Giriş zorunludur"),
        email: Yup.string().required("Giriş zorunludur"),
        dateOfBirth: Yup.date().required("Giriş zorunludur"),
        nationalId: Yup.string().required("Giriş zorunludur"),
        password: Yup.number().required("Giriş zorunludur"),
    });

    const onSubmit = ((values) => {
        values.id = id
        console.log(values)
        jobSeekerService.update(values).then(result => {
            if (result.data.success === false) {
                toast.error(result.data.message)
            }
            else {
                toast.success(result.data.message)
            }
        })
    })

    return (
        <div className="ui form">
            <Header as="h2" inverted color="red">BİLGİLERİNİ GÜNCELLE</Header>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="firstName" placeholder="Adınız" type="text"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="lastName" placeholder="Soyadınızı" type="text"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="email" placeholder="E-mail" type= "email"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="password" placeholder="Şifreniz" type="text"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="dateOfBirth" placeholder="Doğum tarihiniz" type = "date"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="nationalId" placeholder="T.C. Kimlik No" type="text"></HRMSInput>
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

            </Formik>
        </div>
    )
}
