import React, { useEffect, useState } from 'react'
import { Field, ErrorMessage, useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import JobAdvertService from '../../Services/JobAdvertService';
import CityService from '../../Services/CityService'
import WorkHourService from '../../Services/WorkHourService'
import WorkTypeService from '../../Services/WorkTypeService'
import JobPositionService from '../../Services/JobPositionService'
import { useHistory } from 'react-router-dom';
import { FormField, Button, Card, Dropdown, Grid, TextArea, Form } from 'semantic-ui-react';
import { Input } from 'reactstrap'

export default function JobAdvertAdd() {

    const history = new useHistory();
    const jobAdvertService = new JobAdvertService()

    const validationSchema = Yup.object({
        cityId: Yup.string().required("Please select a city"),
        jobPositionId: Yup.string().required("Please select a position"),
        statement: Yup.string().required("Please enter a job description"),
        openPositionCount: Yup.number().positive().required("Please enter a open position count"),
        salaryMin: Yup.number().positive(),
        salaryMax: Yup.number().positive(),
        workTypeId: Yup.string().required("Please select a work type"),
        workHourId: Yup.string().required("Please select a work hour"),
        deadline: Yup.date().required("Please enter an application deadline")
    })

    const formik = useFormik({
        initialValues: {
            jobPositionId: "",
            cityId: "",
            openPositionCount: "",
            salaryMin: "",
            salaryMax: "",
            workTypeId: "",
            workHourId: "",
            deadline: "",
            statement: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            // formik.values.cityId = { cityId: formik.values.cityId }
            // formik.values.workHourId = { workHourId: formik.values.workHourId }
            // formik.values.workTypeId = { workTypeId: formik.values.workTypeId }
            // formik.values.jobPositionId = { jobPositionId: formik.values.jobPositionId }
            // formik.values.employer = { id: 49 };
            values.employerId = 48;
            console.log(values)
            jobAdvertService.addJobadvertisement(values).then(result => console.log(result.data.data))

            alert("İş ilanı eklendi, personelin onayı ardından listelenecektir");
            history.push("/",3);
        },
    });

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

    const jobPositionValues = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.jobTitle,
        value: jobPosition.id
    }));

    const cityValues = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id
    }));

    const workTypeValues = workTypes.map((workType, index) => ({
        key: index,
        text: workType.workType,
        value: workType.id
    }));

    const workHourValues = workHours.map((workHour, index) => ({
        key: index,
        text: workHour.workHour,
        value: workHour.id
    }));

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <div>
            <Card fluid>
                <Card.Content header="İŞ İLANI EKLE" />
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                            <Dropdown
                                placeholder="İş Pozisyonu"
                                search
                                selection
                                id="jobPositionId"
                                value={formik.values.jobPositionId}
                                options={jobPositionValues}
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "jobPositionId")
                                }
                                onBlur={formik.onBlur}
                            />
                            {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobPositionId}
                                </div>
                            )}
                        </Form.Field>

                        <Form.Field>
                            <Dropdown
                                clearable
                                item
                                placeholder="Şehir"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "cityId")
                                }
                                onBlur={formik.onBlur}
                                id="cityId"
                                value={formik.values.cityId}
                                options={cityValues}
                            />
                            {formik.errors.cityId && formik.touched.cityId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.cityId}
                                </div>
                            )}
                        </Form.Field>

                        <Form.Field>
                            <Grid>
                                <Grid.Column width={8}>
                                    <FormField>
                                        <Dropdown
                                            clearable
                                            item
                                            placeholder="Çalışma Tipi"
                                            search
                                            selection
                                            onChange={(event, data) =>
                                                handleChangeSemantic(data.value, "workTypeId")
                                            }
                                            onBlur={formik.onBlur}
                                            id="workTypeId"
                                            value={formik.values.workTypeId}
                                            options={workTypeValues}
                                        />
                                        {formik.errors.workTypeId && formik.touched.workTypeId && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.workTypeId}
                                            </div>
                                        )}
                                    </FormField>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <FormField>
                                        <Dropdown
                                            clearable
                                            item
                                            placeholder="Çalışma Süresi"
                                            search
                                            selection
                                            onChange={(event, data) =>
                                                handleChangeSemantic(data.value, "workHourId")
                                            }
                                            onBlur={formik.onBlur}
                                            id="workHourId"
                                            value={formik.values.workHourId}
                                            options={workHourValues}
                                        />
                                        {formik.errors.workHourId && formik.touched.workHourId && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.workHourId}
                                            </div>
                                        )}
                                    </FormField>
                                </Grid.Column>
                            </Grid>

                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <Input
                                        type="number"
                                        placeholder="Minimum Maaş"
                                        value={formik.values.salaryMin}
                                        name="salaryMin"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.salaryMin && formik.touched.salaryMin && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.salaryMin}
                                        </div>
                                    )}
                                </Grid.Column>

                                <Grid.Column width={8}>
                                    <Input
                                        type="number"
                                        placeholder="Maksimum Maaş"
                                        value={formik.values.salaryMax}
                                        name="salaryMax"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.salaryMax && formik.touched.salaryMax && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.salaryMax}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <Input
                                        id="openPositionCount"
                                        name="openPositionCount"
                                        onChange={formik.handleChange}
                                        value={formik.values.openPositionCount}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        placeholder="Açık Posisyon sayısı"
                                    />
                                    {formik.errors.openPositionCount &&
                                        formik.touched.openPositionCount && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.openPositionCount}
                                            </div>
                                        )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="date"
                                        onChange={formik.handleChange}
                                        value={formik.values.deadline}
                                        onBlur={formik.handleBlur}
                                        name="deadline"
                                        placeholder="XXXX-XX-XX(Yıl-Ay-Gün)"
                                    />
                                    {formik.errors.deadline && formik.touched.deadline && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.deadline}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <TextArea
                                placeholder="Açıklama"
                                style={{ minHeight: 100 }}
                                value={formik.values.statement}
                                name="statement"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.statement && formik.touched.statement && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.statement}
                                </div>
                            )}
                        </Form.Field>

                        <Button
                            content="İLANI EKLE"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />

                    </Form>
                </Card.Content>
            </Card>
        </div>

    )

}