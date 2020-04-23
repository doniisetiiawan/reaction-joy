import React from 'react';
import ClassNames from 'classnames';

function loader(props) {
  const classes = ClassNames({
    'loader-container': true,
    inline: props.inline,
  });

  return (
    <div className="loader">
      <div className={classes}>
        <aside />
        <aside />
        <aside />
        <aside />
        <aside />
      </div>
    </div>
  );
}

export default loader;
