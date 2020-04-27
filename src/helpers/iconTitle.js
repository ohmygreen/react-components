import React from 'react';
import { colorsPallete } from '../shared/colors';

export function iconTitle(iconName) {
  return (
    <code
      style={{
        display: 'block',
        padding: '5px',
        borderRadius: '3px',
        backgroundColor: colorsPallete.grey100,
      }}
    >
      import {`{ ${iconName} }`} from 'react-components'
    </code>
  );
}
