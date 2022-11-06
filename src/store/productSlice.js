import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { PRODUCT_IMAGE_MAP } from '../data/product-image-map';

// const API_URL = 'http://103.28.121.57/api'

const initialState = {
    products: [],
    status: 'idle',
    error: null,
}

//api call 
export const fetchProducts = createAsyncThunk('products/fetchProducts',
 async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
})

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},

    extraReducers: {
     //product / api pending
       
     [fetchProducts.pending]: (state, action) => {
     
        state.status = 'loading'
     
    },
    
    //sucess to call api,and display the products

      [fetchProducts.fulfilled]: (state, action) => {
     
        state.status = "success";
     
        const {payload} = action;
         console.log("api",payload)

        // payload.products.forEach(product => {
   
        //     product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage;
     
        //   product.images = PRODUCT_IMAGE_MAP[product.name].images;
     
        // })
     
        state.products = payload.products;
     
    },
     
    //api error

      [fetchProducts.rejected]: (state, action) => {
     
        state.status = "failed"
     
    },
    },

})

//catch product status from api
export const selectStatus = (state) => state.products.status
export const selectFeaturedProducts = (state )=> state.products.products.filter(product => product.is_featured)
export const selectHeadphones = (state) => state.products.products.filter(product => product.category === 'headphones')
export const selectSpeakers = (state) => state.products.products.filter(product => product.category === 'speakers')
export const selectEarphones = (state) => state.products.products.filter(product => product.category === 'earphones')
export const selectProductsById = (state, id) => state.products.products.find(product => product.id === id)

export default productSlice.reducer;