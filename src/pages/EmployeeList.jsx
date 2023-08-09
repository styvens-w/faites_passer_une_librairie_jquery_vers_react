import "../assets/scss/pages/employeeList.scss"
import Title from "../components/Title";
import DataTable from "../components/DataTable";

function EmployeeList() {
    const className = "employeeList";

    return (
        <main className={className}>
            <Title classN={className} content={"List Employees"} />
            <DataTable classN={className} />
        </main>
    )
}

export default EmployeeList