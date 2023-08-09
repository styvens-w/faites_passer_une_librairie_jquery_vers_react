import "../assets/scss/pages/createEmployee.scss"
import Title from "../components/Title";
import Form from "../components/Form";

function CreateEmployee() {
  const className = "createEmployee"

  return (
    <main className={className}>
      <Title classN={className} content={"Create Employee"} />
      <Form classN={className} />
    </main>
  );
}

export default CreateEmployee;
