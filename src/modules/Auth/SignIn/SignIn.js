import React from "react";
import SignInView from "./SignInView";
import { useFormik } from "formik";
import * as Yup from "yup";

const SingIn = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      login: Yup.string().required("Este campo é obrigatório."),
      password: Yup.string().required("Este campo é obrigatório."),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();

      console.log(values);
    },
  });

  return <SignInView {...{ formik }} />;
};
export default SingIn;
