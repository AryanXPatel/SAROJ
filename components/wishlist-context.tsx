"use client"

import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Define the shape of a product
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

// Define the state shape
interface WishlistState {
  items: Product[];
}

// Define the actions
type WishlistAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'SET_WISHLIST'; payload: Product[] };

// Reducer function
const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (state.items.find(item => item.id === action.payload.id)) {
        return state; // Item already in wishlist
      }
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    case 'SET_WISHLIST':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

// Create the context
const WishlistContext = createContext<{
  state: WishlistState;
  dispatch: React.Dispatch<WishlistAction>;
} | undefined>(undefined);

// WishlistProvider component
export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  useEffect(() => {
    const savedWishlist = localStorage.getItem('saroj-wishlist');
    if (savedWishlist) {
      dispatch({ type: 'SET_WISHLIST', payload: JSON.parse(savedWishlist) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('saroj-wishlist', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}; 