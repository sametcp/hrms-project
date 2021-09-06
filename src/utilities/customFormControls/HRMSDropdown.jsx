import { useField } from "formik";
import React from "react";
import { FormSelect } from "semantic-ui-react";

export default function HRMSDropdown({ ...props}) {

    const [field, meta] = useField(props);

    return <FormSelect {...field} {...props} search selection></FormSelect>;
}
