import React from 'react';
import { addDecorator } from '@storybook/react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import { GlobalStyle, materialUiPalette } from '../src/shared';

const theme = createMuiTheme({
  palette: materialUiPalette,
});

addDecorator((story) => (
  <GlobalStyle>
    <ThemeProvider theme={theme}> {story()}</ThemeProvider>
  </GlobalStyle>
));
