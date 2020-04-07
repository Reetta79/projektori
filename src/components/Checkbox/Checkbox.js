import React from 'react';


class Checkbox extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
       choises: [
        {id: 1, value: "Uusi järjestelmä", isChecked: false},
        {id: 2, value: "Järjestelmän jatkokehitys", isChecked: false},
        {id: 3, value: "Prosessin kehitys", isChecked: false},
      ]
    }
  }

  handleCheckChieldElement = (event) => {
    let choises = this.state.choises
    choises.forEach(choise => {
      if (choise.value === event.target.value)
        choise.isChecked =  event.target.checked
      })
    this.setState({choises: choises})
 }
  
  render() {
    return (
      <div className="Checkbox">
         
        <ul>
        {
          this.state.choises.map((choise) => {
            return (<checkBox handleCheckChieldElement={this.handleCheckChieldElement}  {...choise} />)
          })
        }
        </ul>
      </div>
    );
  }
}

export default Checkbox;