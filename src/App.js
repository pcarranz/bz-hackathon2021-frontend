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
        <div className="row">
          <div className="jumbotron">
            <h1 className="display-4">B2 Cloud Storage Buckets</h1>
            <p className="lead">With Backblaze B2 Cloud Storage you can store data in the Backblaze Cloud. Any size, file type or number of files.</p>
            <p className="lead">
              New to B2 Cloud Storage? Check out the <a  href="#" role="button">B2 Starter Guide</a>
            </p>
          </div>
        </div>
        <hr className="my-4"></hr>
        <div className="row justify-content-end">
          <div className="col-2 pb-2">
            <a className="btn btn-danger btn-sm text-end" href="#" role="button">Create Bucket</a>
          </div>
        </div>
        <div className="row py-2">
          <BucketList renderFilesButton={this.state.renderFilesButton}/>
        </div>
      </div>
    );
  }
}

export default App;
