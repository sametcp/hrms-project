import React, { useEffect, useState} from 'react'
import JobPositionService from "../../../Services/JobPositionService";
import { Table } from 'semantic-ui-react'

export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions()
        .then(result => setJobPositions(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPositions.map(jobPosition => (
                            <Table.Row key={jobPosition.id}>
                                <Table.Cell>{jobPosition.jobTitle}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

            </Table>
        </div>
    )
}
