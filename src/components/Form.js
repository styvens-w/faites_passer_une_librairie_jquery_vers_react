import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormIdentity from "./FormIdentity";
import FormLocation from "./FormLocation";
import FormInfo from "./FormInfo";
import Button from "./Button";
import {createEmployee} from "../redux/features/employeeActions";
import {Modal} from "@styvens-w/react-component-modal"
import {useEffect, useState} from "react";


function Form({ classN }) {
    const className = `${classN}__form`
    const dispatch = useDispatch();
    const { success } = useSelector((state) => state.employee);
    const { handleSubmit } = useForm();
    const firstName = document.getElementsByClassName('firstName');
    const lastName = document.getElementsByClassName('lastName');
    const birthDate = document.getElementsByClassName('birthDate');
    const street = document.getElementsByClassName('street');
    const city = document.getElementsByClassName('city');
    const state = document.getElementsByClassName('state');
    const zipCode = document.getElementsByClassName('zipCode');
    const startDate = document.getElementsByClassName('startDate');
    const department = document.getElementsByClassName('department');

    const [openModal, setOpenModal] = useState(false);
    const messageModal = "Employee Created!";
    const bgColour = "white";
    const textColour = "#96ab49";
    const btColour = "#96ab49";
    const btTextColour = "white";
    const paramsModal = { bgColour: bgColour, textColour: textColour, btColour: btColour, btTextColour: btTextColour, link: "/EmployeeList" };


    const submitForm = (data) => {
        data.firstName = firstName[0].value
        data.lastName = lastName[0].value
        data.birthDate = birthDate[0].value
        data.street = street[0].value
        data.city = city[0].value
        data.state = state[0].value
        data.zipCode = zipCode[0].value
        data.startDate = startDate[0].value
        data.department = department[0].value
        dispatch(createEmployee(data))
    }

    useEffect(() => {
        if (success) {
            setOpenModal(!openModal)
        }
    }, [success]);


    return (
        <form onSubmit={handleSubmit(submitForm)} id={className}  className={className}>
            <Modal display={openModal} setDisplay={setOpenModal} message={messageModal} params={paramsModal} />
            <FormIdentity classN={className} />
            <FormLocation classN={className} />
            <FormInfo classN={className} />
            <div className={`${className}__button`}>
                <Button type={"submit"} value={"Submit"} />
                <Button type={"reset"} value={"Reset"} />
            </div>
        </form>
    )
}

export default Form