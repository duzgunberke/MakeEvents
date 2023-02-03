import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Segment, Button,  Label } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form,  ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';

export default observer(function ActivityForm() {

  const { activityStore } = useStore();
  const { createActivity, updateActivity,
    loading, loadActivity, loadingInitial } = activityStore;

  const { id } = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  });

  const validationSchema = Yup.object({
      title: Yup.string().required('The activity title is required'),
      description: Yup.string().required('The activity description is required'),
      category: Yup.string().required('The activity category is required'),
      date: Yup.string().required('The activity date is required'),
      venue: Yup.string().required('The activity venue is required'),
      city: Yup.string().required('The activity city is required'),
  })

  useEffect(() => {
    if (id) loadActivity(id).then(activity => setActivity(activity!))
  }, [id, loadActivity]);

  //   function handleSubmit(){
  //     if(!activity.id){
  //       activity.id=uuid();
  //       createActivity(activity).then(()=>navigate(`/activities/${activity.id}`))
  //     }else{
  //       updateActivity(activity).then(()=>navigate(`/activities/${activity.id}`))
  //     }
  //   }

  // function handleChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
  //   const{name,value} = event.target;
  //   setActivity({...activity,[name]:value})
  // }

  if (loadingInitial) return <LoadingComponent content="Aktiviteler yükleniyor..." />

  return (
    <Segment clearing>
      <Formik
          validationSchema={validationSchema} 
          enableReinitialize 
          initialValues={activity} 
          onSubmit={values => console.log(values)}>
        {({handleSubmit }) => (
          <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
            <MyTextInput placeholder='Title' name='title' />
            <MyTextArea  placeholder="Description" name="description" rows={3}  />
            <MyTextInput placeholder="Category" name="category" />
            <MyTextInput placeholder="Date" name="date" />
            <MyTextInput placeholder="City" name="city" />
            <MyTextInput placeholder="Venue" name="venue" />
            <Button loading={loading} floated="right" positive type="submit" content="Submit" />
            <Button as={Link} to='/activities' floated="right" type="submit" content="Cancel" />
          </Form>
        )}
      </Formik>
    </Segment>
  )
})
