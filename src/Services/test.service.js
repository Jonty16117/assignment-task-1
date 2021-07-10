import http from "../http-common";

class TestDataService {
  getAll(params) {
    return http.get("/testData", { params });
  }

  get(page) {
    return http.get(`/testData/${page}`);
  }

  create(data) {
    return http.post("/testData", data);
  }

  update(id, data) {
    return http.put(`/testData/${id}`, data);
  }

  delete(id) {
    return http.delete(`/testData/${id}`);
  }

  deleteAll() {
    return http.delete(`/testData`);
  }

  findByTitle(title) {
    return http.get(`/testData?title=${title}`);
  }
}

export default new TestDataService();
