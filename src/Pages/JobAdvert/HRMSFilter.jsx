import React, { useEffect, useState } from 'react'
import { Dropdown, Label, Segment, Button, Checkbox } from 'semantic-ui-react';
import CityService from '../../Services/CityService';
import JobPositionService from '../../Services/JobPositionService';
import WorkHourService from '../../Services/WorkHourService';
import WorkTypeService from '../../Services/WorkTypeService';

export default function JobAdvertFilter({ clickEvent }) {

    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    const [workHours, setWorkHours] = useState([]);

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))

        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))

        let workTypeService = new WorkTypeService()
        workTypeService.getWorkTypes().then(result => setWorkTypes(result.data.data))

        let workHourService = new WorkHourService()
        workHourService.getWorkHours().then(result => setWorkHours(result.data.data))
    }, [])


    const [cityIndex, setCityIndex] = useState([])
    const handleChangeCity = (e, { value }) => {
        setCityIndex(value)
    }

    const [jobPositionIndex] = useState([])
    const handleChangeJobPosition = (e, { value, checked }) => {
        if (checked) {
            jobPositionIndex.push(value)
        } else {
            let index = jobPositionIndex.indexOf(value)
            if (index > -1) {
                jobPositionIndex.splice(index, 1)
            }
        }
    }

    const [workTypeIndex] = useState([])
    const handleChangeWorkType = (e, { value, checked }) => {
        if (checked) {
            workTypeIndex.push(value)
        } else {
            let index = workTypeIndex.indexOf(value)
            if (index > -1) {
                workTypeIndex.splice(index, 1)
            }
        }
    }

    const [workHourIndex] = useState([])
    const handleChangeWorkHour= (e, { value, checked }) => {
        if (checked) {
            workHourIndex.push(value)
        } else {
            let index = workHourIndex.indexOf(value)
            if (index > -1) {
                workHourIndex.splice(index, 1)
            }
        }
    }

    return (
        <div>
            <Segment color="black" raised>
                <Label size="large" attached="top" ribbon color = "blue">Şehir</Label>
                <Dropdown
                    placeholder="Şehir seçiniz"
                    selection
                    search
                    multiple
                    clearable
                    options={cities.map((city, index) => {
                        return { text: city.name, key: city.index, value: city.id }
                    })}
                    onChange={handleChangeCity}
                    value={cityIndex}
                />
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">İş Pozisyonu</Label>
                {
                    jobPositions.map(jobPosition => (
                        <Checkbox
                            key={jobPosition.id}
                            label={jobPosition.jobTitle}
                            onChange={handleChangeJobPosition}
                            value={jobPosition.id}
                        />
                    ))
                }
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">Çalışma Yeri</Label>
                {
                    workTypes.map(workType => (
                        <Checkbox
                            key={workType.id}
                            label={workType.workType}
                            onChange={handleChangeWorkType}
                            value={workType.id}
                        />
                    ))
                }
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">Çalışma Süresi</Label>
                {
                    workHours.map(workHour => (
                        <Checkbox
                            key={workHour.id}
                            label={workHour.workHour}
                            onChange={handleChangeWorkHour}
                            value={workHour.id}
                        />
                    ))
                }
            </Segment><br/>
            <Button
                type="button"
                style = {{width : "150px"}}
                color="green"
                onClick={() => clickEvent({ cityId: cityIndex, jobPositionId: jobPositionIndex, workTypeId: workTypeIndex, workHourId: workHourIndex })}
            >
                Filtrele
            </Button><br/><br/>
        </div>
    )
}
