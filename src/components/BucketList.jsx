import React, { Component } from 'react';
import BucketCard from './BucketCard';
import Service from '../service/Service';

class BucketList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buckets: [],
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
                <div className="row">
                    {/* <div className="col"> */}
                        {
                            this.state.buckets.map(
                                bucket =>
                                    <BucketCard key={bucket.bucketName} bucket={bucket} renderFilesButton={this.props.renderFilesButton} />
                            )
                        }
                    </div>
                {/* </div> */}

            </div>
        )
    }
}

export default BucketList