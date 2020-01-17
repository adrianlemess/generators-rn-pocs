// const React = require("react");
// const style = require("./prancheta-1.css");
import React from "react";
import PropTypes from "prop-types";

import "./prancheta-1.css";

class Prancheta1 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }
  
  render() {
    
    return (
          <div data-layer="b41db8c4-5bef-4e24-be0a-6f713253b6f2" className="prancheta-1">        <div data-layer="abe26dff-f707-4a55-9fd2-dfba0c64d7a4" className="button">            <div data-layer="139c0759-3d3b-43c7-a537-a3f3b70082de" className="background"></div>
            <div data-layer="1b7627c1-8240-4d0b-ad6f-f3d9531e877a" className="card-button">Card button</div>
</div>
</div>

    );
  }
}

Prancheta1.propTypes = {

}

Prancheta1.defaultProps = {

}


// module.exports = Prancheta1;
export default Prancheta1;
          