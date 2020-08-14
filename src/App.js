import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style.js'
import { GlobalFontStyle } from './statics/iconfont/iconfont.js'
import Header from './common/header/index.js'
import store from './store/index.js'

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalFontStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
