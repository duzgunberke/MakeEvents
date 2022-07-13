import React from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';

interface Props{
    activities: Activity[];
}

export default function ActivityDashboard({activities}:Props) {
  return (
    <Grid>
        <GridColumn width='10'>
            <ActivityList activities={activities} />
        </GridColumn>
    </Grid>
  )
}
