import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useGetEmployeesQuery} from "../utils/services/employees.service";
import {setCredentials} from "../redux/features/employeeSlice";
import Table from "./Table";
import columnsTable from "../utils/datas/columnsTable.json"

function DataTable({ classN }) {
    const className = `${classN}__dataTable`;
    const { employeesInfos } = useSelector((state) => state.employee);
    const dispatch = useDispatch();


    // On authentifie automatiquement l'utilisateur si le token est trouvé
    const { data } = useGetEmployeesQuery("employees");

    useEffect(() => {
        if (data) {
            dispatch(setCredentials(data));
        }
    }, [data, dispatch]);

    return (
            employeesInfos ? <Table classN={className} columns={columnsTable} data={employeesInfos} /> : null
    )
}

export default DataTable