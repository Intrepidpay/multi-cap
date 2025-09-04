// src/App.jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { CartProvider } from "./contexts/CartContext"
import { FeedProvider } from "./contexts/FeedContext"
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Support from "./pages/Support/Support"
import About from "./pages/About/About"
import Policy from "./pages/Policy/Policy"
import ProductDetail from "./components/ProductDetail/ProductDetail"
import Cart from "./components/Cart/Cart"
import RootLayout from "./layouts/RootLayout"

// 👇 Add basename for GitHub Pages
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "services", element: <Services /> },
        { path: "support", element: <Support /> },
        { path: "about", element: <About /> },
        { path: "policy", element: <Policy /> },
        { path: "product/:id", element: <ProductDetail /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ],
  {
    basename: "/multi-cap", // 👈 this is important for GitHub Pages
  }
)

function App() {
  return (
    <CartProvider>
      <FeedProvider>
        <RouterProvider router={router} />
      </FeedProvider>
    </CartProvider>
  )
}

export default App