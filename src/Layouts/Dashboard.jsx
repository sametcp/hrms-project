import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import EmployerList from '../Pages/User/Employer/EmployerList'
import JobSeekerList from '../Pages/User/Jobseeker/JobSeekerList'
import JobAdvertList from '../Pages/JobAdvert/JobAdvertList'
import JobAdvertAdd from '../Pages/JobAdvert/JobAdvertAdd'
import RegisterEmployer from '../Pages/User/Employer/RegisterEmployer'
import RegisterJobseeker from '../Pages/User/Jobseeker/RegisterJobseeker'
import SidebarEmployer from '../Pages/User/Employer/SidebarEmployer'
import JobAdvertDetail from '../Pages/JobAdvert/JobAdvertDetail'
import UserLogin from '../Pages/User/UserLogin'
import SidebarJobSeeker from '../Pages/User/Jobseeker/SidebarJobSeeker'
import JobSeekerProfile from '../Pages/User/Jobseeker/JobSeekerProfile'
import EmployerProfile from '../Pages/User/Employer/EmployerProfile'
import EmployerUpdate from '../Pages/User/Employer/EmployerUpdate'
import Admin from '../Pages/User/Employee/AdminLogin'
import EmployeeProfile from '../Pages/User/Employee/EmployeeProfile'
import EmployeeUpdate from '../Pages/User/Employee/EmployeeUpdate'
import PendingApproval from '../Pages/User/Employee/PendingApproval'
import JobSeekerSettings from '../Pages/User/Jobseeker/JobSeekerSettings'
import ProfileSidebarJobSeeker from '../Pages/User/Jobseeker/ProfileSideBarJobsSeeker'
import JobSeekerCV from '../Pages/User/Jobseeker/CV/JobSeekerCV'
import UpdateEducation from '../Pages/User/Jobseeker/CV/UpdateEducation'
import { ToastContainer } from 'react-toastify'
import UpdateJobExperience from '../Pages/User/Jobseeker/CV/UpdateJobExperience'
import UpdateCoverLetter from '../Pages/User/Jobseeker/CV/UpdateCoverLetter'
import UpdateLanguage from '../Pages/User/Jobseeker/CV/UpdateLanguage'
import UpdateLink from '../Pages/User/Jobseeker/CV/UpdateLink'
import UpdateSkill from '../Pages/User/Jobseeker/CV/UpdateSkill'
import FavoriteAdvertisements from '../Pages/JobAdvert/FavoriteAdvertisements'
import SidebarAdmin from '../Pages/User/Employee/SidebarAdmin'
import HomePage from '../Pages/HomePage/HomePage'
import JobSeekerUpdate from '../Pages/User/Jobseeker/JobSeekerUpdate'
import NotFound from '../Pages/NotFound/NotFound'


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Grid>

                <Grid.Column width={16}>
                    <Route exact path="/" component={HomePage} />
                </Grid.Column>

                <Grid.Column width={4}>

                    <Route exact path="/jobseeker" component={SidebarJobSeeker} />
                    <Route path="/jobseeker/:id" component={ProfileSidebarJobSeeker} />

                    <Route path="/employer" component={SidebarEmployer} />

                    <Route path="/jobadverts" component={SidebarJobSeeker} />


                    <Route path="/admin/:id" component={SidebarAdmin} />
                </Grid.Column>



                <Grid.Column width={12}>
                    <Switch>
                        <Route exact path="/" />



                        <Route path="/userlogin" component={UserLogin} />



                        <Route path="/jobseekers" component={JobSeekerList} />
                        {/* <Route path="/loginjobseeker" component={LogInJobseeker} /> */}
                        <Route path="/registerjobseeker" component={RegisterJobseeker} />
                        <Route exact path="/jobseeker/:id/personalinfo" component={JobSeekerProfile} />
                        <Route exact path="/jobseeker/:id/personalinfo/update" component={JobSeekerUpdate} />
                        <Route exact path="/jobseeker/:id/cv" component={JobSeekerCV} />
                        <Route exact path="/jobseeker/:id/settings" component={JobSeekerSettings} />


                        <Route exact path="/jobseeker/:id/cv/:id/updateeducationjobseeker" component={UpdateEducation} />
                        <Route exact path="/jobseeker/:id/cv/:id/updatejobexperiencejobseeker" component={UpdateJobExperience} />
                        <Route exact path="/jobseeker/:id/cv/:id/updatecoverletterjobseeker" component={UpdateCoverLetter} />
                        <Route exact path="/jobseeker/:id/cv/:id/updatelanguagejobseeker" component={UpdateLanguage} />
                        <Route exact path="/jobseeker/:id/cv/:id/updatelinkjobseeker" component={UpdateLink} />
                        <Route exact path="/jobseeker/:id/cv/:id/updateskilljobseeker" component={UpdateSkill} />
                        <Route exact path="/jobseeker/:id/favoriteads" component={FavoriteAdvertisements} />



                        <Route exact path="/employer" />
                        <Route exact path="/employerlist" component={EmployerList} />
                        {/* <Route path="/loginemployer" component={LogInEmployer} /> */}
                        <Route path="/registeremployer" component={RegisterEmployer} />
                        <Route exact path="/employer/addjobadvert" component={JobAdvertAdd} />
                        <Route exact path="/employer/:id/personalinfo" component={EmployerProfile} />
                        <Route exact path="/employer/:id/personalinfo/update" component={EmployerUpdate} />



                        <Route path="/jobadverts" component={JobAdvertList} />
                        <Route exact path="/jobadvert/:id/details" component={JobAdvertDetail} />



                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/admin/:id/profile" component={EmployeeProfile} />
                        <Route exact path="/admin/:id/update" component={EmployeeUpdate} />
                        <Route exact path="/admin/:id/pendingapproval" component={PendingApproval} />


                        <Route component={NotFound} />
                    </Switch>
                </Grid.Column>


            </Grid>
        </div>
    )
}
