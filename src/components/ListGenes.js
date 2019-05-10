import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
  },
});

function SubheaderDividers(props) {
  const { classes } = props;
  return (
    <div style={{
      border: '1px solid'
    }}>
      <Typography>Genes encontrados</Typography>
      <List className={classes.root}>
        <ListItem>
          <ListItemText primary="gfp" secondary="Protein" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="lfp" secondary="Protein" />
        </ListItem>
        <Divider component="li" variant="inset" />
      </List>
    </div>
  );
}

SubheaderDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubheaderDividers);
