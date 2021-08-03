import { BrowserRouter, Route } from 'react-router-dom';
import Todo from '../Todo/Todo';

import ThemeProvider from '@material-ui/core/style';
import theme from '../../styles/theme';

const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider value={ }>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={Todo} />
      </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
