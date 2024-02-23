// Redux Toolkit'ten configureStore fonksiyonunu içe aktarıyoruz.
import { configureStore } from '@reduxjs/toolkit';

// Ürün dilimini içe aktarıyoruz.
import productReducer from "../../features/products/productSlice";

// Store'u yapılandırıyoruz ve productReducer'ı ekliyoruz.
export const store = configureStore({
  reducer: {
    productReducer // productReducer'ı store'a ekliyoruz
  },
});

// RootState türünü, store'un durumundan türetiyoruz.
export type RootState = ReturnType<typeof store.getState>;
