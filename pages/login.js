import React from 'react';

import { Formik, Form, Field, ErrorMessage } from "formik";
import SeoConfig from '../components/SeoConfig';

const login = () => {


    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return (
        <div className="container movie-wrapper">
            <SeoConfig title="Login" />
            <div className="row">
                <h3>Login To Your Account</h3>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validate={values => {
                            let errors = {};
                            if (values.email === "") {
                                errors.email = "Email is required";
                            } else if (!emailTest.test(values.email)) {
                                errors.email = "Invalid email address format";
                            }
                            if (values.password === "") {
                                errors.password = "Password is required";
                            } else if (values.password.length < 3) {
                                errors.password = "Password must be 3 characters at minimum";
                            }
                            return errors;
                        }}
                        onSubmit={({ setSubmitting }) => {
                            alert("Form is validated! Submitting the form...");
                            setSubmitting(false);
                        }}
                    >
                        {({ touched, errors, isSubmitting, values }) => {
                            return (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            className={`form-control ${
                                                touched.email && errors.email ? "is-invalid" : ""
                                                }`}
                                            value={values.email}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="invalid-feedback"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                            className={`form-control ${
                                                touched.password && errors.password ? "is-invalid" : ""
                                                }`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="password"
                                            className="invalid-feedback"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Please wait..." : "Login"}
                                    </button>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default login;
