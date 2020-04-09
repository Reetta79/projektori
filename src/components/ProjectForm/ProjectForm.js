import React from 'react';

import Button from '../buttons';
import { withRouter } from 'react-router';


import {v4 as uuidv4} from 'uuid';


import './ProjectForm.css';




class ProjectForm extends React.Component {

    
            constructor(props){
                super(props);
                const data =props.data ? props.data : 
                {tyyppi:"",
                alkupvm: "",
                loppupvm: "",
                kuvaus:"",
                budjetti:"",
                valmiusaste:""
                }
                this.state={
                    data:data 
                };

                this.handleInputChange=this.handleInputChange.bind(this);
                this.handleSubmit=this.handleSubmit.bind(this);
                this.handleCancel=this.handleCancel.bind(this);
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
              
            }

            handleSubmit(event){
                event.preventDefault();
                console.log ("lähetetty");
                let data= Object.assign({}, this.state.data);
                data.id=uuidv4();

                this.props.onFormSubmit(this.state.data);
                this.props.history.push("/");
            }

            handleCancel(event){
                event.preventDefault();
                this.props.history.goBack(); 
            }

            render(){
                return(
                   
        
                <form onSubmit={this.handleSubmit}>
                    
                        <div className="projectform">
                        <div> 
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="name" > Valitse tyyppi </label>
                        <select type="text" name = "tyyppi"  value={this.state.data.tyyppi} onChange={this.handleInputChange}>
                                <option value= "Uusi järjestelmä">Uusi järjestelmä</option>
                                <option value= "Järjestelmän jatkokehitys">Järjestelmän jatkokehitys</option>
                                <option value= "Prosessin kehitys">Prosessin kehitys</option>
                        </select>
                        </div>
                        </div>

                        <div className="projectform__row">
                        <div>
                        <label htmlFor="alkupvm">Aloituspäivä <input  type="date" name="alkupvm" value={this.state.data.alkupvm} onChange={this.handleInputChange}/></label>
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="loppupvm">Päättymispäivä (arvioitu) <input type="date" name="loppupvm" value={this.state.data.loppupvm} onChange={this.handleInputChange} /></label>   
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="kuvaus">Projektin nimi<input type="text" name="kuvaus" size="40" value={this.state.data.kuvaus} onChange={this.handleInputChange} /></label>   
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="budjetti" > Budjetoitu </label>
                        <select name = "budjetti" value={this.state.data.budjetti} onChange={this.handleInputChange}>
                                <option value= ""></option>
                                <option value= "Kyllä">Kyllä</option>
                                <option value= "Ei">Ei</option>
                        </select>
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="valmiusaste" >Valmiusaste<input type="number" size="8" name="valmiusaste" value={this.state.data.valmiusaste} onChange={this.handleInputChange} /></label>   
                        </div>
                        </div>
                        <div>
                        <p><Button type= "submit" primary>Tallenna</Button></p>
                        </div>
                        <div>
                        <p><Button onClick={this.handleCancel} secondary>Peruuta</Button></p>
                        </div>
                        </div>                            
                        </form>
            );
            }        

 }

 export default withRouter (ProjectForm);