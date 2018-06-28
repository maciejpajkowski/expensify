// hoc - Higher Order Component - A component (HOC) that renders another component
// Goal of HOC is to reuse code and also:
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => ( // THIS IS THE HOC
    <div>
      { props.isAdmin && <p>THIS IS PRIVATE INFO, PLEASE DON'T SHARE!</p> }
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? 
        (<WrappedComponent {...props} /> ) :
        (<p>Please log in to see the details</p>)        
      }
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));