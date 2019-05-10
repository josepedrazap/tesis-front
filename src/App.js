import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CodeEditor from './components/codeEditor';
import Grid from '@material-ui/core/Grid';
import TabBar from './components/TabBar';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props){
    super(props)
    var arr = []
    sessionStorage.setItem('operons', arr)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 style={{
            paddingTop: 10
          }}>
            Interfaz Gro
          </h2>
        </div>
        <Grid container >
          <Grid xs={12} sm={6} xl={6} item>
            <TabBar/>
          </Grid>
          <Grid xs={12} sm={6} xl={6} item>
            <CodeEditor/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
