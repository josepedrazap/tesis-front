import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlasmidItem from './PlasmidItem'
import ModalNewPlasmid from './ModalNewPlasmid'

class Plasmids extends Component {
  constructor(props){
    super(props)
    this.state = {
      plasmids: [],
      open: false,
    }
  }
  dataLoad = (data) => {
    var plasmids = this.state.plasmids
    plasmids.push(data)
    this.setState({
      plasmids
    })
    this.props.setPlasmids(this.state.plasmids)
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
          <ModalNewPlasmid dataLoad={this.dataLoad} operons={this.props.operons}/>
          <Grid container spacing={12}>
            <Grid item sm={12} style={{
              marginTop: 12
            }}>
            {this.state.plasmids.map(data => {
              return (
                <PlasmidItem plasmid={data}/>
              );
            })}
            </Grid>
          </Grid>
        </div>
      )

  }
}
export default Plasmids
