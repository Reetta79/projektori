import React from 'react';

import { Doughnut } from 'react-chartjs-2';

import Content from '../Content/Content';

import './Stats.css';

 function Stats(props) {

  const reducer = (groupedData,currentProject) => {
    const index = groupedData.findIndex (project => project.tyyppi === currentProject.tyyppi);
    if (index >= 0){
      groupedData[index].loppupvm = groupedData[index].summa + currentProject.summa;
    }else{
      groupedData.push({tyyppi: currentProject.tyyppi, summa:currentProject.summa});
    }
    return groupedData;
  }

  let groupedData= props.data.reduce(reducer,[]);

  let doughnutData ={
    labels: groupedData.map(project => project.tyyppi),
    datasets: 
        [
          {
         data:groupedData.map(project => project.summa)
          }
        ]
      
  }



    return (
      <Content>
            
      <h2> Tilastot </h2>
        <div className= 'stats__graph'>
         <Doughnut data={doughnutData}/>
        </div>
        
        
      </Content>
    );
    }


  export default Stats; 