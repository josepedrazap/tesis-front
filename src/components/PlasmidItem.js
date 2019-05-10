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
    var op = "";
    for (var i = 0; i < this.props.plasmid.op.length; i++) {
      op += `"${this.props.plasmid.op[i]}",`
    }
    var code =`
    {
      "name": "${this.props.plasmid.name}",
      "operons": [${op}]
    }`
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            {this.props.plasmid.name}
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
