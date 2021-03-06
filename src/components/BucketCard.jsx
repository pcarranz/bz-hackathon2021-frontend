import React, { Component } from 'react';

class BucketCard extends Component {

    render() {
        return (
            <div className="card mx-2 mb-2" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.bucket.bucketName}</h5>
                    {this.props.bucket.bucketType === "allPublic" &&
                        <h6 className="card-subtitle mb-2 text-muted">Public</h6>}
                    {this.props.bucket.bucketType === "allPrivate" &&
                        <h6 className="card-subtitle mb-2 text-muted">Private</h6>}
                    {this.props.bucket.bucketType === "snapshot" &&
                        <h6 className="card-subtitle mb-2 text-muted">Snapshot</h6>}
                    {this.props.renderFilesButton && <a href="#" className="card-link">View Files</a>}
                </div>
            </div>
        )
    }
}

export default BucketCard