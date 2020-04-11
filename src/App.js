import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import testdata from '../src/testdata';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Projectstats from './components/Stats/Stast.js';
import Projects from './components/Projects/Projects';
import ProjectDone from './components/ProjectDone/ProjectDone';
import AddProject from './components/AddProject/AddProject';
import EditProject from './components/EditProject/EditProject';




class App extends Component {

      constructor(props) {
        super(props);
        this.state ={
          data: testdata,
          selectList: ["","10","20","30","40","50","60","70","80","90","Valmis"],
          done:[]
        }
       this.handleFormSubmit= this.handleFormSubmit.bind(this);
      }

          handleFormSubmit(newdata) {

            let storeddata = this.state.data.slice();
            const index = storeddata.findIndex (project => project.id === newdata.id);
            if (index >= 0) {
              storeddata[index] = newdata;
            } else {
            storeddata.push(newdata);
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

            handleSelectListForm(newproject) {
              let selectList = this.state.selectList.slice();
              selectList.push(newproject)
              selectList.sort();
              this.setState({
                selectList:selectList
              });
            }
             
            project
                
            render () {
              return(  
                  <Router>
                  <div className="App">
                  <Header />
                  <Route path= "/" exact render = {()=><Projects data={this.state.data} doneProject={this.state.doneProject}/>} />
                  <Route path ="/stats" render= { () => <Projectstats/>} /> 
                  <Route path= "/done" render = { (props) => <ProjectDone data={this.state.data} selectList= {this.state.selectList} project={this.state.project} {...props}/>} />
                  <Route path= "/add" render = { () => <AddProject onFormSubmit={this.handleFormSubmit} selectList= {this.state.selectList} doneProject={this.doneProject}/>} /> 
                  <Route path= "/edit/:id" render = {(props) => <EditProject data={this.state.data} selectList= {this.state.selectList} onFormSubmit={this.handleFormSubmit} doneProject={this.doneProject} {...props} /> }/>
                  <Menu/>
                  </div>
                  </Router>
                   
                );
            }         
      
          }
        


export default App;