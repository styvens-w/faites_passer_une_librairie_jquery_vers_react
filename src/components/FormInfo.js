import InputSelect from "./InputSelect";
import InputDate from "./InputDate";
import department from "../utils/datas/department.json"

function FormInfo({ classN }) {
    const className = `${classN}__info section`

    return (
        <fieldset className={className}>
            <legend>Information</legend>
            <div>
                <InputDate type={"startDate"} label={"Start Date"} />
                <InputSelect datas={department} type={"department"} label={"Department"} />
            </div>
        </fieldset>
    )
}

export default FormInfo