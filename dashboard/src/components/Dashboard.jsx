import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Summary from './Summary'
import Orders from './Orders'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import DashboardApp from './DashboardApp'
import WatchList from './WatchList'

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider> */}
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<DashboardApp />} />
        </Routes>
      </div>
    </div>
  )
}
