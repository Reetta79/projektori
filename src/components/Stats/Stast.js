import React from 'react';

import { Bar} from 'react-chartjs-2';

import Content from '../Content/Content';

import './Stats.css';

 function Stats(props) {

  const reducer = (groupedData,currentProject) => {
    const index = groupedData.findIndex (project => project.tyyppi === currentProject.tyyppi);
    if (index >= 0){
      groupedData[index].summa = groupedData[index].summa + currentProject.summa;
    }else{
      groupedData.push({tyyppi: currentProject.tyyppi, summa:currentProject.summa});
    }
    return groupedData;
  }

  let groupedData= props.data.reduce(reducer,[]);

  let barData ={
    labels: groupedData.map(project => project.tyyppi),
    
    datasets: 
        [
          {
         data:groupedData.map(project => project.summa),
         label:"",
         
         responsive: true,
         maintainAspectRatio:false,
         backgroundColor:[
          '#9AF376',
          '#76D8F3',
          '#DDCF78',
         ]
          }
        ]
      
      }


  
      
    
      
    return (
      <Content>
            
      <h2> Budjetointikooste </h2>
        <div className= 'stats__graph'>
         <Bar data={barData}/>
        </div>
      
      </Content>
    );
    }


  export default Stats; 