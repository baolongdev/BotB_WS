import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fileActions, sheetActions } from "@redux/constant/googleApi"; // Adjust the path as needed


const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};
export const googleApi = createApi({
    reducerPath: "googleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/appScript"
    }),
    endpoints: (builder) => ({
        // File actions
        processFile: builder.mutation({
            query: ({ folderId, file }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ folderId, file, action: fileActions.processFile }),
            }),
        }),
        deleteById: builder.mutation({
            query: ({ folderId, fileId }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ folderId, fileId, action: fileActions.deleteById }),
            }),
        }),
        getInfo: builder.query({
            query: ({ folderId, fileId }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ folderId, fileId, action: fileActions.getInfo }),
            }),
        }),
        updateFile: builder.mutation({
            query: ({ folderId, fileId, updatedFileData }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ folderId, fileId, updatedFileData, action: fileActions.updateFile }),
            }),
        }),
        listFilesInFolder: builder.query({
            query: ({ folderId }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ folderId, action: fileActions.listFilesInFolder }),
            }),
        }),
        listSubFolders: builder.query({
            query: ({ folderId }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ folderId, action: fileActions.listSubFolders }),
            }),
        }),
        getAllFilesAndFoldersAsTree: builder.query({
            query: ({ folderId }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ folderId, action: fileActions.getAllFilesAndFoldersAsTree }),
            }),
        }),
        getFolderContainingFile: builder.query({
            query: ({ folderId, fileId }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ folderId, fileId, action: fileActions.getFolderContainingFile }),
            }),
        }),
        listParentFolderContents: builder.query({
            query: ({ folderId }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ folderId, action: fileActions.listParentFolderContents }),
            }),
        }),

        // Sheet actions
        readData: builder.query({
            query: ({ sheetId, sheetName }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ sheetId, sheetName, action: sheetActions.readData }),
            }),
        }),
        writeData: builder.mutation({
            query: ({ sheetId, sheetName, data }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ sheetId, sheetName, data, action: sheetActions.writeData }),
            }),
        }),
        clearData: builder.mutation({
            query: ({ sheetId, sheetName, startRow, startColumn, numRows, numColumns }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ sheetId, sheetName, startRow, startColumn, numRows, numColumns, action: sheetActions.clearData }),
            }),
        }),
        deleteRow: builder.mutation({
            query: ({ sheetId, sheetName, rowIndex }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ sheetId, sheetName, rowIndex, action: sheetActions.deleteRow }),
            }),
        }),
        updateData: builder.mutation({
            query: ({ sheetId, sheetName, data }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ sheetId, sheetName, data, action: sheetActions.updateData }),
            }),
        }),
        readHeader: builder.query({
            query: ({ sheetId, sheetName }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ sheetId, sheetName, action: sheetActions.readHeader }),
            }),
        }),
        createHeader: builder.mutation({
            query: ({ sheetId, sheetName, headers }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ sheetId, sheetName, headers, action: sheetActions.createHeader }),
            }),
        }),
        addData: builder.mutation({
            query: ({ sheetId, sheetName, data }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ sheetId, sheetName, data, action: sheetActions.addData }),
            }),
        }),
        checkDataWithHeader: builder.query({
            query: ({ sheetId, sheetName, data }) => ({
                url: ``,
                method: "POST",
                headers: headers,
                body: JSON.stringify({ sheetId, sheetName, data, action: sheetActions.checkDataWithHeader }),
            }),
        }),
    }),
});

export const {
    useProcessFileMutation,
    useDeleteByIdMutation,
    useGetInfoQuery,
    useUpdateFileMutation,
    useListFilesInFolderQuery,
    useListSubFoldersQuery,
    useGetAllFilesAndFoldersAsTreeQuery,
    useGetFolderContainingFileQuery,
    useListParentFolderContentsQuery,

    useReadDataQuery,
    useWriteDataMutation,
    useClearDataMutation,
    useDeleteRowMutation,
    useUpdateDataMutation,
    useReadHeaderQuery,
    useCreateHeaderMutation,
    useAddDataMutation,
    useCheckDataWithHeaderQuery,
} = googleApi;

export const googleApiReducer = googleApi.reducer;
export const googleApiMiddleware = googleApi.middleware;
