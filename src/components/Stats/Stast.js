import React from 'react';

import {Bar} from 'react-chartjs-2';

import Content from '../Content/Content';


import './Stats.css';


 function Stats(props) {

  /*koostetaan budjetin määrä projektityypeittän*/

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
  
  console.log(groupedData);


  let barData ={
    labels: groupedData.map(project => project.tyyppi),
    
    datasets: 
   
        [
          {
            type:'bar',
         data:groupedData.map(project => project.summa),
         label:" ",
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



        /* filteröidään pois valmiit*/
      const x = props.data.filter(project => project.valmiusaste <= "90");

    
      /*valmiusasteen erottaminen per objekti, peruutettu alkuperäiseen koodiin. Ei hyötyä kappalemäärän kanssa, kun tarvitaan tietoa yksittäisestä projektista. 
      katsotaan käyttöä uudelleen, kun määritelty väline porjektin laajuudeen tarkasteluun. Dataa pitänee myös jakaa pienempiin osiin.

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
        
        console.log(asteet); testataan, että tuo oikean kentän*/
        
        
       
        /*tulostetaan keskeneräisten määrä, lisätään arvot x- ja y-akseleille ja katkaistaan kuvauskentän teksti*/

       let kesken= x.length;

        let barData2 = {
          
          labels: x.map(project=> project.loppupvm + (' ,') + project.kuvaus.slice(0,10)),
          datasets: [{
              label:"Yhteensä keskeneräisiä " +kesken,
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
                 type: "time",
                  time:{
                  displayFormats:{
                  day:'D.M.Y'        
                } 
            }
            }]
          }
        } 
            
      
          
       
          
        
        
         /* let options3 = {
            responsive: true,
            maintainAspectRatio: false,
            scales:{*/
         
       
            return (
              <Content>
                    
              <h2> Budjetointikooste </h2>
                <div className= 'stats__graph'>
                <Bar data={barData} options={options}/>
                </div>

                <h2> Päätymispäivä, valmiina %</h2>
                <div className= 'stats__graph'>
                <Bar data={barData2} options2={options2} />
                </div>     
              </Content>
            );
    }


  export default Stats; 