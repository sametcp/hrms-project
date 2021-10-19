import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import JobAdvertService from '../../Services/JobAdvertService';
import CityService from '../../Services/CityService'
import WorkHourService from '../../Services/WorkHourService'
import WorkTypeService from '../../Services/WorkTypeService'
import JobPositionService from '../../Services/JobPositionService'
import { useHistory } from 'react-router-dom';
import { Button, Header, Grid, Segment } from 'semantic-ui-react';
import HRMSDropdown from '../../utilities/customFormControls/HRMSDropdown';
import HRMSInput from '../../utilities/customFormControls/HRMSInput';

export default function JobAdvertAdd() {

    const history = new useHistory();
    const jobAdvertService = new JobAdvertService()

    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [workTypes, setWorkTypes] = useState([])
    const [workHours, setWorkHours] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        let jobPositionService = new JobPositionService();
        let workTypeService = new WorkTypeService();
        let workHourService = new WorkHourService();


        cityService.getCities().then(result => setCities(result.data.data))
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
        workTypeService.getWorkTypes().then(result => setWorkTypes(result.data.data))
        workHourService.getWorkHours().then(result => setWorkHours(result.data.data))
    }, [])

    const initialValues = {
        cityId: "",
        jobPositionId: "",
        statement: "",
        openPositionCount: "",
        salaryMin: "",
        salaryMax: "",
        workTypeId: "",
        workHourId: "",
        deadline: "",
    };

    const validationSchema = Yup.object({
        cityId: Yup.string().required("Lütfen şehir seçiniz!"),
        jobPositionId: Yup.string().required("Lütfen pozisyon seçiniz!"),
        statement: Yup.string().required("Lütfen açıklama giriniz!"),
        openPositionCount: Yup.number().positive().required("Açık pozisyon sayısı giriniz!"),
        salaryMin: Yup.number().required(" Minimum maaş skalası giriniz!"),
        salaryMax: Yup.number().required(" Maksimum maaş skalası giriniz!"),
        workTypeId: Yup.string().required("Bir çalışma türü seçiniz!"),
        workHourId: Yup.string().required("Bir çalışma zamanı seçiniz!"),
        deadline: Yup.date().required("İlan bitiş tarihini giriniz!")
    });

    const onSubmit = (values) => {
        values.employerId = 48;
        console.log(values)
        jobAdvertService.addJobadvertisement(values)
            .then((result) => console.log(result.data.data))
    }

    const jobPositionValues = jobPositions.map((jobPosition) => ({
        key: jobPosition.id,
        text: jobPosition.jobTitle,
        value: jobPosition.id
    }));

    const cityValues = cities.map((city) => ({
        key: city.id,
        text: city.name,
        value: city.id
    }));

    const workTypeValues = workTypes.map((workType) => ({
        key: workType.id,
        text: workType.workType,
        value: workType.id
    }));

    const workHourValues = workHours.map((workHour) => ({
        key: workHour.id,
        text: workHour.workHour,
        value: workHour.id
    }));

    return (
        <div className="form">

            <Header as="h1" inverted color="red">İŞ İLANI EKLEME PANELİ</Header>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ setFieldValue }) => (
                    <Segment color="red">
                        <Form className="ui form">
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <HRMSDropdown
                                            onChange={(fieldName, data) =>
                                                setFieldValue("jobPositionId", data.value)
                                            }
                                            name="jobPositionId"
                                            placeholder="Pozisyon Seçiniz"
                                            options={jobPositionValues}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <HRMSDropdown
                                            onChange={(fieldName, data) =>
                                                setFieldValue("cityId", data.value)
                                            }
                                            name="cityId"
                                            placeholder="Şehir Seçiniz"
                                            options={cityValues}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <HRMSDropdown
                                            onChange={(fieldName, data) =>
                                                setFieldValue("workTypeId", data.value)
                                            }
                                            name="workTypeId"
                                            placeholder="Çalışma Türü Seçiniz"
                                            options={workTypeValues}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <HRMSDropdown
                                            onChange={(fieldName, data) =>
                                                setFieldValue("workHourId", data.value)
                                            }
                                            name="workHourId"
                                            placeholder="Çalışma Zamanı Seçiniz"
                                            options={workHourValues}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                            <Grid stackable>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <HRMSInput
                                            name="salaryMin"
                                            type="number"
                                            placeholder="Minimum Maaş Skalası"
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <HRMSInput
                                            name="salaryMax"
                                            type="number"
                                            placeholder="Maksimum Maaş Skalası"
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <HRMSInput
                                            name="openPositionCount"
                                            type="number"
                                            label="Açık Pozisyon Sayısı"
                                            placeholder="Açık Pozisyon Sayısı"
                                        />

                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <HRMSInput
                                            name="deadline"
                                            type="date"
                                            label="Son Başvuru Tarihi"
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <HRMSInput
                                            name="statement"
                                            type="text"
                                            placeholder="İş hakkındaki açıklamalarınız"
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid><br />

                            <Button content="İLANI EKLE"
                                labelPosition="right"
                                icon="add"
                                positive
                                type="submit"
                                style={{ marginLeft: "20px" }}>
                            </Button>
                        </Form>
                    </Segment>
                )}
            </Formik><br/>
        </div>
    )

}