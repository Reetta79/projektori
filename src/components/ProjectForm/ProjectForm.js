import React from 'react';

import Button from '../buttons';
import { withRouter } from 'react-router';


import { v4 as uuidv4 } from 'uuid';


import './ProjectForm.css';




class ProjectForm extends React.Component {

    
            constructor(props){
                super(props);
                const data =props.data ? props.data : 
                {    
                id:"",
                tyyppi:"",
                alkupvm: "",
                loppupvm: "",
                kuvaus:"",
                budjetti:"",
                valmiusaste:""
                }
                this.state={
                    data:data,
                };

                this.handleInputChange=this.handleInputChange.bind(this);
                this.handleSubmit=this.handleSubmit.bind(this);
                this.handleCancel=this.handleCancel.bind(this);
                /*this.onClick=this.onClick.bind(this);*/
               
            }

            /*muutettujen tietojen käsittely*/

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

            /*lomaketietojen lähetys*/

            handleSubmit(event){
                event.preventDefault();
                let data= Object.assign({}, this.state.data);
                data.id= data.id ? data.id : uuidv4();
                this.props.onFormSubmit(data);
                this.props.history.push("/");
            
            }
         
            
        
               
                /*peruuta nappi palauttaa etusivulle*/
            handleCancel(event){
                event.preventDefault();
                this.props.history.goBack(); 
            }


          /*tulostus*/


            render(){
                return(
                   
        
                <form onSubmit={this.handleSubmit} key={this.state.data.id}>
                    
                        <div className="projectform" >
                        <div> 
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="name" > Valitse tyyppi <br></br><div className="info__user"> Jokainen projekti ja kehitystehtävä kirjataan omana projektina. Älä siis sisällytä toiseen projektiin liittyvää tehtävää toiseen.</div> </label>
                        
                        <select type="text" name = "tyyppi"  value={this.state.data.tyyppi} onChange={this.handleInputChange}>
                                <option value=""></option>
                                <option value= "Uusi järjestelmä">Uusi järjestelmä</option>
                                <option value= "Järjestelmän jatkokehitys">Järjestelmän jatkokehitys</option>
                                <option value= "Prosessin kehitys">Prosessin kehitys</option>
                        </select>
                        </div>
                        </div>

                        <div className="projectform__row">
                        <div>
                        <label htmlFor="alkupvm">Aloituspäivä <br></br> <div className="info__user">Jos projekti tai tehtävä on jo aloitettu, valitse alkuperäinen aloituspäivämäärä.</div><input  type="date" name="alkupvm" value={this.state.data.alkupvm} onChange={this.handleInputChange}/></label>
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="loppupvm">Päättymispäivä (arvioitu) <br></br><div className="info__user">Valitse arvioitu päättymispäivä, jos sitä ei ole määritelty.</div> <input type="date" name="loppupvm" value={this.state.data.loppupvm} onChange={this.handleInputChange} /></label>   
                        
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="kuvaus">Projektin lisätiedot  <br></br> <div className="info__user">Jos projekti liitty johonkin järjestelmään, kirjaa järjestelmän nimi ensimmäiseksi.</div><input type="text" name="kuvaus" size="40" value={this.state.data.kuvaus} onChange={this.handleInputChange} /></label>   
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="budjetti" >  Budjetoitu  <br></br><div className="info__user">Valitse "Kyllä" vain siinä tapauksessa, jos budjetti on jo hyväksytty.</div></label>
                        <select name = "budjetti" value={this.state.data.budjetti} onChange={this.handleInputChange}>
                                <option value= ""></option>
                                <option value= "Kyllä">Kyllä</option>
                                <option value= "Ei">Ei</option>
                        </select>
                        </div>
                        </div>
                        <div className="projectform__row">
                        <div>
                        <label htmlFor="name" > Valmiusaste  <br></br> <div className="info__user">Kokonaisvalmiusaste prosentteina.</div> </label>
                        <select type= "text" name = "valmiusaste"  value={this.state.data.valmiusaste} onChange={this.handleInputChange} >
                                <option value= ""></option>
                                <option value= "10" >10</option>
                                <option value= "20">20</option>
                                <option value= "30">30</option>
                                <option value= "40">40</option>
                                <option value= "50">50</option>
                                <option value= "60">60</option>
                                <option value= "70">70</option>
                                <option value= "80">80</option>
                                <option value= "90">90</option>
                                <option value= "Valmis">Valmis</option>
                        </select>
                        </div>
                        </div>
                        <div>
                        <Button type= "submit" primary>{this.state.data.id ? "Tallenna" : "Lisää"} </Button>
                        </div>
                        <div>
                        <Button onClick={this.handleCancel} secondary>Peruuta</Button>
                        </div>
                        </div>                            
                        </form>
            );
            }        

 }

 export default withRouter (ProjectForm);