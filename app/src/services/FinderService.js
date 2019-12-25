import api from "../helpers/api";

class FinderService {
  async findAll(query) {
    console.log(query);
    var finded = await api("/findGame", "POST", query);
    return JSON.parse(finded.data);
  }
}

export default new FinderService();
