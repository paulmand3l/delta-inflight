import { useState } from 'react'
import { RecoilRoot } from 'recoil';
import Layout from './Layout';

function App() {
  // global hooks here

  return (
    <Layout />
  )
}

export default () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
