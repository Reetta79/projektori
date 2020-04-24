import React from 'react';

import {Bar} from 'react-chartjs-2';

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

        
      
        const reducer2 = function (groupedData2,currentProject) {
          let index2 = groupedData2.findIndex (project => project.id=== currentProject.id);
        
          if (index2<0){
           currentProject.count=1;
            groupedData2.push({valmiusaste: currentProject.valmiusaste});
          }else{
            groupedData2.valmiusaste.count = groupedData2.valmiusaste.count +1;
            groupedData2.push({valmiusaste: groupedData2});
          }
          return groupedData2;
          
        }
      
       

        let groupedData2= props.data.reduce(reducer2,[]);
        console.log(groupedData2);
        let amount= groupedData2.length;

        let barData2 ={
          labels: groupedData2.map (project=> project.valmiusaste),
          
          datasets: 
         
              [
                {
                  type:'bar',
               data:"",
               label:"Kaikki " + amount,
               responsive:true,
               maintainAspectRatio:false,
               backgroundColor:[
                '#9AF376',
                '#76D8F3',
                '#DDCF78',
              ]}]
            }
      
              let options2={
                responsive: true,
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }

        

       /* let zero = props.data.filter (project => project.valmiusaste < "10").length;
        let ten = props.data.filter (project => project.valmiusaste === "10").lenght;
        let twe = props.data.filter (project => project.valmiusaste === "20").length;
       /* let twe = props.data.filter (project => project.valmiusaste === "20").length;
        let twe = props.data.filter (project => project.valmiusaste === "20").length;  
        let twe = props.data.filter (project => project.valmiusaste === "20");  
        let twe = props.data.filter (project => project.valmiusaste === "20");
        let twe = props.data.filter (project => project.valmiusaste === "20");
        let twe = props.data.filter (project => project.valmiusaste === "20");
        let twe = props.data.filter (project => project.valmiusaste === "20");
        let twe = props.data.filter (project => project.valmiusaste === "20");*/
    return (
      <Content>
            
      <h2> Budjetointikooste </h2>
        <div className= 'stats__graph'>
         <Bar data={barData} options={options}/>
        </div>

        <div className= 'stats__graph'>
         <Bar data={barData2} options={options2}/>
        </div>
      
      </Content>
    );
    }


  export default Stats; 