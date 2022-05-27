import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-6htm-9pd.us.auth0.com
// Vk2hhNhKHfuGHlWciIeC1RAUJgObTmnO;
ReactDOM.render(
  <UserProvider>

  <Auth0Provider
    domain="dev-6htm-9pd.us.auth0.com"
    clientId="Vk2hhNhKHfuGHlWciIeC1RAUJgObTmnO"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>

  </UserProvider>,
  document.getElementById("root")
);
