import http from "../axios";
class BankingAppDataService {
    getAll() {
        return http.get("/bankingapp");
    }
    get(id) {
        return http.get(`/bankingapp/${id}`);
    }
    create(data) {
        return http.post("/bankingapp", data);
    }
    update(id, data) {
        return http.put(`/bankingapp/${id}`, data);
    }
    delete(id) {
        return http.delete(`/bankingapp/${id}`);
    }
    deleteAll() {
        return http.delete(`/bankingapp`);
    }
    findByTitle(title) {
        return http.get(`/bankingapp?title=${title}`);
    }
}
export default new BankingAppDataService();