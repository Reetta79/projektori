import React from 'react';
import testdata from '../../testdata';


class ProjectsDone2 extends React.Component {

  readyProject(id){}

    

    render (){

        let filteredProjects=testdata.filter( project => project.valmiusaste === "Valmis");
        
        return(
            <>
            <div>
             <div   className="header" >
                <h2> Valmiit </h2>
             </div>  
             <div   className="content" >
                <p> Valmiit </p>
             </div>   
            </div>



            </>



        );
    }
}

export default ProjectsDone2;