import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Projectstats from './components/Stats/Stast.js';
import AllProjects from './components/AllProjects/AllProjects';
import Projects from './components/Projects/Projects';
import ProjectDone from './components/ProjectDone/ProjectDone';
import AddProject from './components/AddProject/AddProject';
import EditProject from './components/EditProject/EditProject';
import Search from './components/Search/Search';


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
      
          
        
     
      

            render () {
              return(  
                  <Router>
                  <div className="App">
                  <Header />
                  <Route path= "/" exact render = {()=><Projects data={this.state.data}/>} />
                  <Route path="/" exact render = {() => <Search data={this.state.data} />} />
                  <Route path ="/stats" render= { () => <Projectstats/>} /> 
                  <Route path= "/done" render = { () => <ProjectDone data={this.state.data} selectList= {this.state.selectList}/>} />
                  <Route path= "/add" render = { () => <AddProject onFormSubmit={this.handleFormSubmit} selectList= {this.state.selectList} />} /> 
                  <Route path= "/edit/:id" render = {(props) => <EditProject data={this.state.data} selectList= {this.state.selectList} {...props} /> }/>
                  <Menu/>
                  </div>
                  </Router>
                   
                );
            }         
      
          }
        


export default App;