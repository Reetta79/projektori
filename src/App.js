import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import testdata from '../src/testdata';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Projectstats from './components/Stats/Stast.js';
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
          data: testdata
        }
       this.handleFormSubmit= this.handleFormSubmit.bind(this);
       this.handleDeleteProject=this.handleDeleteProject.bind(this);
       this.handleList=this.handleList.bind(this);
       this.handleList2=this.handleList2.bind(this);
       this.handleList3=this.handleList3.bind(this);
      }
          /*projektien lisäys lomakkeella ja id:n tarkistus*/
          handleFormSubmit(newdata) {
            

            let storeddata = this.state.data.slice();
            const index = storeddata.findIndex (project => project.id === newdata.id);
            if (index >= 0) {
              storeddata[index] = newdata;
            } else {
            storeddata.push(newdata); /*projektien lajittelu asetetun päättymispäivän mukaan niin, että vanhimmat päivämäärät ensin*/
            }
            storeddata.sort((a,b) => {
            const aDate= new Date(a.loppupvm);
            const bDate= new Date(b.loppupvm);
            return bDate.getTime() - aDate.getTime();
            }); 

            this.setState({
              data: storeddata
              
            });
          }

          /*projektin poistaminen*/
            
           handleDeleteProject(id){
            let storeddata = this.state.data.slice();
            storeddata=storeddata.filter(project => project.id !== id);
            this.setState({
              data: storeddata
              
            });
          }

            

            handleList() {
            let data= this.state.data.Checkbox();
            data.sort (function (Checkbox) {
              if(Checkbox.checked === true)
              {return -1;}
              if (Checkbox.checked === false) 
              {return 1;}   
              else {
               return 0; 
              }
            });
            this.setState({
              data: data
              
            });
            }
            
            
            handleList2() {
              let data= this.state.data.slice();
              data.sort (function (a, b) {
                if(a.kuvaus>b.kuvaus)
                {return -1;}
                if (a.kuvaus<b.kuvaus) 
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
                  <Route path= "/" exact render= {() => <button onClick={this.handleList} secondary> Järjestä: valmiit ensin </button>} />
                  <Route path= "/" exact render= {() => <button onClick={this.handleList3} secondary> Järjestä: valmiina 0% -100% </button>}/>
                  <Route path = "/" exact render = { () => <button onClick={this.handleList2} secondary>Järjestä: Kuvauksen mukaan </button>}/>
                  </div>
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