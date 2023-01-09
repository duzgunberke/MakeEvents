import React from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import ActivityDetails from '../details/ActivityDetails';
import ActivityList from './ActivityList';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityDashboard() {
  
  const{activityStore}=useStore();
  const{selectedActivity,editMode}=activityStore;

  return (
    <Grid>
        <GridColumn width='10'>
            <ActivityList />
        </GridColumn>
        <GridColumn width='6'>
          {selectedActivity && !editMode &&
          <ActivityDetails />}
          {editMode &&
          <ActivityForm />}
        </GridColumn>
    </Grid>
  )
})
