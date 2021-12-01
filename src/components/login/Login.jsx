import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { requiredField } from '../../utils/validations/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';

import style from "../common/FormsControls/FormsControls.module.css"





function LoginForm(props) {
    return (
                 
            <form onSubmit={props.handleSubmit} action="">
                <div>
                    <Field component={Input} placeholder={"Login"} name={"email"} validate={[requiredField]}/>
                </div>

                <div>
                    <Field component={Input} type="password" placeholder={"password"} name={"password"} validate={[requiredField]}/>
                </div>

                <div>
                    <Field component={Input} type="checkbox" name={"rememberMe"} validate={[requiredField]}/> remember me
                </div>
               {props.error&&<div className={style.formControlSummaryErrors}>
                    {props.error}
                </div>

    }
                
                <div>
                    <button>login   </button>
                </div>
            </form>
            
    )
}

let LoginReduxForm = reduxForm({form:"login"})(LoginForm)



function Login(props) {
    const onSubmit=(dataForm)=>{
        props.login(dataForm.email, dataForm.password, dataForm.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
             <h1>login</h1>
             <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state)=>({
    isAuth:state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login) 