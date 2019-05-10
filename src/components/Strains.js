import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import StrainItem from './StrainItem'
import ModalNewStrain from './ModalNewStrain'

class Strains extends Component {
  constructor(props){
    super(props)
    this.state = {
      strains: [],
      plasmids: [],
      open: false
    }
  }
  dataLoad = (data) => {
    var strains = this.state.strains
    strains.push(data)
    this.setState({
      strains
    })
  }
  addPlasmid = () => {
    this.setState({
      open: true
    })
  }
  closeModal = () => {
    this.setState({
      open: false
    })
  }
  render(){
      return(
        <div>
          <ModalNewStrain dataLoad={this.dataLoad} plasmids={this.props.plasmids}/>
          <Grid container spacing={12}>
            <Grid item sm={12} style={{
              marginTop: 12
            }}>
            {this.state.strains.map(data => {
              return (
                <StrainItem strain={data}/>
              );
            })}
            </Grid>
          </Grid>
        </div>
      )

  }
}
export default Strains
