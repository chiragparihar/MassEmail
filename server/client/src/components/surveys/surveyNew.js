//surveynew shows survey review and survery form
import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import SurveyForm from "./surveyForm";
import SurveyFormReview from "./surveyFormReview";

class surveyNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return (
        <SurveyFormReview
          onCancle={() => this.setState({ showReview: false })}
        />
      );
    }
    return (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: 'surveyForm'})(surveyNew);
