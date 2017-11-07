import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {StripeProvider} from 'react-stripe-elements';
import store from './store'
import Routes from './routes'
import MyStoreCheckout from './components/MyStoreCheckout.jsx'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <StripeProvider apiKey="pk_test_cqItbI583FtlR8YEpG2Vlj7X">
      <MyStoreCheckout />
    </StripeProvider>
  </Provider>,
  document.getElementById('app')
)
