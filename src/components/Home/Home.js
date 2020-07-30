import React from 'react'

import Banner from 'components/Banner'
import Divider from 'components/Divider'
import Layout from 'components/Layout'
import {
  DevicePile,
  Mobile,
  Tv,
} from 'components/Stories'
import StorySection from 'components/StorySection'

export default function Home() {
  return (
    <Layout>
      <Banner nodetails/>
      <Divider />
      <StorySection
        caption="Enjoy on your TV."
        subcaption="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        storyElement={<Tv />}
      />
      <Divider />
      <StorySection
        caption="Download your shows to watch offline."
        subcaption="Save your favourites easily and always have something to watch."
        inverse
        storyElement={<Mobile />}
      />
      <Divider />
      <StorySection
        caption="Watch everywhere."
        subcaption="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        storyElement={<DevicePile />}
      />
      <Divider />
    </Layout>
  )
}
