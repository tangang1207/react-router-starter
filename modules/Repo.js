/**
 * Created by tangang on 2017/12/28.
 */
import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Helcome ,</h1>
            <h2>{this.props.params.repoName}</h2>
        </div>
    )
    }
})