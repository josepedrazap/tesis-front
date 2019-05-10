import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import OperonesChips from './OperonesChips'
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
      op: [],
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
      op: this.state.op
    }
    this.props.dataLoad(data)
    this.setState({ open: false });

  }
  dataOpLoad = (data) => {
    this.setState({
      op: data
    })
  }
  render() {

    const { classes } = this.props;
      return(
        <div>
          <Button variant="contained" color="primary" onClick={this.handleOpen}>
            New Plasmid
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
              <h2>Creat Plasmid</h2>
            </Grid>
            <Grid container spacing={24}>
              <Grid item sm={12}>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput}
                  placeholder="Pasmid name"
                />
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item sm={12} style={{
                marginTop: 20
              }}>
              Operons
              </Grid>
              <Grid item sm={12} lg={12}>
                <OperonesChips operons={this.props.operons} dataTFLoad={this.dataOpLoad}/>
              </Grid>
            </Grid>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{paddingTop: '5%'}} >
              <Button variant="contained" color="primary" onClick={this.handleDataLoad}>
                Add plasmid
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
