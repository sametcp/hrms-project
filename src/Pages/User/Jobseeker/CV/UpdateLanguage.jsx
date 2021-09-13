import React from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Grid, Header, Button } from 'semantic-ui-react';
import HRMSInput from '../../../../utilities/customFormControls/HRMSInput';
import { toast } from 'react-toastify';
import LanguageService from '../../../../Services/LanguageService';

export default function UpdateLanguage() {

    let { id } = useParams()
    const languageService = new LanguageService()

    const initialValues = {
        language: "",
        level: ""
    }

    const validationSchema = Yup.object({
        language: Yup.string().required("Giriş Zorunludur"),
        level: Yup.string().required("Giriş Zorunludur")
    })

    const onSubmit = ((values) => {
        values.id = id
        console.log(values)
        languageService.update(values).then(toast.success("Bilgilerin Başarıyla Güncellendi"))
    })

    return (
        <div className="ui form">
            <Header as="h2" inverted color="red">DİL BİLGİLERİNİ GÜNCELLE</Header>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="language" placeholder="Bildiğiniz dil"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="level" placeholder="Seviyeniz"></HRMSInput>
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

            </Formik><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
