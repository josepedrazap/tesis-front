import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import OperonItem from './OperonItem'
import ModalNewOperon from './ModalNewOperon'

class Operons extends Component {
  constructor(props){
    super(props)
    this.state = {
      operons: [],
      open: false
    }
  }
  dataLoad = (data) => {
    var operons = this.state.operons
    operons.push(data)
    this.setState({
      operons: operons
    })
    this.props.setOperons(this.state.operons)
  }
  addOperon = () => {
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
          <ModalNewOperon dataLoad={this.dataLoad}/>
          <Grid container spacing={12}>
            <Grid item sm={12} style={{
              marginTop: 12
            }}>
            {this.state.operons.map(data => {
              return (
                <OperonItem operon={data}/>
              );
            })}
            </Grid>
          </Grid>
        </div>
      )

  }
}
export default Operons
