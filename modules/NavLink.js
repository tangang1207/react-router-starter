/**
 * Created by tangang on 2017/12/28.
 */
import React from 'react'
import { Link } from 'react-router'
export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
})