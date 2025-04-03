import React, { createContext, useContext, useState, useEffect } from 'react';

const cartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    const cartData = localStorage.getItem('cart-products');
    return cartData ? JSON.parse(cartData) : [];
  });

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newPorductInCart = [];

    if (cartIndex >= 0) {
      newPorductInCart = cartProducts;

      newPorductInCart[cartIndex].quantity =
        newPorductInCart[cartIndex].quantity + 1;

      setCartProducts(newPorductInCart);
    } else {
      product.quantity = 1;

      newPorductInCart = [...cartProducts, product];
      setCartProducts(newPorductInCart);
    }
    upDateLocalStorage(newPorductInCart);
  };

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : prd;
    });
    setCartProducts(newCart);
    upDateLocalStorage(newCart);
  };

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd;
      });
      setCartProducts(newCart);
      upDateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  const clearCart = () => {
    setCartProducts([]);
    upDateLocalStorage([]);
  };

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);
    setCartProducts(newCart);
    upDateLocalStorage(newCart);
  };

  const upDateLocalStorage = (products) => {
    localStorage.setItem('DevBurger:CartInfo', JSON.stringify(products));
  };

  useEffect(() => {
    const CartLocalStorageExists = localStorage.getItem('DevBurger:CartInfo');

    if (CartLocalStorageExists) {
      setCartProducts(JSON.parse(CartLocalStorageExists));
    }
  }, []);

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        increaseProduct,
        decreaseProduct,
        deleteProduct,
        upDateLocalStorage,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
