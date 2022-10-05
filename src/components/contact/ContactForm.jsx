import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./ContactForm.css";
import React from "react";

const URL =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your first name")
    .min(3, "minimum 3 characters"),
  lastname: yup
    .string()
    .required("Please enter your last name")
    .min(4, "minimum 4 characters"),
  //   subject: ,
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "minimum 10 charcters"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstname")} placeholder="First name" />
        {errors.firstname && <span>{errors.firstname.message}</span>}
        <input {...register("lastname")} placeholder="Last name" />
        {errors.lastname && <span>{errors.lastname.message}</span>}
        <select {...register("subject")} placeholder="Subject">
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
        {errors.subject && <span>{errors.subject.message}</span>}
        <textarea {...register("message")} placeholder="message" />
        {errors.message && <span>{errors.message.message}</span>}
        <button>Send</button>
      </form>
    </>
  );
}

export default ContactForm;
