export interface ErrorObj {
    statusCode: string;
    severity: string;
    description: string;
}

export interface MetaInfo {
    requestId: string;
}

export interface StatusInfo {
    sucess: boolean;
    httpStatusCode: number;
    details: Array<ErrorObj> | any;
}

export interface ApiResponse {
    meta?: MetaInfo;
    status?: StatusInfo;
    data?: any;
}


