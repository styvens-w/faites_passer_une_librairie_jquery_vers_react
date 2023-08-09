import InputText from "./InputText";
import InputSelect from "./InputSelect";
import states from "../utils/datas/states.json"

function FormLocation({ classN }) {
    const className = `${classN}__location section`

    return (
        <fieldset className={className}>
            <legend>Location</legend>
            <div>
                <InputText type={"street"} label={"Street"} />
                <InputText type={"city"} label={"City"} />
            </div>
            <div>
                <InputSelect datas={states} type={"state"} label={"State"} />
                <InputText type={"zipCode"} label={"Zip Code"} />
            </div>
        </fieldset>
    )
}

export default FormLocation