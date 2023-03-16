import React, { useEffect, useState } from 'react'
import { Grid, GridColumn, Loader } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';
import { PagingParams } from '../../../app/models/pagination';
import InfiniteScroll from 'react-infinite-scroller';

export default observer(function ActivityDashboard() {

  const { activityStore } = useStore();
  const { loadActivities, activityRegistry,setPagingParams,pagination } = activityStore;
  const [loadingNext,setLoadingNext]=useState(false);

  function handleGetNext(){
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    loadActivities().then(()=>setLoadingNext(false));
  }

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities,activityRegistry.size])

  if (activityStore.loadingInitial && !loadingNext) return <LoadingComponent content="Aktiviteler yükleniyor..." />

  return (
    <Grid>
      <GridColumn width='10'>
        <InfiniteScroll
          pageStart={0}
          loadMore={handleGetNext}
          hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
          initialLoad={false}
        >
         <ActivityList />
        </InfiniteScroll>
      </GridColumn>
      <GridColumn width='6'>
        <ActivityFilters />
      </GridColumn>
      <Grid.Column width={10}>
        <Loader active={loadingNext} />
      </Grid.Column>
    </Grid>
  )
})
