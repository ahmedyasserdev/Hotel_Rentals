'use client'
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  {PickerProps} from "@/types"

const Picker = ({date   , setDate , label} : PickerProps ) => {
  return (
    <section className="flex flex-col gap-4" >
    <label className = "bold-16 text-dark" >{label}</label>
    <DatePicker selected={date} onChange={(date : Date) => setDate(date)} 
    showTimeSelect
    timeInputLabel = "Time:"
    wrapperClassName="datePicker"
    />
    </section>
  )
}

export default Picker