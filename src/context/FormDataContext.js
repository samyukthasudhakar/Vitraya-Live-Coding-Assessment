import { createContext, useContext, useState } from "react";
import { v4 as uuid } from 'uuid'

const formDataContext = createContext({})

function FormDataContext({children}){

    const initialFormData = {id: uuid(), imgSrc: '', title: '', description:'', tags:''}
    const [formData, setFormData] = useState(initialFormData)
    
    return (
        <formDataContext.Provider value = {{formData, setFormData}}>
            {children}
        </formDataContext.Provider>
    )
}

const useFormDataContext = () => useContext(formDataContext)

export {FormDataContext, useFormDataContext}