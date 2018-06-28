import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { render } from 'react-dom';
import styled, { theme } from './styled';

const Button = styled('button')`
  padding: 10px;
  background: ${props => props.theme.color.primary};
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button>hi</Button>
      </ThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
