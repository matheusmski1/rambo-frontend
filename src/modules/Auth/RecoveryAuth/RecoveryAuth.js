import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import RecoveryAuthView from "./RecoveryAuthView";

const RecoveryAuth = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      verificationCode: Yup.string().required("Este campo é obrigatório."),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();

      console.log(values);
    },
  });

  return <RecoveryAuthView {...{ formik }} />;
};
export default RecoveryAuth;
