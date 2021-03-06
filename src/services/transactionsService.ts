import { GridFilter } from '../models/gridModifiers';
import { TransactionsGrid } from '../models/transactionsGrid';
import axios from './baseService';

class TransactionsService {
    getAll = () => {
        return axios.get('/transactions');
    }

    getById = (id: string) => {
        return axios.get(`/transactions/${id}`);
    }

    grid = async (page: number, take: number, sortBy: string, direction: string, filters: GridFilter[]): Promise<TransactionsGrid> => {
        const {data} = await axios.post(`/transactions/grid`, {page, take, sortBy, direction, filters});
        return data;
    }
    
    filter = (start: string, end: string) => {
        return axios.post(`/transactions/filter`, {start, end});
    }
}

export default new TransactionsService();