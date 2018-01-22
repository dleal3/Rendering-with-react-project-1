import React from 'react';
import ReactDom from 'react-Dom';

ReactDom.render (
    React.createElement(
      'table',
      null,
      React.createElement('tr', null, React.createElement('th', null, 'First Name'),React.createElement('th', null, 'Last Name') ),
      React.createElement(
        'table',
        null,
        React.createElement('tr', null, React.createElement('th', null, 'Janet'), React.createElement('th', null, 'James')),
        React.createElement(
          'table',
          null,
          React.createElement('tr', null, React.createElement('th', null, 'John'),
          React.createElement('tr', null, React.createElement('th', null, 'Johnson')))
        )
      )

    ),
    document.getElementById('root')
)
