import { apiSlice } from "./apiSlice";

export const giftCardSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["giftcard", "giftcard-info", "crypto-rates"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getPendingBuyTranx: builder.query({
        query: () => ({
          url: "gift-card/pending-buy-transactions",
        }),
        providesTags: ["giftcard"],
      }),
      getPendingSellTranx: builder.query({
        query: () => ({
          url: "gift-card/pending-sell-transactions",
        }),
        providesTags: ["giftcard"],
      }),
      getGiftCardInfo: builder.query({
        query: () => ({
          url: `gift-card/get-giftcard-info`,
        }),
        transformResponse: (response) => {
          const result = response?.data?.map((e) => ({
            ...e,
            countriesSelect: e?.countries.map((c) => ({ label: c, value: c })),
            cardSelect: e?.card_types.map((c) => ({ label: c, value: c })),
            denominationsSelect: e?.denominations.map((c) => ({
              label: c,
              value: c,
            })),
          }));
          return result;
        },
        providesTags: ["giftcard-info", "giftcard"],
      }),
      getGiftCard: builder.query({
        query: (body) => ({
          url: `gift-card/get-giftcard/${body?.name}`,
        }),
        providesTags: ["giftcard", "giftcard-info"],
      }),
      createGiftCardInfo: builder.mutation({
        query: (body) => ({
          url: "gift-card/create-giftcard-info",
          body,
          method: "POST",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      createGiftCard: builder.mutation({
        query: (body) => ({
          url: "gift-card/create-giftcard",
          body,
          method: "POST",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      updateGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/update-giftcard/${body.id}`,
          body: body.payload,
          method: "PATCH",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      deleteGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/delete-giftcard/${body.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      acceptGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/accept-giftcard-sell/${body.id}`,
          method: "PATCH",
        }),
      }),
      processGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/process-giftcard-sell/${body.id}`,
          method: "PATCH",
        }),
      }),
      declineGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/decline-giftcard-sell/${body.id}`,
          method: "PATCH",
        }),
      }),
      sendGiftCardSms: builder.mutation({
        query: (body) => ({
          url: "gift-card/send-giftcard-sms",
          body,
          method: "POST",
        }),
      }),
      sendGiftCardMail: builder.mutation({
        query: (body) => ({
          url: "gift-card/send-giftcard-email",
          body,
          method: "POST",
        }),
      }),
    }),
  });

export const {
  useAcceptGiftCardMutation,
  useCreateGiftCardInfoMutation,
  useCreateGiftCardMutation,
  useDeclineGiftCardMutation,
  useDeleteGiftCardMutation,
  useGetGiftCardInfoQuery,
  useLazyGetGiftCardQuery,
  useGetPendingBuyTranxQuery,
  useGetPendingSellTranxQuery,
  useProcessGiftCardMutation,
  useUpdateGiftCardMutation,
  useSendGiftCardMailMutation,
  useSendGiftCardSmsMutation,
  useLazyGetPendingSellTranxQuery,
  useLazyGetPendingBuyTranxQuery,
} = giftCardSlice;
