import React from 'react';

import Button from '../buttons';

import './ProjectForm.css';
class ProjectForm extends React.Component {

    
            constructor(props){
                super(props);
                this.state={
                    data: {
                        tyyppi:undefined,
                        alkupvm: undefined,
                        loppupvm: undefined,
                        kuvaus:undefined,
                        budjetti:undefined,
                        valmiusaste:undefined,
                        valmis:undefined
                    }
                }
                this.handleInputChange=this.handleInputChange.bind(this);
                this.handleSubmit=this.handleSubmit.bind(this);
            }

           handleInputChange (event) {
               const target = event.target;
               const value = target.type === 'checkbox' ? target.checked : target.value;
               const name = target.name;

                    this.setState ({
                        data: {
                        ...this.state.data,
                            [name]:value
                        }  
                     });
              
            };

            handleSubmit(event){
                event.preventDefault();
                console.log ("lähetetty")
            }

            render(){
                return(
        
                <form onSubmit={this.handleSubmit}>
                    
                        <div className="projectform">
                        <div> 
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label for="name" > Valitse tyyppi </label>
                        <select type="text" name = "tyyppi"  value={this.state.data.tyyppi} onChange={this.handleInputChange}>
                                <option value= "Uusi järjestelmä">Uusi järjestelmä</option>
                                <option value= "Järjestelmän jatkokehitys">Järjestelmän jatkokehitys</option>
                                <option value= "Prosessin kehitys">Prosessin kehitys</option>
                        </select>
                        </div>
                        </div>

                        <div className="projectform__row">
                        <div>
                        <label>Aloituspäivä <input  type="date" name="alkupvm" value={this.state.data.alkupvm} onChange={this.handleInputChange}/></label>
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label>Päättymispäivä <input type="date" name="loppupvm" value={this.state.data.loppupvm} onChange={this.handleInputChange} /></label>   
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label>Projektin nimi<input type="text" name="kuvaus" size="40" value={this.state.data.kuvaus} onChange={this.handleInputChange} /></label>   
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label for="name" > Budjetoitu </label>
                        <select name = "budjetti" value={this.state.data.budjetti} onChange={this.handleInputChange}>
                                <option value= ""></option>
                                <option value= "yes">Kyllä</option>
                                <option value= "no">Ei</option>
                        </select>
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label>Valmiusaste<input type="number" size="8" name="valmiusaste" value={this.state.data.valmiusaste} onChange={this.handleInputChange} /></label>   
                        </div>
                        </div>
                        <div>
                        <p><button name={Button} size="10">Tallenna</button></p>
                        </div>
                        </div>
                            
                        </form>
            );
            }        

 }

 export default ProjectForm;