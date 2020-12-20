import api from "@/services/api";

export default {
  getAge(params) {
    return api().post("age", params);
  }
};
