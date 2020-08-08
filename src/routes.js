import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Remove from './pages/Remove'

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/product/:id" component={Product} />
            <Route path="/remove" component={Remove} />
        </BrowserRouter>
    )
}

export default Routes
