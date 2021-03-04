import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const service = axios.create({
  baseURL: `${BASE_URL}/transactions`,
  withCredentials: true,
});

export const AUTH_TRANSACTIONS = {
  getTransactions() {
    return service.get("/");
  },
  getTransaction(id) {
    return service.get(`/transaction/${id}`);
  },

  addTransaction(data) {
    return service.post("/transaction/add", data);
  },
  updateTransaction(id, data) {
    return service.put(`/transaction/update/${id}`, data);
  },
  deleteTransaction(id) {
    return service.delete(`/transaction/delete/${id}`);
  },
};

// export default AUTH_TRANSACTIONS;
