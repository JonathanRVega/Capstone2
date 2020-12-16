import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// The ScrollToTop component is for scroll restoration. 
// When a page is navigated, it will scroll to the top. -cc

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop);