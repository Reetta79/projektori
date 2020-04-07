import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Projectstats from './components/Stats/Stast.js';
import AllProjects from './components/AllProjects/AllProjects';
import Projects from './components/Projects/Projects';
import ProjectDone from './ProjectDone/ProjectDone';
import AddProject from './components/AddProject/AddProject';
import EditProject from './components/EditProject/EditProject';


class App extends Component {

      constructor(props) {
        super(props);
        this.state ={
          data: AllProjects
        }
       this.handleFormSubmit= this.handleFormSubmit.bind(this);
      }

          handleFormSubmit(newdata) {

            let storeddata = this.state.data.slice();
            storeddata.push(newdata);
            storeddata.sort((a,b) => {
            const aDate= new Date(a.loppupvm);
            const bDate= new Date(b.loppupvm);
            return aDate.getTime-bDate.getTime();
            });

          

            this.setState({
              data: storeddata
              
            });
           

          }

            render () {
              return(  
                  <Router>
                  <div className="App">
                  <Header />
                  <Route path= "/" exact render = {()=><Projects data={this.state.data}/>} />
                  <Route path ="/stats" render= { () => <Projectstats data = {this.props.Checkbox}/>} /> 
                  <Route path= "/done" render = { () => <ProjectDone/>} />
                  <Route path= "/add" render = { () => <AddProject onFormSubmit={this.handleFormSubmit}/> } />
                  <Route path= "/edit" render = { () => <EditProject/>} />
                  <Menu/>
                  </div>
                  </Router>
                   
                );
            }         
      
          }
        


export default App;