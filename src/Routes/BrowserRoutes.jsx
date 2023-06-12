import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowList from '../Pages/ShowList'
import ShowSummary from '../Pages/ShowSummary'
import { EmptyPage } from '../Pages/EmptyPage'

export const BrowserRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/Movie-Booking' element={<ShowList/>} />
          <Route path='/Movie-Booking/summary' element={<ShowSummary />} />
          <Route path='*' element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
