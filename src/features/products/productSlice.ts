// Redux Toolkit kütüphanesinden gerekli fonksiyonları ve tipleri içe aktarıyoruz.
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// RootState tipini aldığımız store dosyasını içe aktarıyoruz.
import { RootState } from "../../redux/store/store";

// Ürünlerin tip tanımını oluşturuyoruz.
export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  shippingMethod: string;
  favorited: false;
}

// Ürünlerin durumunu tanımlayan tipi oluşturuyoruz.
export interface ProductsState {
  loading: boolean; // Yükleme durumunu gösteren bir boolean değeri
  products: Array<Product>; // Ürünlerin listesi
  error: string | undefined; // Hata durumunu içeren bir string veya tanımsız (undefined) değer
}

// Başlangıç durumunu oluşturuyoruz.
const initialState: ProductsState = {
  loading: false,
  products: [],
  error: undefined,
};

// Ürünleri getiren async işlevi oluşturuyoruz.
export const fetchProducts = createAsyncThunk("products", async () => {
  try {
    const res = await fetch(
      "https://honey-badgers-ecommerce.glitch.me/products"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw Error("Failed to fetch products");
  }
});

// Ürün dilimini oluşturuyoruz.
const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true; // İstek başladığında yükleme durumunu true yapar.
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Array<Product>>) => {
        state.loading = false; // İstek tamamlandığında yükleme durumunu false yapar.
        state.products = action.payload; // Ürünleri günceller.
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false; // İstek reddedildiğinde yükleme durumunu false yapar.
      state.products = []; // Ürün listesini boşaltır.
      state.error = action.error.message; // Hata mesajını saklar.
    });
  },
  reducers: {},
});

// Ürün seçicisini oluşturuyoruz.
export const productSelector = (state: RootState) => state.productReducer;

// Dilimi dışa aktarıyoruz.
export default productSlice.reducer;
