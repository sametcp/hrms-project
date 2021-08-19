import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import JobAdvertService from '../../Services/JobAdvertService';
import CityService from '../../Services/CityService'
import WorkHourService from '../../Services/WorkHourService'
import WorkTypeService from '../../Services/WorkTypeService'
import JobPositionService from '../../Services/JobPositionService'
import { useHistory } from 'react-router-dom';
import { FormField, Button, Label, Card, Dropdown, Grid, TextArea } from 'semantic-ui-react';

export default function JobAdvertAdd() {

    const history = new useHistory();

    const validationSchema = Yup.object({
        cityId: Yup.string().required("Please select a city"),
        jobPositionId: Yup.string().required("Please select a position"),
        jobStatement: Yup.string().required("Please enter a job description"),
        openPositionCount: Yup.number().positive().required("Please enter a open position count"),
        minSalary: Yup.number().positive().required("Please enter min salary"),
        maxSalary: Yup.number().positive().required("Please enter max salary"),
        workPlaceId: Yup.string().required("Please select a work place"),
        workHourId: Yup.string().required("Please select a work hour"),
        deadline: Yup.date().required("Please enter an application deadline")
    })

    const initialValues = {
        jobPositionId: "",
        cityId: "",
        openPositionCount: "",
        salaryMin: "",
        salaryMax: "",
        workPlaceId: "",
        workHourId: "",
        deadline: "",
        jobStatement: "",
    };

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

    const workPlaceValues = workTypes.map((workType) => ({
        key: workType.id,
        text: workType.workType,
        value: workType.id
    }));

    const workHourValues = workHours.map((workHour) => ({
        key: workHour.id,
        text: workHour.workHour,
        value: workHour.id
    }));

    const jobAdvertService = new JobAdvertService()

    const onSubmit = (values) => {
        values.employerId = 48
        console.log(values)
        alert("giriş yapıldı")
    };

    return (
        <div className="form">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ setFieldValue, values, errors, dirty, touched, handleSubmit }) => (

                    <Card fluid>
                        <Card.Content header="İŞ İLANI VER" />
                        <Card.Content>
                            <Form className="ui form" onSubmit={handleSubmit}>
                                <FormField>
                                    <Dropdown
                                        placeholder='İş Pozisyonu'
                                        search
                                        selection
                                        id="jobPositionId"
                                        value={values.jobPositionId}
                                        options={jobPositionValues}
                                        onChange={(fieldName, data) =>
                                            setFieldValue("jobPositionId", data.value)
                                        }
                                    />

                                    {errors.jobPositionId && touched.jobPositionId && (
                                        <div className={"ui pointing red basic label"}>
                                            {errors.jobPositionId}
                                        </div>
                                    )}

                                </FormField>
                                <FormField style={{ marginTop: "1em" }}>
                                    <Dropdown
                                        placeholder='Şehir Seçiniz'
                                        search
                                        selection
                                        id="cityId"
                                        value={values.cityId}
                                        options={cityValues}
                                        onChange={(fieldName, data) =>
                                            setFieldValue("cityId", data.value)
                                        }
                                    />

                                    {errors.cityId && touched.cityId && (
                                        <div className={"ui pointing red basic label"}>
                                            {errors.cityId}
                                        </div>
                                    )}

                                </FormField>

                                <FormField >
                                    <Dropdown
                                        placeholder='İş Yeri'
                                        search
                                        selection
                                        id="workPlaceId"
                                        value={values.workPlaceId}
                                        options={workPlaceValues}
                                        onChange={(fieldName, data) =>
                                            setFieldValue("workPlaceId", data.value)
                                        }
                                    />
                                    {errors.workPlaceId && touched.workPlaceId && (
                                        <div className={"ui pointing red basic label"}>
                                            {errors.workPlaceId}
                                        </div>
                                    )}

                                </FormField>

                                <FormField>
                                    <Dropdown
                                        placeholder='İş Zamanı'
                                        search
                                        selection
                                        id="workHourId"
                                        value={values.workHourId}
                                        options={workHourValues}
                                        onChange={(fieldName, data) =>
                                            setFieldValue("workHourId", data.value)
                                        }
                                    />
                                    {errors.workHourId && touched.workHourId && (
                                        <div className={"ui pointing red basic label"}>
                                            {errors.workHourId}
                                        </div>
                                    )}

                                </FormField>

                                <Button type="submit" color="black">
                                    GİRİŞ YAP
                                </Button>

                            </Form>
                        </Card.Content>
                    </Card>


                )}
            </Formik>

        </div>

    )

}