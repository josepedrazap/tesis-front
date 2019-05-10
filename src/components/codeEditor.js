import React, {Component} from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue) {
  console.log('change',newValue);
}

class CodeEditor extends Component {
// Render editor
  render(){
    return(
      <AceEditor
        placeholder="Placeholder Text"
        mode="json"
        theme="solarized_dark"
        name="blah2"
        onLoad={this.onLoad}
        onChange={this.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={this.props.code}
        setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
        }}/>
    )
  }
}
export default CodeEditor
