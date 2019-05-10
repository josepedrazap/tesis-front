import React, {Component} from 'react'

class UploadSBOL extends Component {
  constructor(props){
    super(props);

  }
  uploadFile = (e) => {

  }
  render(){
    return(
      <div>
        <input type="file" onChange={this.uploadFile}/>
      </div>
    )
  }
}

export default UploadSBOL
