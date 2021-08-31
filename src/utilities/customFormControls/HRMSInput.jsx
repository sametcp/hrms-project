import { useField } from 'formik'
import React from 'react'
import { FormField, Label, TextArea } from 'semantic-ui-react'

export default function HRMSTextInput({...props}) {

    const [field,meta] = useField(props)

    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
             <input {...field} {...props}/>
             {meta.touched && !!meta.error ? (
                 <Label pointing basic color="red" content = {meta.error}></Label>
             ):null}
         </FormField>
        </div>
    )
}