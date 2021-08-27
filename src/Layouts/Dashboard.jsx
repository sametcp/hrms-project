import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import EmployerList from '../Pages/User/Employer/EmployerList'
import JobSeekerList from '../Pages/User/Jobseeker/JobSeekerList'
import JobAdvertList from '../Pages/JobAdvert/JobAdvertList'
import NotFound from '../Pages/NotFound/NotFound'
import HomePage from '../Pages/HomePage/HomePage'
import JobAdvertAdd from '../Pages/JobAdvert/JobAdvertAdd'
import ConfirmJobAdvert from '../Pages/JobAdvert/ConfirmJobAdvert'
import EmployerLogIn from '../Pages/User/Employer/LogInEmployer'
import LogInEmployer from '../Pages/User/Employer/LogInEmployer'
import RegisterEmployer from '../Pages/User/Employer/RegisterEmployer'
import LogInJobseeker from '../Pages/User/Jobseeker/LogInJobseeker'
import RegisterJobseeker from '../Pages/User/Jobseeker/RegisterJobseeker'
import SidebarEmployer from '../Pages/User/Employer/SidebarEmployer'
import Login from '../Login'
import Login2 from '../Login2'


export default function Dashboard() {
    return (
        <div>

            <Grid>
                <Grid.Row>

                    <Grid.Column width={4}>
                        <Route exact path="/" />
                        <Route path="/employers" component={SidebarEmployer} />
                    </Grid.Column>


                    <Grid.Column width={12}>
                        <Route exact path="/" />
                        <Route exact path="/employers/addjobadvert" component={JobAdvertAdd} />
                        <Route exact path="/employers/unconfirmedjobadverts" component={ConfirmJobAdvert} />
                        <Route path="/jobseeker" component={JobSeekerList} />
                        <Route path="/jobadverts" component={JobAdvertList} />
                    </Grid.Column>


                </Grid.Row>

                <Grid.Row>

                    <Grid.Column width={8}>
                        <Route exact path="/" />
                        <Route exact path="/login" component={Login}/>
                    </Grid.Column>


                    <Grid.Column width={8}>
                        <Route exact path="/" />
                        <Route exact path="/login" component = {Login2}/>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>

                    <Grid.Column width={16}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/loginemployer" component={LogInEmployer} />
                        <Route path="/loginjobseeker" component={LogInJobseeker} />
                        <Route path="/registeremployer" component={RegisterEmployer} />
                        <Route path="/registerjobseeker" component={RegisterJobseeker} />
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </div>
    )
}
