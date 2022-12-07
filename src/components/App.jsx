import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";


export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleIncrement = (option)=> {
  this.setState((prevState)=>({[option]: prevState[option]}))
  }

  render(){
    const options = Object.keys(this.state)
    return (
      <>
      <Section 
      title= "Please leave feedback">
      <FeedbackOptions 
      options={options} 
      onLeaveFeedback={this.handleIncrement}/>
      </Section>
      </>
    );
  }
 
};
