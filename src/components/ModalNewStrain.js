import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import PlasmidsChips from './PlasmidsChips'
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
      width: "",
      default_growth_rate: "",
      division_length_x: "",
      division_length_y: "",
      division_proportion_x: "",
      division_proportion_y: "",
      plasmids: []
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
      width: this.state.width,
      default_growth_rate: this.state.default_growth_rate,
      division_length_x: this.state.division_length_x,
      division_length_y: this.state.division_length_y,
      division_proportion_x: this.state.division_proportion_x,
      division_proportion_y: this.state.division_length_y,
      plasmids: this.state.plasmids
    }
    this.props.dataLoad(data)
    this.setState({ open: false });

  }
  dataPLLoad = (data) => {
    this.setState({
      plasmids: data
    })
  }
  render() {

    const { classes } = this.props;
      return(
        <div>
          <Button variant="contained" color="primary" onClick={this.handleOpen}>
            New Strain
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
              <h2>Create Strain</h2>
            </Grid>
            <Grid container spacing={24}>
              <Grid item sm={4}>
                <Input
                  type="text"
                  label="Name strain"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput}
                  placeholder="Name strain"
                />
              </Grid>
              <Grid item sm={4}>
                <Input
                  type="number"
                  label="Width strain"
                  name="width"
                  value={this.state.width}
                  onChange={this.handleInput}
                  placeholder="Width strain"
                />
              </Grid>
              <Grid item sm={4}>
                <Input
                  type="number"
                  label="Default growth rate"
                  name="default_growth_rate"
                  value={this.state.default_growth_rate}
                  onChange={this.handleInput}
                  placeholder="Default growth rate"
                />
              </Grid>
            </Grid>
            <Grid container spacing={24}>

              <Grid item sm={3} lg={3}>
                  <Input
                    type="number"
                    label="Division length x"
                    name="division_length_x"
                    value={this.state.division_length_x}
                    onChange={this.handleInput}
                    placeholder="Division length x"
                  />
                </Grid>
                <Grid item sm={3} lg={3}>
                  <Input
                    type="number"
                    name="division_length_y"
                    value={this.state.division_length_y}
                    onChange={this.handleInput}
                    placeholder="Division length y"
                  />
                </Grid>
                <Grid item sm={3} lg={3}>
                  <Input
                    type="number"
                    name="division_proportion_x"
                    value={this.state.division_proportion_x}
                    onChange={this.handleInput}
                    placeholder="Division proportion x"
                  />
                </Grid>
                <Grid item sm={3} lg={3}>
                  <Input
                    type="number"
                    name="division_proportion_y"
                    value={this.state.division_proportion_y}
                    onChange={this.handleInput}
                    placeholder="Division proportion y"
                  />
                </Grid>

                <Grid item sm={12} style={{
                  marginTop: 20
                }}>
                Plasmids
                </Grid>
                <Grid item sm={12} lg={12}>
                  <PlasmidsChips dataPLLoad={this.dataPLLoad} plasmids={this.props.plasmids}/>
                </Grid>
            </Grid>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{paddingTop: '5%'}} >
              <Button variant="contained" color="primary" onClick={this.handleDataLoad}>
                Add Strain
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
