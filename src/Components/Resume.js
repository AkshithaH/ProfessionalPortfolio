import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })

      var project1 = this.props.data.project1.map(function(project1){
        return <div>
        <p className="info">{project1.ProjectName} <span>&bull;</span><em className="date">{project1.YearCompletion}</em></p>
        <p>{project1.description}</p></div>
      })
      var project2 = this.props.data.project2.map(function(project2){
        return <div>
        <p className="info">{project2.ProjectName} <span>&bull;</span><em className="date">{project2.YearCompletion}</em></p>
        <p>{project2.description}</p></div>
      })
    
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Project 1</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {project1}
               </div>
            </div>
         </div>
      </div>
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Project 2</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {project2}
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Resume;
