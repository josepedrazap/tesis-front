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
    var pl = "";
    for (var i = 0; i < this.props.strain.plasmids.length; i++) {
      pl += `"${this.props.strain.plasmids[i]}",`
    }
    var code =`
    {
      "name": "${this.props.strain.name}",
      "width": "${this.props.strain.width}",
      "default_growth_rate": "${this.props.strain.default_growth_rate}"
      "division_length": {
        "x": ${this.props.strain.division_length_x},
        "y": ${this.props.strain.division_length_y}
      },
      "division_proportion": {
        "x": ${this.props.strain.division_proportion_x},
        "y": ${this.props.strain.division_proportion_y}
      },
      "plasmids": [${pl}]
    }`
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            {this.props.strain.name}
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
