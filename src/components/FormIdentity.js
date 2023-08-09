import InputText from "./InputText";
import InputDate from "./InputDate";

function FormIdentity({ classN }) {
    const className = `${classN}__identity section`

    return (
        <fieldset className={className}>
            <legend>Identity</legend>
            <div>
                <InputText type={"firstName"} label={"First Name"} />
                <InputText type={"lastName"} label={"Last Name"} />
            </div>
            <div>
                <InputDate type={"birthDate"} label={"Date of Birth"} />
            </div>
        </fieldset>
    )
}

export default FormIdentity