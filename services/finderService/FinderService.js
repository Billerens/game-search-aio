var request = require("request-promise");
const queryString = require("query-string");

class FinderService {
  findAll(query) {
    return request.get(
      "https://api.rawg.io/api/games?" + queryString.stringify(query)
    );
  }
}

module.exports = new FinderService();
