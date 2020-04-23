import React from 'react';
import update from 'immutability-helper';
import ClassNames from 'classnames';

function basicInput(props) {
  return (
    <div
      className={ClassNames({
        'basic-input': true,
        error: props.error,
      })}
      {...props}
    >
      <input
        className={props.error ? 'error' : ''}
        {...update(props, {
          children: { $set: null },
        })}
      />
      {props.children}
      <aside>
        {props.helptext || props.error || ' '}
      </aside>
    </div>
  );
}

export default basicInput;
