import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = import.meta.env.VITE_URL_API;
const key = import.meta.env.VITE_KEY_API;
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (build) => ({
    getCoins: build.query({
      query: () => ({
        url: "/coins",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": key,
        },
      }),
    }),
    getCoinByUuid: build.query({
      query: ({ id, time }) => ({
        url: `/coin/${id}?timePeriod=${time ? time : "24h"}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": key,
        },
      }),
    }),
    getCoinPriceByUuid: build.query({
      query: ({ id, time }) => ({
        url: `/coin/${id}/history?timePeriod=${time ? time : "24h"}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": key,
        },
      }),
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinByUuidQuery,
  useGetCoinPriceByUuidQuery,
} = api;
