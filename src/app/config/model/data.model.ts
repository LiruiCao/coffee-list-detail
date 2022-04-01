import { ApiResponse } from "./api-responses"

export const TABLE_COLUMNS = {
    id: 'ID',
    name: 'Name',
    comments: 'Comments',
    action: 'Action'

}

export const LABEL = {
    id: 'ID:',
    name: 'Name:',
    comments: 'Comments:',
    submit: 'Submit',
    back: 'back'
}

export interface CoffeeListView {
    id: number,
    uid: string,
    blend_name: string,
    origin: string,
    variety: string,
    notes: string,
    intensifier: string
}


export const IntiaCoffeeListView = {
    id: NaN,
    uid: '',
    blend_name: '',
    origin: '',
    variety: '',
    notes: '',
    intensifier: ''
}


export interface TransactionListView {
    id: number,
    date: string,
    comments: string
}

export const IntiaListView = {
    id: NaN,
    date: '',
    comments: ''
}

export interface CoffeeDataResponse extends ApiResponse {
    data: Array<CoffeeListView>
}


