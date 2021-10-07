import React, { Component } from 'react';
import Service from '../service/Service';

class BucketList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buckets: []
        }
        this.refreshBuckets = this.refreshBuckets.bind(this)
    }
    
    componentDidMount() {
        this.refreshBuckets();
    }

    refreshBuckets() {
        Service.listBuckets()
            .then(
                response => {
                    console.log(response);
                    this.setState({ buckets: response.data })
                }
            )
    }

    render() {
        return (
              <div className="container">
                {
                    this.state.buckets.map(
                        bucket =>
                            <p>{bucket.bucketName}</p>
                        
                    )
                }
          </div>
        )
    }
}

export default BucketList