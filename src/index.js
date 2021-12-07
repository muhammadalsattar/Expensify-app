import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import store from './store/configureStore'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase.js'

ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
     document.querySelector('#app')
    )