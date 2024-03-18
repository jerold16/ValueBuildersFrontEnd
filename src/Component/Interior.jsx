import React from 'react'
import { Route, Routes } from 'react-router'
import InteriorHome from './InteriorHome'
import HouseConstructiondivision from './HouseConstructiondivision'
import InteriorHouse from './InteriorHouse'
import InteriorCommercial from './InteriorCommercial'

const Interior = () => {
  return (
    <div>
        <Routes>
            <Route path='/*' element={<InteriorHome/>}/>
            <Route path='/homeInterior' element={<InteriorHouse/>}/>
            <Route path='/CommercialInterior' element={<InteriorCommercial/>}/>
        </Routes>
    </div>
  )
}

export default Interior