import { useState } from "react"

const useForm = (stateInicial) => {

    const [formValues, setFormValues] = useState(stateInicial);

    const handleChange = ({ target }) => {
        setFormValues({ ...formValues, [target.name]: target.value })
    }

    const clearForm = () => setFormValues(stateInicial);

    return { clearForm, handleChange, formValues, setFormValues }
}

export default useForm
