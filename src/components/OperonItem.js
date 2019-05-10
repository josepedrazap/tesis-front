import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodeEditor from './codeEditor'
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class OperonItem extends Component {
  constructor(props){
    super(props);

  }

  render() {
    var tf = "";
    var ex = ""
    for (var i = 0; i < this.props.operon.tf.length; i++) {
      tf += `"${this.props.operon.tf[i]}",`
    }
    for (var i = 0; i < this.props.operon.ex.length; i++) {
      ex += `"${this.props.operon.ex[i]}",`
    }
    var code =`
    {
      "name": "${this.props.operon.name}",
      "promoter": {
        "gate": "${this.props.operon.gate}",
        "transcription_factors": [${tf}]
      },
      "block": {
        "to_on": ${this.props.operon.to_on},
        "to_off": ${this.props.operon.to_off},
        "time": ${this.props.operon.time}
      },
      "expresses": [${ex}]
    }`
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            {this.props.operon.name}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CodeEditor code={code}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
OperonItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OperonItem);
