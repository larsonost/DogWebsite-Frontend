import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./search-service";



export const findThunk = createAsyncThunk(
    "park/findParks",
    async (searchContent) =>
        await service.findPark(searchContent)
);

export const findDetailThunk = createAsyncThunk(
    "park/findParkDetails",
    async () =>
        await service.findParkDetails()
);


export const createThunk = createAsyncThunk(
    'park/createParks',
    async (park) => {
        const newPark = await service.createPark(park)
        return newPark
    })
export const findUserDetailThunk = createAsyncThunk(
    "park/findUserDetails",
    async () =>
        await service.findUserDetails()
);