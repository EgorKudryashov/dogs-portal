import React, { useState, useContext } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import * as Yup from 'yup';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import './Registration.css'
import { AuthContext } from "../../../helpers/authContext";


function Registration(){
    const { setAuthState } = useContext(AuthContext);
    let history = useHistory()
    const initialValues = {
        username: "",
        info: "",
        login: "",
        password: ""
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3, 'Минимум 3 символа!').max(15, 'Максимум 15 символов!').required('Обязательное поле'),
        info: Yup.string().min(15, 'Минимум 15 символов!').required('Обязательное поле'),
        login: Yup.string().min(5, 'Минимум 5 символов!').max(15, 'Максимум 15 символов!').required('Обязательное поле'),
        password: Yup.string().min(7, 'Минимум 7 символов!').max(11, 'Максимум 11 символов!').required('Обязательное поле')
    });
    const onSubmit = (data) => {
        axios.post("http://localhost:4000/join/registration", data).then((response)=>{
            if (response.data.error){
                alert(response.data.error);
            }else{
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({
                    id: response.data.id,
                    role: response.data.role,
                    statusOfAuth: true
                })
                alert(response.data.message)
                history.push('/');
            }

        })
    };

    return (
        <div>
            <Formik initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}>
                <Form className='login'>
                    <label>Ваше имя</label>

                    <Field
                        name="username"
                        id="createUser"
                        placeholder="Введите свое имя..."
                        autocomplete="off"
                    />
                    <ErrorMessage name = "username" component="span"/>

                    <label>Информация о вас</label>
                    <Field
                        name="info"
                        id="createUserInfo"
                        placeholder="Расскажите нам о себе..."
                        autocomplete="off"
                    />
                    <ErrorMessage name = "info" component="span"/>
                    <label>Ваш логин</label>

                    <Field
                        name="login"
                        id="createUser"
                        placeholder="Придумайте логин..."
                        autocomplete="off"
                    />
                    <ErrorMessage name = "login" component="span"/>

                    <label>Ваш пароль</label>
                    <Field
                        name="password"
                        id="createUser"
                        placeholder="Придумайте пароль..."
                        autocomplete="off"
                    />
                    <ErrorMessage name = "password" component="span"/>

                    <button type="submit"> Зарегистрироваться </button>
                </Form>

            </Formik>
        </div>
    )
}


export default Registration;