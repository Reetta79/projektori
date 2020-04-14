import React from 'react';



class Checkbox extends React.Component {

constructor (props){
    super(props)
    this.state ={
        choises: [
            {id:"1", value:"Uusi järjestelmä", isChecked:false},
            {id:"2", value:"Järjestelmän jatkokehitys", isChecked:false},
            {id:"3", value:"Prosessin kehitys", isChecked:false}
            
        ]
    }
}
render(){
    return(
        <div className= "Checkbox">

        </div>
    );

}

}

export default Checkbox;