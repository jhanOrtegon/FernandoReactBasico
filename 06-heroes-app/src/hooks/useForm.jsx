import { useState } from "react"

const useForm = (stateInicial) => {

    const [formValues, setFormValues] = useState(stateInicial);
    console.log(formValues);

    const handleChange = ({ target }) => {
        setFormValues({ ...formValues, [target.name]: target.value })
    }

    const clearForm = () => setFormValues(stateInicial);

    return { clearForm, handleChange, formValues }
}

export default useForm
