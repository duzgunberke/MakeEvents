import React from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityList from './ActivityList';
import ActivityForm from '../form/ActivityForm';

interface Props{
    activities: Activity[];
    selectedActivity:Activity | undefined;
    selectActivity:(id:string) =>void;
    cancelSelectActivity:()=>void;
    editMode:boolean;
    openForm:(id:string)=>void;
    closeForm:()=>void;
}

export default function ActivityDashboard({activities,selectedActivity,
  selectActivity,cancelSelectActivity,editMode,openForm,closeForm}:Props) {
  return (
    <Grid>
        <GridColumn width='10'>
            <ActivityList activities={activities} selectActivity={selectActivity} />
        </GridColumn>
        <GridColumn width='6'>
          {selectedActivity && !editMode &&
          <ActivityDetails 
          activity={selectedActivity} 
          cancelSelectActivity={cancelSelectActivity}
          openForm={openForm}
          />}
          {editMode &&
          <ActivityForm closeForm={closeForm} activity={selectedActivity}/>}
        </GridColumn>
    </Grid>
  )
}
