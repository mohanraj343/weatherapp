import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


export default function CustomDatepicker({onChange, value,views}) {
  return (
    <div>
  <LocalizationProvider  dateAdapter={AdapterDayjs}  >
    <DatePicker onChange={onChange} value={value} views={views} />
  </LocalizationProvider>
    </div>
  )
}
