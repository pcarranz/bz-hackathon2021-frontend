import React, { Component } from 'react';
import './App.css';
import Service from './service/Service';
import BucketList from './components/BucketList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      renderFilesButton: false
    }
    this.getAppConfig = this.getAppConfig.bind(this)
  }

  componentDidMount() {
    this.getAppConfig();
  }

  getAppConfig() {
    Service.getAppConfig()
      .then(
        response => {
          console.log(response);
          this.setState({ renderFilesButton: response.data.renderFilesButton })
        }
      )
  }


  render() {
    return (
      <div className="container">
        <h1>Backblaze</h1>
        <BucketList renderFilesButton={this.state.renderFilesButton}/>
      </div>
    );
  }
}

export default App;
