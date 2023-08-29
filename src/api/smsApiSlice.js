import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const smsApiSlice = createApi({
  reducerPath: "sms_api",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SMS_URL,
  }),
  endpoints: (builder) => ({
    single_sms: builder.mutation({
      query: (body) => ({
        url: `${process.env.REACT_APP_SMS_CREDENTIALS}&message=${body.message}&mobiles=${body.phone}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useSingle_smsMutation } = smsApiSlice;
