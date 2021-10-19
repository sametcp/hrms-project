import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Segment, Table, Button } from 'semantic-ui-react'
import CoverLetterService from "../../../../Services/CoverLetterService"
import EducationService from "../../../../Services/EducationService"
import ImageService from "../../../../Services/ImageService"
import JobExperienceService from "../../../../Services/JobExperienceService"
import LanguageService from "../../../../Services/LanguageService"
import LinkService from "../../../../Services/LinkService"
import SkillService from "../../../../Services/SkillService"


export default function JobSeekerCV() {

    let { id } = useParams()

    const [coverLetters, setCoverLetters] = useState([])
    const [educations, setEducations] = useState([])
    const [image, setImage] = useState({})
    const [jobExperiences, setJobExperiences] = useState([])
    const [languages, setLanguages] = useState([])
    const [links, setLinks] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const coverLetterService = new CoverLetterService()
        const educationService = new EducationService()
        const imageService = new ImageService()
        const jobExperienceService = new JobExperienceService()
        const languageService = new LanguageService()
        const linkService = new LinkService()
        const skillService = new SkillService()


        educationService.getByJobSeekerId(id).then(result => setEducations(result.data.data))
        jobExperienceService.getByJobSeekerId(id).then(result => setJobExperiences(result.data.data))
        coverLetterService.getByJobSeekerId(id).then(result => setCoverLetters(result.data.data))
        languageService.getByJobSeekerId(id).then(result => setLanguages(result.data.data))
        linkService.getByJobSeekerId(id).then(result => setLinks(result.data.data))
        skillService.getByJobSeekerId(id).then(result => setSkills(result.data.data))
        imageService.getByJobSeekerId(id).then(result => setImage(result.data.data))
    }, [])

    return (
        <div>
            <Segment color="black" raised ><b>CV BİLGİLERİM</b></Segment><br/>

            <Table color="green" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="5">EĞİTİM BİLGİLERİ</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        educations.map(education => (
                            <Table.Row key={education.id}>
                                <Table.Cell><b>Okul Adı : </b>{education.schoolName}</Table.Cell>
                                <Table.Cell><b>Fakülte : </b>{education.department}</Table.Cell>
                                <Table.Cell><b>Eğitime Başlama Tarihi : </b>{education.startDate}</Table.Cell>
                                <Table.Cell><b>Eğitimin Bitiş Tarihi : </b>{education.endDate}</Table.Cell>
                                <Table.Cell><Button color="green" style={{ marginTop: "10pt" }}
                                    as={NavLink} to={`/jobseeker/${id}/cv/${education.id}/updateeducationjobseeker`}>Güncelle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table><br />



            <Table color="blue" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="5">DENEYİM BİLGİLERİ</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobExperiences.map(jobExperience => (
                            <Table.Row key={jobExperience.id}>
                                <Table.Cell><b>İş Pozisyonu : </b>{jobExperience.position}</Table.Cell>
                                <Table.Cell><b>İş Konumu : </b>{jobExperience.workplace}</Table.Cell>
                                <Table.Cell><b>İşe Başlama Tarihi : </b>{jobExperience.startDate}</Table.Cell>
                                <Table.Cell><b>İş Bitiş Tarihi : </b>{jobExperience.endDate}</Table.Cell>
                                <Table.Cell><Button color="green" style={{ marginTop: "4pt" }}
                                    as={NavLink} to={`/jobseeker/${id}/cv/${jobExperience.id}/updatejobexperiencejobseeker`}>Güncelle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table><br />



            <Table color="blue" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2">KABUL AÇIKLAMASI</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        coverLetters.map(coverLetter => (
                            <Table.Row key={coverLetter.id}>
                                <Table.Cell><b>Açıklama : </b>{coverLetter.content}</Table.Cell>
                                <Table.Cell><Button color="green" style={{ marginTop: "10pt" }, { marginLeft: "10pt" }}
                                    as={NavLink} to={`/jobseeker/${id}/cv/${coverLetter.id}/updatecoverletterjobseeker`}>Güncelle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table><br />



            <Table color="blue" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="4">BİLİNEN DİLLER</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        languages.map(language => (
                            <Table.Row key={language.id}>
                                
                                <Table.Cell><b>Dil : </b>{language.language}</Table.Cell>
                                <Table.Cell><b>Dil Seviyesi : </b>{language.level}</Table.Cell>
                                <Table.Cell width = {3}><Button color="green" style={{ marginTop: "10pt" }, {marginLeft: "12pt"}}
                                    as={NavLink} to={`/jobseeker/${id}/cv/${language.id}/updatelanguagejobseeker`}>Güncelle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table><br />



            <Table color="blue" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="3">LİNKLER</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        links.map(link => (
                            <Table.Row key={link.id}>
                                <Table.Cell><b>Github : </b>{link.githubUrl}</Table.Cell>
                                <Table.Cell><b>Linkedin  : </b>{link.linkedinUrl}</Table.Cell>
                                <Table.Cell><Button color="green" style={{ marginTop: "4pt" }}
                                    as={NavLink} to={`/jobseeker/${id}/cv/${link.id}/updatelinkjobseeker`}>Güncelle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table><br />



            <Table color="blue" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2">BİLİNEN PROGRAMLAMA DİLLERİ</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        skills.map(skill => (
                            <Table.Row key={skill.id}>
                                <Table.Cell><b>Programlama Dilleri : </b>{skill.skillName}</Table.Cell>
                                <Table.Cell><Button color="green" style={{marginLeft : "130pt"}}
                                    as={NavLink} to={`/jobseeker/${id}/cv/${skill.id}/updateskilljobseeker`}>Güncelle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table><br />



            <Table color="blue" celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2">FOTOĞRAF</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row >
                        <Table.Cell><b>Fotoğrafın URL Adresi : </b>{image.url}</Table.Cell>
                        <Table.Cell><Button color="green" style={{ marginTop: "4pt" }}
                            as={NavLink} to={`/jobseeker/${id}/cv/${image.id}/updateimagejobseeker`}>Güncelle</Button></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table><br />

        </div>
    )
}
