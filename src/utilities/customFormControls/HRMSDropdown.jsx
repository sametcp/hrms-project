import { useField } from "formik";
import React from "react";
import { FormInput, FormSelect, Label } from "semantic-ui-react";

export default function HRMSDropdown({ ...props}) {

    const [field, meta] = useField(props);

    return <FormSelect {...field} {...props} search selection></FormSelect>;
}
