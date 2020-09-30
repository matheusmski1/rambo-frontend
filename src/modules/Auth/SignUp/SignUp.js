import React from "react";
import SignUpView from "./SignUpView";
import { useFormik } from "formik";
import * as Yup from "yup";

const SingUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      institutionKey: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Este campo é obrigatório."),
      lastName: Yup.string().required("Este campo é obrigatório."),
      email: Yup.string()
        .email("Email deve ser válido.")
        .required("Este campo é obrigatório."),
      password: Yup.string().required("Este campo é obrigatório."),
      passwordConfirm: Yup.string()
        .required("Este campo é obrigatório.")
        .oneOf([Yup.ref("password")], "As senhas não coincidem"),
      institutionKey: Yup.string().required("Este campo é obrigatório."),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();

      console.log(values);
    },
  });

  return <SignUpView {...{ formik }} />;
};
export default SingUp;
