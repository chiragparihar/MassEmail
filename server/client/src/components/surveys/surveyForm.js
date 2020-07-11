//surveyform shows a form for a user ot add input
import React,{Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import surveyField from './surveyField';


class surveyForm extends Component{
    //function to render fields for the form
    renderFields(){
        return(
            <div>
                <Field type='text' name='title' component={surveyField}/>
            </div>
        )

    }
    render(){
        return(
            <div>
                <form onSubmit = { this.props.handleSubmit(values=>console.log(values))}>
                    {this.renderFields()}
                
                <button type="submit"> Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(surveyForm);