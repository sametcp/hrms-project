import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import EmployerList from '../Pages/User/Employer/EmployerList'
import JobSeekerList from '../Pages/User/Jobseeker/JobSeekerList'
import JobAdvertList from '../Pages/JobAdvert/JobAdvertList'
import Login from '../Login'
import NotFound from '../Pages/NotFound/NotFound'
import SidebarEmployer from './SidebarEmployer'
import HomePage from '../Pages/HomePage/HomePage'
import JobAdvertAdd from '../Pages/JobAdvert/JobAdvertAdd'
import ConfirmJobAdvert from '../Pages/JobAdvert/ConfirmJobAdvert'


export default function Dashboard() {
    return (
        <div>
            
            <Grid>
                <Grid.Row>

                    <Grid.Column width={4}>
                        <Switch>
                            <Route exact path="/" />
                            <Route exact path = "/employers" component = {SidebarEmployer}>
                            </Route>
                        </Switch>
                    </Grid.Column>

                    <Grid.Column width={12}>
                            <Route exact path="/"/>
                            <Route exact path="/employers/addjobadvert" component={JobAdvertAdd} />
                            <Route exact path="/employers/unconfirmedjobadverts" component={ConfirmJobAdvert} />
                            <Route path="/jobseekers" component={JobSeekerList} />
                            <Route path="/jobadverts" component={JobAdvertList} />
                    </Grid.Column>



                    <Grid.Column width = {16}>
                        <Route exact path="/"  component = {HomePage}/>
                    </Grid.Column>

                    <Grid.Column width = {16}>
                        <Route exact path="/"/>
                        <Route path="/login" component={Login} />
                    </Grid.Column>



                </Grid.Row>
            </Grid>
        </div>
    )
}
