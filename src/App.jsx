//'react'=>'node_modules/react/index.js'
import React, { Component } from 'react'
import BaseRouter from '@/router/index'

class App extends Component {
    render() {
        return (
            <div>
                <h3>App组件1234</h3>
                <BaseRouter></BaseRouter>
            </div>
        )
    }
}
export default App;