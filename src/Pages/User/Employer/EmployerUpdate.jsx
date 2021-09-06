import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import EmployerService from '../../../Services/EmployerService';
import { Grid, Header, Button } from 'semantic-ui-react';
import HRMSInput from '../../../utilities/customFormControls/HRMSInput';
import { toast } from 'react-toastify';

export default function EmployerUpdate() {

    let { id } = useParams()
    let employerService = new EmployerService()

    const history = useHistory();

    const initialValues = {
        email: "",
        password: "",
        companyName: "",
        website: "",
        phoneNumber: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Giriş zorunludur"),
        password: Yup.string().required("Giriş zorunludur"),
        companyName: Yup.string().required("Giriş zorunludur"),
        website: Yup.string().required("Giriş zorunludur"),
        phoneNumber: Yup.number().required("Giriş zorunludur")
    });

    const onSubmit = ((values) => {
        values.id = id
        console.log(values)
        employerService.updateEmployer(values).then(result => {
            if(result.data.success === false)
            {
                toast.error(result.data.message)
            }
            else
            {
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
                                <HRMSInput name = "email" placeholder="E-mail adresiniz" type = "email"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name = "password" placeholder="Şifreniz" type = "password"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name = "companyName" placeholder="Şirket Adı"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name = "website" placeholder="Website Adresiniz"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name = "phoneNumber" placeholder="Telefon Numaranız" type = "number"></HRMSInput>
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
