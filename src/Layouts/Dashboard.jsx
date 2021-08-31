import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import EmployerList from '../Pages/User/Employer/EmployerList'
import JobSeekerList from '../Pages/User/Jobseeker/JobSeekerList'
import JobAdvertList from '../Pages/JobAdvert/JobAdvertList'
import JobAdvertAdd from '../Pages/JobAdvert/JobAdvertAdd'
import ConfirmJobAdvert from '../Pages/JobAdvert/ConfirmJobAdvert'
import RegisterEmployer from '../Pages/User/Employer/RegisterEmployer'
import RegisterJobseeker from '../Pages/User/Jobseeker/RegisterJobseeker'
import SidebarEmployer from '../Pages/User/Employer/SidebarEmployer'
import JobAdvertDetail from '../Pages/JobAdvert/JobAdvertDetail'
import UserLogin from '../Pages/User/UserLogin'
import SidebarJobSeeker from '../Pages/User/Jobseeker/SidebarJobSeeker'
import JobSeekerProfile from '../Pages/User/Jobseeker/JobSeekerProfile'
import EmployerProfile from '../Pages/User/Employer/EmployerProfile'
import EmployerUpdate from '../Pages/User/Employer/EmployerUpdate'
import EmployerDetails from '../Pages/User/Employer/EmployerDetails'
import JobSeekerDetails from '../Pages/User/Jobseeker/JobSeekerDetails'
import Admin from '../Pages/User/Employee/Admin'
import EmployeeProfile from '../Pages/User/Employee/EmployeeProfile'
import EmployeeUpdate from '../Pages/User/Employee/EmployeeUpdate'
import PendingApproval from '../Pages/User/Employee/PendingApproval'
import JobSeekerSettings from '../Pages/User/Jobseeker/JobSeekerSettings'
import ProfileSidebarJobSeeker from '../Pages/User/Jobseeker/ProfileSideBarJobsSeeker'
import JobSeekerCV from '../Pages/User/Jobseeker/CV/JobSeekerCV'
import UpdateEducationJobSeeker from '../Pages/User/Jobseeker/CV/UpdateEducationJobSeeker'


export default function Dashboard() {
    return (
        <div>

            <Grid>

                    <Grid.Column width={4}>
                        <Route exact path="/" />
                        <Route exact path="/jobseeker" component={SidebarJobSeeker}/>
                        <Route exact path="/jobseeker/:id/profile" component={ProfileSidebarJobSeeker}/>
                        <Route exact path="/jobseeker/:id/personalinfo" component={ProfileSidebarJobSeeker}/>
                        <Route exact path="/jobseeker/:id/cv" component={ProfileSidebarJobSeeker}/>

                        <Route path="/employer" component={SidebarEmployer} />
                        <Route path="/employerlist" component={SidebarJobSeeker} />

                        <Route path="/jobadverts" component={SidebarJobSeeker} />
                    </Grid.Column>



                    <Grid.Column width={12}>
                        <Route exact path="/" />
                        


                        <Route path="/userlogin" component = {UserLogin}/>



                        <Route path="/jobseekers" component={JobSeekerList} />
                        {/* <Route path="/loginjobseeker" component={LogInJobseeker} /> */}
                        <Route path="/registerjobseeker" component = {RegisterJobseeker} />
                        <Route exact path="/jobseeker/:id/personalinfo" component = {JobSeekerProfile} />
                        <Route exact path="/jobseeker/:id/cv" component = {JobSeekerCV} />
                        <Route exact path="/jobseeker/:id/details"component = {JobSeekerDetails} />
                        <Route exact path="/jobseeker/:id/settings"component = {JobSeekerSettings} />

                        <Route exact path="/jobseeker/:id/updateeducationjobseeker"component = {UpdateEducationJobSeeker} />



                        <Route exact path = "/employer"/>
                        <Route exact path = "/employerlist" component = {EmployerList}/>
                        {/* <Route path="/loginemployer" component={LogInEmployer} /> */}
                        <Route path="/registeremployer" component={RegisterEmployer} />
                        <Route exact path="/employer/addjobadvert" component={JobAdvertAdd} />
                        <Route exact path="/employer/unconfirmedjobadverts" component={ConfirmJobAdvert} />
                        <Route exact path="/employer/profile" component = {EmployerProfile} />
                        <Route exact path="/employer/update" component = {EmployerUpdate} />
                        <Route exact path="/employer/:id/details" component = {EmployerDetails} />


                       
                        <Route path="/jobadverts" component={JobAdvertList} />
                        <Route exact path="/jobadvert/:id/details" component={JobAdvertDetail} />



                        <Route exact path="/admin" component={Admin}/>
                        <Route exact path="/employee/profile"  component={EmployeeProfile}/>
                        <Route exact path="/employee/update" component={EmployeeUpdate} />
                        <Route exact path="/employee/pendingapproval" component={PendingApproval}/>
        

                        {/* <Route exact path="/login" component={Login} />
                        <Route exact path="/login" component={Login2} /> */}
                    </Grid.Column>

            </Grid>
        </div>
    )
}
