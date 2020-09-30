import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import RecoveryView from "./RecoveryView";

const Recovery = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Deve ser um email valido")
        .required("Este campo é obrigatório."),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();

      console.log(values);
    },
  });

  return <RecoveryView {...{ formik }} />;
};
export default Recovery;
