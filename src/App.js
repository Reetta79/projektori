import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import firebase from './firebase';


import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Stats from './components/Stats/Stast.js';
import Projects from './components/Projects/Projects';
import AddProject from './components/AddProject/AddProject';
import EditProject from './components/EditProject/EditProject';
import DoneProjects from './components/DoneProject/DoneProject';
import DoneHalf from './components/DoneHalf/DoneHalf';
import DoneOverHalf from './components/DoneOverHalf/DoneOverHalf';


class App extends Component {

      constructor(props) {
        super(props);
        this.state ={
          data:[],
        }
        this.dbRef=firebase.firestore();
       this.handleFormSubmit= this.handleFormSubmit.bind(this);
       this.handleDeleteProject=this.handleDeleteProject.bind(this);
      
       this.handleList4=this.handleList4.bind(this);
       this.handleList2=this.handleList2.bind(this);
       this.handleList3=this.handleList3.bind(this);
      }

      /*lisätään db:n tiedon käsittelijä ja sanpshot tietojen näyttämiseksi. Järjetetään tiedot "lähtöruudulle"*/

      componentDidMount(){
        this.refData=this.dbRef.collection('data');
        this.refData.orderBy("loppupvm").onSnapshot((docs)=>{
          let data=[];
          docs.forEach((doc)=> {
            let docdata =doc.data();
            data.push(docdata);
          });
          this.setState({
            data:data
          });
        });
      }

          /*datan siirto tallennuksella/lisäyksellä*/
          handleFormSubmit(newdata) {
        
            this.refData.doc(newdata.id).set(newdata);
          }

         
          handleList4() {
            let data= this.state.data.slice();
            data.sort (function (a, b) {
              if(a.budjetti<b.budjetti)
              {return -1;}
              if (a.budjetti>b.budjetti) 
              {return 1;}   
              else {
               return 0; 
              }
            });
             this.setState({
              data: data
              
            });
            }

          /*projektin poistaminen*/
            
           handleDeleteProject(id){
           this.refData.doc(id).delete().then().catch(error => {console.error('Virhe poistettaessa projektia',+ error)});
          }


          
            
            handleList2() {
              let data= this.state.data.slice();
              data.sort (function (a, b) {
                if(a.kuvaus<b.kuvaus)
                {return -1;}
                if (a.kuvaus>b.kuvaus) 
                {return 1;}   
                else {
                 return 0; 
                }
              });
               this.setState({
                data: data
                
              });
              }

            
              handleList3() {
                let data= this.state.data.slice();
                data.sort (function (a, b) {
                  if(a.valmiusaste<b.valmiusaste)
                  {return -1;}
                  if (a.valmiusaste>b.valmiusaste) 
                  {return 1;}   
                  else {
                   return 0; 
                  }
                });
                this.setState({
                  data: data
                  
                });
                }

                
           
                
              
                
            render () {
              return(  
                  <Router>
                  <div className="App">
                  <Header  />
                  <div className="Nappi">
               
                  <Route path= "/" exact render= {() => <button onClick={this.handleList3} secondary={toString()}> Järjestä: valmiina 0% -100% </button>}/>
                  <Route path = "/" exact render = { () => <button onClick={this.handleList2} secondary={toString()}>Järjestä: Kuvauksen mukaan </button>}/>
                  <Route path = "/" exact render = { () => <button onClick={this.handleList4} secondary={toString()}>Järjestä: Projektit, joilla ei budjettia </button>}/>
            
                  </div>
                  <Route path= "/stats" render = {()=><Stats data={this.state.data} />} />
                  <Route path= "/" exact render = {()=><Projects data={this.state.data} />} />
                  <Route path ="/done" render= { () => <DoneHalf data={this.state.data} />} /> 
                  <Route path ="/done" render= { () => <DoneOverHalf data={this.state.data} />} /> 
                  <Route path= "/done" render = { (props) => <DoneProjects data={this.state.data}{...props} />} />
                  <Route path= "/add" render = { () => <AddProject onFormSubmit={this.handleFormSubmit} />} /> 
                  <Route path= "/edit/:id" render = {(props) => <EditProject data={this.state.data}  onFormSubmit={this.handleFormSubmit} onDeleteProject={this.handleDeleteProject}{...props} /> }/>
                  <Menu/>
                  </div>
                  </Router>
                   
                );
            }         
      
          }
        


export default App;