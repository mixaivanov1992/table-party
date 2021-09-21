import React from 'react';
import '@css/App.scss';
import Loader from '@shared/loader/Loader';
import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import { useTypedSelector } from '@hooks/useTypedSelector';

function App() {
  let loader = useTypedSelector(state => state.loader);

  return (
    <div className="App">
      <Loader />
      <Header />
      <Content />
    </div>
  );
}

export default App;
