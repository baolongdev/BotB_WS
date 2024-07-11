
interface FormData {
    folderName: string;
    fileList: File[];
}
interface ImageFileUploadFormProps {
    folderId: string;
}

interface OnFinishProps {
    values: any;
    form: any;
    processFile: any;
    folderId: string;
}