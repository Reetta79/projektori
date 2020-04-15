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
import ProjectDone from './components/ProjectDone/ProjectDone';






class App extends Component {

      constructor(props) {
        super(props);
        this.state ={
          data: testdata
         /* choises:    [{id:"1", value:"Uusi järjestelmä", isChecked:false},
                      {id:"2", value:"Järjestelmän jatkokehitys", isChecked:false},
                      {id:"3", value:"Prosessin kehitys", isChecked:false} checkbox-valinnat kesken*/
        }
       this.handleFormSubmit= this.handleFormSubmit.bind(this);
       /*this.onClick=this.onClick.bind(this);*/
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
            
           /* onClick(projectId){
            
              if (this.state.done.valmiusaste === "Valmis") {
              done.push(done);
            }
            this.setState({
              data : done
            }
            );
          }
          */

              
         
            
          

            handleList() {
            let data= this.state.data.slice();
            data.sort (function (a, b) {
              if(a.valmiusaste>b.valmiusaste)
              {return -1;}
              if (a.valmiusaste<b.valmiusaste) 
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
                if(a.tyyppi>b.tyyppi)
                {return -1;}
                if (a.tyyppi<b.tyyppi) 
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
                  <Route path = "/" exact render = { () => <button onClick={this.handleList2} secondary>Järjestä: Uudet järjestelmät ensin</button>}/>
                  </div>
                  <Route path= "/" exact render = {()=><Projects data={this.state.data} />} />
                  <Route path ="/stats" render= { () => <Projectstats/>} /> 
                  <Route path= "/done" render = { () => <ProjectDone data={this.state.data} onClick={this.onClick} />} />
                  <Route path= "/add" render = { () => <AddProject onFormSubmit={this.handleFormSubmit}  onClick={this.onClick}/>} /> 
                  <Route path= "/edit/:id" render = {(props) => <EditProject data={this.state.data}  onFormSubmit={this.handleFormSubmit} onClick={this.onClick} {...props} /> }/>
                  <Menu/>
                  </div>
                  </Router>
                   
                );
            }         
      
          }
        


export default App;