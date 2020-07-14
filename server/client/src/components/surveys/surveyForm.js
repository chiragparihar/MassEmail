//surveyform shows a form for a user ot add input
import React,{Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import surveyField from './surveyField';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';
class surveyForm extends Component{
    //function to render fields for the form
    renderFields(){
    
            return _.map(FIELDS, ({label, name}) =>{
                return <Field key={name} component={surveyField} type='text' label={label} name={name}/>
            });
          
        

    }
    render(){
        return(
            <div>
                <form onSubmit = { this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to='/surveys' className = "red btn-flat white-text">
                        Cancel
                    </Link>
                
                <button type="submit" className = "teal btn-flat right white-text"> 
                    Next
                    <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        );
    }
}
function validate(values){
    const errors={};
    errors.recipients = validateEmails(values.recipients || '');
    _.each(FIELDS,({name}) =>{
        if(!values[name]){
            errors[name] = 'You must provide a value'
        }
    })
    return errors;
}
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(surveyForm);