import React from 'react'
import { useParams } from 'react-router-dom'
import CoverLetterService from '../../../../Services/CoverLetterService'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Grid, Header, Button } from 'semantic-ui-react';
import HRMSInput from '../../../../utilities/customFormControls/HRMSInput';
import { toast } from 'react-toastify';

export default function UpdateCoverLetter() {

    let {id} = useParams()
    const coverLetterService = new CoverLetterService()

    const initialValues = {
        content : ""
    }

    const validationSchema = Yup.object({
        content : Yup.string().required("Giriş Zorunludur")
    })

    const onSubmit = ((values) => {
        values.id = id
        console.log(values)
        coverLetterService.update(values).then(toast.success("Bilgilerin Başarıyla Güncellendi"))
    })

    return (
        <div className = "ui form">
            <Header as="h2" inverted color="red">AÇIKLAMANI GÜNCELLE</Header><br/>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name = "content" placeholder = "Açıklamanızı giriniz"></HRMSInput>
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
            </Formik><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
