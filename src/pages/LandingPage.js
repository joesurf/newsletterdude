import React, { Fragment } from 'react'

import MapHeader from '../components/layout/LandingPage/MapHeader'
import RoadmapFlowchart from '../components/layout/LandingPage/RoadmapFlowchart'


function LandingPage() {
  return (
    <Fragment>
      {/* <RulesForLife />
      <Reflections />
      <CustomizedTimeline /> */}
      <MapHeader />
      <RoadmapFlowchart />
    </Fragment>
  )
}

export default LandingPage