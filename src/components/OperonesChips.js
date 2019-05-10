import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class ChipsArray extends React.Component {
  constructor(props){
    super(props)
    var arr = []

    this.props.operons.forEach((elem) => {
      arr.push({"key": elem.name, "label": elem.name})
    })

    this.state = {
      chipDataOut: arr,
      chipDataIn: [
      ],
    };
  }

  handleDelete = data => () => {
    var chipsOut = []
    var chipsIn = []
    var check = 0
    var passData = []
    for (var i = 0; i < this.state.chipDataOut.length; i++) {
      if(this.state.chipDataOut[i].key != data.key){
        chipsOut.push(this.state.chipDataOut[i])
      }else{
        chipsIn.push(this.state.chipDataOut[i])
        passData.push(this.state.chipDataOut[i].label)
        check = 1
      }
    }
    for (var i = 0; i < this.state.chipDataIn.length; i++) {
      if(this.state.chipDataIn[i].key != data.key){
        chipsIn.push(this.state.chipDataIn[i])
        passData.push(this.state.chipDataIn[i].label)
      }else{
        chipsOut.push(this.state.chipDataIn[i])
      }
    }

    this.setState({
      chipDataIn: chipsIn,
      chipDataOut: chipsOut
    });

    this.props.dataTFLoad(passData)
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
      <Grid item sm={6} lg={6}>
        <Paper className={classes.root}>
          {this.state.chipDataOut.map(data => {
            return (
              <div>
                <Chip
                  key={data.key}
                  label={data.label}
                  color="secondary"
                  onDelete={this.handleDelete(data)}
                  className={classes.chip}
                  deleteIcon={<DoneIcon/>}
                />
              </div>
            );
          })}
        </Paper>
      </Grid>
      <Grid item sm={6} lg={6}>
        <Paper className={classes.root}>
          {this.state.chipDataIn.map(data => {
            return (
              <div>
                <Chip
                  key={data.key}
                  label={data.label}
                  color="primary"
                  onDelete={this.handleDelete(data)}
                  className={classes.chip}
                />
              </div>
            );
          })}
        </Paper>
        </Grid>
        </Grid>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);
