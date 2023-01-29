import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const ACCESS_KEY = 'f5f5e1cf1e514f048270127762dd4c6a'
// const LINK = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=f5f5e1cf1e514f048270127762dd4c6a'

export const fetchNews = createAsyncThunk(
    "news/fetchAll",
    async (_, thunkAPI) => {
      try {
        const {data} = await axios.get(BASE_URL,{
            params: {
              'apiKey': ACCESS_KEY,
              'country': 'ua',              
            }
          })
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );