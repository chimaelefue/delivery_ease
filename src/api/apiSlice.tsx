import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, Dashboard, RegisterApiRequest, loginApiRequest, verifyRequest, DeliveryData, EditUser, PasswordtReq, DashboardQueryParams, BikerReq, DeliveryHistoryResponse } from '../types/types';



const api_origin = 'https://deliver.door-steps.pro/api/';


const localToken = localStorage.getItem("token");

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: api_origin,
    mode: "cors",
    prepareHeaders: (headers) => {
      const token = localToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("Accept", "*/*");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Accept", "application/json");
      headers.set(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
      );
      return headers;
    },
  }),
  tagTypes: ["Department", "User", "Dashboard", "Deliveries", 'Delivery'],

  endpoints: (builder) => ({
    registerUser: builder.mutation<void, RegisterApiRequest>({
      query: (userData) => ({
        url: "register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    loginUser: builder.mutation<void, loginApiRequest>({
      query: (userData) => ({
        url: "login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    verifyEmail: builder.mutation<void, verifyRequest>({
      query: (userData) => ({
        url: "email/verify",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    getDashboard: builder.query<Dashboard, void>({
      query: () => "/dashboard",
      providesTags: ["Dashboard"],
    }),

    // New Delivery History Query
    getDeliveryHistory: builder.query<
      DeliveryHistoryResponse,
      { start_date?: string; end_date?: string, page?: number }
    >({
      query: ({ start_date, end_date, page }) => ({
        url: "delivery-history",
        params: { start_date, end_date, page },
      }),
      providesTags: ["Deliveries"],
    }),

    getDeliveryStat: builder.query<Dashboard, void>({
      query: () => '/delivery-stats',
      providesTags: ['Dashboard'],
    }),

    getDashboardStats: builder.query<Record<string, any>, DashboardQueryParams>({
      query: ({ start_date, end_date }) => {
        const params = new URLSearchParams();
        if (start_date) params.append('start_date', start_date);
        if (end_date) params.append('end_date', end_date);
    
        return `delivery-stats/charts?${params.toString()}`;
      },
      providesTags: ['Dashboard'],
    }),

    getAdminDashboardStats: builder.query<Record<string, any>, DashboardQueryParams>({
      query: ({ start_date, end_date }) => {
        const params = new URLSearchParams();
        if (start_date) params.append('start_date', start_date);
        if (end_date) params.append('end_date', end_date);
    
        return `admin/dashboard?${params.toString()}`;
      },
      providesTags: ['Dashboard'],
    }),
    

    createDelivery: builder.mutation<void, DeliveryData>({
      query: (userData) => ({
        url: 'deliveries',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Delivery'],
    }),

    getHistory: builder.query<Record<string, any>, { page: number }>({
      query: ({ page }) => ({
        url: 'delivery-history',
        params: { page },
      }),
      providesTags: ['Delivery'],
    }),

    editUser: builder.mutation<void, EditUser>({
      query: (userData) => ({
        url: 'settings/profile',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),

    changePassword: builder.mutation<void, PasswordtReq>({
      query: (userData) => ({
        url: 'settings/change-password',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),

    getNotification: builder.query<Record<string, any>, void>({
      query: () => 'notifications',
      providesTags: ['User'],
    }),

    getUser: builder.query<Record<string, any>, void>({
      query: () => 'user',
      providesTags: ['User'],
    }),

    createRider: builder.mutation<void, BikerReq>({
      query: (userData) => ({
        url: 'admin/create-rider',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    
    getBikers: builder.query<Record<string, any>, void>({
      query: () => '/admin/riders',
      providesTags: ['Delivery'],
    }),

    assignRider: builder.mutation<void, { delivery_id: string; rider_id: number }>({
      query: ({ delivery_id, rider_id }) => ({
        url: `admin/deliveries/${delivery_id}/assign`,
        method: 'POST',
        body: { rider_id },
      }),
      invalidatesTags: ['Delivery'],
    }),
  }),
});


export const { useRegisterUserMutation, useGetDeliveryHistoryQuery, useLoginUserMutation, useVerifyEmailMutation, useGetDashboardQuery, useCreateDeliveryMutation, useGetHistoryQuery, useEditUserMutation, useChangePasswordMutation, useGetNotificationQuery, useGetUserQuery, useGetDeliveryStatQuery, useGetDashboardStatsQuery, useGetAdminDashboardStatsQuery, useCreateRiderMutation, useGetBikersQuery, useAssignRiderMutation } = apiSlice;
