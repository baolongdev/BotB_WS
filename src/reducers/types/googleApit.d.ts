// Define types for file actions
export interface File {
    data: string; // Base64 encoded data
    type: string; // MIME type of the file
    name: string; // Name of the file
}

export interface FileInfo {
    status: string;
    name: string;
    id: string;
    view: string;
    link: string;
}

export interface FileActionResult {
    status: string;
    id?: string;
    message: string;
    url?: string;
    mimeType?: string;
    size?: number;
    name?: string;
}

export interface FolderContent {
    id: string;
    name: string;
    url: string;
    mimeType: string;
    size: number;
}

export type FileActions = {
    processFile: (file: File) => Promise<FileInfo>;
    processFiles: (files: File[]) => Promise<FileInfo[]>;
    deleteFile: (fileId: string) => Promise<FileActionResult>;
    getFileInfo: (fileId: string) => Promise<FileActionResult>;
    updateFile: (fileId: string, updatedFileData: File) => Promise<FileActionResult>;
    listFilesInFolder: () => Promise<FolderContent[]>;
    listSubFolders: () => Promise<FolderContent[]>;
    listParentFolderContents: () => Promise<FolderContent[]>;
};

// Define types for sheet actions
export interface SheetData {
    [key: string]: any; // Generic key-value pairs for sheet data
}

export interface SheetActionResult {
    status: string;
    message: string;
    expectedHeader?: string[];
}

export type SheetActions = {
    readData: () => Promise<SheetData[][]>;
    writeData: (data: SheetData[][]) => Promise<SheetActionResult>;
    clearData: (startRow?: number, startColumn?: number, numRows?: number, numColumns?: number) => Promise<void>;
    deleteRow: (rowIndex: number) => Promise<void>;
    updateData: (data: SheetData[][]) => Promise<SheetActionResult>;
    readHeader: () => Promise<string[]>;
    createHeader: (headers: string[]) => Promise<void>;
    addData: (data: SheetData[][]) => Promise<SheetActionResult>;
    checkDataWithHeader: (data: SheetData[][]) => Promise<SheetActionResult>;
};

// Define a combined Actions type
export interface Actions {
    fileActions: FileActions;
    sheetActions: SheetActions;
}

// Define the parameter structure for the doPost function
export interface DoPostParams {
    action: string;
    file?: File;
    files?: File[];
    fileId?: string;
    updatedFileData?: File;
    folderId?: string;
    sheetId?: string;
    sheetName?: string;
    data?: SheetData[][];
    headers?: string[];
    startRow?: number;
    startColumn?: number;
    numRows?: number;
    numColumns?: number;
    rowIndex?: number;
}
