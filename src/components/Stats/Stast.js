import React from 'react';

import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

import Content from '../Content/Content';
import moment from 'moment';

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
            type:'bar',
         data:groupedData.map(project => project.summa),
         label:"",
         responsive:true,
         maintainAspectRatio:false,
         backgroundColor:[
          '#9AF376',
          '#76D8F3',
          '#DDCF78',
        ]}]
      }

        let options={
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }


        const x = props.data.filter(project => project.valmiusaste <= "90");

        const groupBy=(objectArray, valmiusaste) => {
          return objectArray.reduce (function(total,project){
            let key =project[valmiusaste];
            if(!total[key]) {
              total[key]=[];
            }
            total[key].push(project);
            return total;
          },{});
          
        }
        let asteet= groupBy(x,'valmiusaste'[""]);
        
        console.log(asteet);
      
        
       let kesken= x.length;

        let barData2 = {
          
          labels: x.map(project=> project.loppupvm) ,
          datasets: [{
              label:"Keskeneräiset " + kesken,
              type:'bar',
              data:x.map(project=> project.valmiusaste),
              responsive:true,
              maintainAspectRatio:false,
              backgroundColor:[
                '#9AF376',
                '#76D8F3',
                '#DDCF78',
                '#7FFFD4',
                '#5F9EA0',
                '#00BFFF',
                '#00008B',
                '#ADD8E6'

              ]
          }]
        }
      

        
        let options2={
          responsive: true,
          maintainAspectRatio:false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes:[{
              ticks: {
             type: "time",
             time:("D.M.Y"),
              }
            }]
          }
            
        }
       
            return (
              <Content>
                    
              <h2> Budjetointikooste </h2>
                <div className= 'stats__graph'>
                <Bar data={barData} options={options}/>
                </div>

                <h2> Päättyy/valmiina </h2>
                <div className= 'stats__graph'>
                <Bar data={barData2} options2={options2}/>
                </div>
              
              </Content>
            );
    }


  export default Stats; 