import React from 'react'
import { useHistory, useParams } from 'react-router'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import EmployeeService from '../../../Services/EmployeeService';
import { Grid, Header, Button } from 'semantic-ui-react';
import HRMSInput from '../../../utilities/customFormControls/HRMSInput';
import { toast } from 'react-toastify';

export default function EmployerUpdate() {

    let { id } = useParams()
    let employeeService = new EmployeeService()

    const history = useHistory();

    const initialValues = {
        email: "",
        password: "",
        name: "",
        lastName: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Giriş zorunludur"),
        password: Yup.string().required("Giriş zorunludur"),
        name: Yup.string().required("Giriş zorunludur"),
        lastName: Yup.string().required("Giriş zorunludur")
    });

    const onSubmit = ((values) => {
        values.id = id
        console.log(values)
        employeeService.updateEmployee(values).then(toast.success("Bilgileriniz güncellendi."))
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
                                <HRMSInput name = "name" placeholder="Adınız"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name = "lastName" placeholder="Soyadınız"></HRMSInput>
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
