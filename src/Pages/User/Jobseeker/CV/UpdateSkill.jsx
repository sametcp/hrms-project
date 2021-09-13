import React from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Grid, Header, Button } from 'semantic-ui-react';
import HRMSInput from '../../../../utilities/customFormControls/HRMSInput';
import { toast } from 'react-toastify';
import SkillService from '../../../../Services/SkillService';

export default function UpdateSkill() {

    let { id } = useParams()
    const skillService = new SkillService()

    const initialValues = {
        skillName: ""
    }

    const validationSchema = Yup.object({
        skillName: Yup.string().required("Giriş Zorunludur")
    })

    const onSubmit = ((values) => {
        values.id = id
        console.log(values)
        skillService.update(values).then(toast.success("Bilgilerin Başarıyla Güncellendi"))
    })

    return (
        <div className="ui form">

            <Header as="h2" inverted color="red">PROGRAMLAMA DİLİ BİLGİLERİNİ GÜNCELLE</Header>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <HRMSInput name="skillName" placeholder="Bildiğiniz programlama dilini giriniz"></HRMSInput>
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
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
