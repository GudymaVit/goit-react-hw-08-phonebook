import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62efe6e657311485d12a93dc.mockapi.io',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags:['Contacts'],
        }),
        addContact: builder.mutation({
            query: contact => ({
                url: '/contacts',
                method: 'POST',
                body: contact,
            }),
            invalidatesTags:['Contacts']
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:['Contacts']
        })
    })
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;