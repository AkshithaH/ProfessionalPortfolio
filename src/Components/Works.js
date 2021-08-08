import React, { Component } from 'react';
class  Portfolio extends Component{
render(){
    if(this.props.data){
    var projects1 = this.props.data.projects1.map(function(projects1){
        return <div key={projects1.company}><h3>{projects1.company}</h3>
            {projects1.category}
        </div>
      })

      var projects2 = this.props.data.projects2.map(function(projects2){
        return <div key={projects2.company}><h3>{projects2.company}</h3>
            {projects2.category}
        </div>
      })
    }


return (
    <section id="portfolio">
    <div className="row work">
    <div className="three columns header-col">
    <h1><span>Work</span></h1>
 </div>
 <div className="nine columns main-col">
      {projects1}
    </div>
</div>
<div className="row work">

     <div className="three columns header-col">
        <h1><span>Work</span></h1>
     </div>

     <div className="nine columns main-col">
      {projects2}
    </div>
    </div>
    </section>
    );
   }
}

export default Portfolio;