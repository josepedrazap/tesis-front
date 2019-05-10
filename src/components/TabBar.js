import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import UploadSBOL from './UploadSBOL'
import ListGenes from './ListGenes'
import Operons from './Operons'
import Plasmids from './Plasmids'
import Strains from './Strains'
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
});

class FullWidthTabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
      operons: [],
      plasmids: []
    }
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  setOperons = (operons) => {
    this.setState({
      operons
    })
  }
  setPlasmids = (plasmids) => {
    this.setState({
      plasmids
    })
  }
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Genes" />
            <Tab label="Operons" />
            <Tab label="Plasmids" />
            <Tab label="Strains" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <UploadSBOL/>
            <hr></hr>
            <ListGenes/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Operons setOperons={this.setOperons} operons={this.state.operons}/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Plasmids setPlasmids={this.setPlasmids} operons={this.state.operons}/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Strains plasmids={this.state.plasmids}/>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
