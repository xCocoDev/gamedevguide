import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSidebarDockedState, getHeaderHeightState, getAnchorState } from '../../store/selectors';

class Container extends Component {
  render() {
    const { sidebarDocked, headerHeight, anchorDocked } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          top: headerHeight + 30,
          left: (sidebarDocked) ? "20%" : 0,
          right: (anchorDocked) ? "15%" : 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    sidebarDocked: getSidebarDockedState(state),
    headerHeight: getHeaderHeightState(state),
    anchorDocked: getAnchorState(state).anchorDocked
  }
}

export default connect(mapStateToProps) (Container);