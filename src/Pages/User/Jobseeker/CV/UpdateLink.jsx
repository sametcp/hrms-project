import React from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Grid, Header, Button } from 'semantic-ui-react';
import HRMSInput from '../../../../utilities/customFormControls/HRMSInput';
import { toast } from 'react-toastify';
import LinkService from '../../../../Services/LinkService';

export default function UpdateLink() {

    let { id } = useParams()
    const linkService = new LinkService()

    const initialValues = {
        githubUrl: "",
        linkedinUrl: ""
    }

    const validationSchema = Yup.object({
        githubUrl: Yup.string().required("Giriş Zorunludur"),
        linkedinUrl: Yup.string().required("Giriş Zorunludur")
    })

    const onSubmit = ((values) => {
        values.id = id
        console.log(values)
        linkService.update(values).then(toast.success("Bilgilerin Başarıyla Güncellendi"))
    })

    return (
        <div className="ui form">
            <Header as="h2" inverted color="red">LİNK BİLGİLERİNİ GÜNCELLE</Header>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="githubUrl" placeholder="GitHub adresinizi giriniz"></HRMSInput>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="linkedinUrl" placeholder="Linkedin adresinizi giriniz"></HRMSInput>
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
