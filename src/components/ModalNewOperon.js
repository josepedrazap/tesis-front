import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TranscriptionFactors from './TranscriptionFactors'
import { Input } from 'antd';
import Select from '@material-ui/core/Select';

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      name: "",
      time: "",
      to_on: "",
      to_off: "",
      time: "",
      tf: [],
      ex: [],
      gate: ""
    }
  }
  handleInput = (e) => {
    const { value, name} = e.target;
    this.setState({
      [name] : value
    })
  }
  handleChange = name => event => {
    this.setState({ gate: event.target.value });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleDataLoad = () => {
    var data = {
      name: this.state.name,
      time: this.state.time,
      to_on: this.state.to_on,
      to_off: this.state.to_off,
      time: this.state.time,
      tf: this.state.tf,
      ex: this.state.ex,
      gate: this.state.gate
    }
    this.props.dataLoad(data)
    this.setState({ open: false });

  }
  dataTFLoad = (data) => {
    this.setState({
      tf: data
    })
  }
  dataExLoad = (data) => {
    this.setState({
      ex: data
    })
  }
  render() {

    const { classes } = this.props;
      return(
        <div>
          <Button variant="contained" color="primary" onClick={this.handleOpen}>
            New Operon
          </Button>
          <hr></hr>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
            <Grid container spacing={24} style={{
              margin: 12
            }}>
              <h2>Create operon</h2>
            </Grid>
            <Grid container spacing={24}>
              <Grid item sm={3}>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput}
                  placeholder="Operon name"
                />
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item sm={9} style={{
                marginTop: 20
              }}>
              Promoter
              </Grid>
              <Grid item sm={3} style={{
                marginTop: 20
              }}>
              Gate
              </Grid>
              <Grid item sm={3} lg={3}>
                  <Input
                    type="number"
                    label="To on"
                    name="to_on"
                    value={this.state.to_on}
                    onChange={this.handleInput}
                    placeholder="To on"
                  />
                </Grid>
                <Grid item sm={3} lg={3}>
                  <Input
                    type="number"
                    label="To off"
                    name="to_off"
                    value={this.state.to_off}
                    onChange={this.handleInput}
                    placeholder="To off"
                  />
                </Grid>
                <Grid item sm={3} lg={3}>
                  <Input
                    type="number"
                    label="Time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleInput}
                    placeholder="Time"
                  />
                </Grid>
                <Grid item sm={3} lg={3}>
                  <Select
                    value={this.state.gate}
                    onChange={this.handleChange()}
                    name="gate"
                  >
                    <option value="NOT">NOT</option>
                    <option value="OR">OR</option>
                    <option value="AND">AND</option>
                  </Select>
                </Grid>

                <Grid item sm={12} style={{
                  marginTop: 20
                }}>
                Transcription factors
                </Grid>
                <Grid item sm={12} lg={12}>
                  <TranscriptionFactors dataTFLoad={this.dataTFLoad}/>
                </Grid>
                <Grid item sm={12} style={{
                  marginTop: 20
                }}>
                Expressions
                </Grid>
                <Grid item sm={12} lg={12}>
                  <TranscriptionFactors dataTFLoad={this.dataExLoad}/>
                </Grid>
            </Grid>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{paddingTop: '5%'}} >
              <Button variant="contained" color="primary" onClick={this.handleDataLoad}>
                Add operon
              </Button>
            </Grid>

            </div>
          </Modal>
        </div>
      )
    }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
