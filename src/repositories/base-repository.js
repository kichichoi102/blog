import createClient from './client.js';

/**
 * Creates Base repo
 * @param {string} endpoint endpoint
 */
class BaseRepository {
  /**
   * Base repo constructor
   * @param {string} endpoint endpoint
   */
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.client = null;
  }

  /**
   * @private
   * client lazy loading, aka create client if it doesnt exist,
   * else use the existing one
   */
  _loadClient() {
    if (this.client == null) {
      this.client = createClient();
    }
  }

  /**
   * GET ALL Req call for all entity records for given endpoint
   * @return {Array.<Object>} An array of all entities of given endpoint
   */
  async getAsync() {
    this._loadClient();

    try {
      const urlString = this.endpoint;
      const res = await this.client.get(urlString);
      return res.data;
    } catch (error) {
      console.log(error);
      return [{}];
    }
  }

  /**
   * GET BY ID Req call for given id
   * @param {object} id of entity to get
   * @return {Object} Entity found
   */
  async getPostAsync(id) {
    this._loadClient();

    try {
      const urlString = this.endpoint + '/' + id;
      const res = await this.client.get(urlString);
      return res.data;
    } catch (error) {
      console.log(error);
      return 404;
    }
  }

  /**
   * Create an entity
   * @param {Object} payload - the data of the entity to create
   */
  async createAsync(payload) {
    this._loadClient();

    try {
      const urlString = this.endpoint;
      const res = await this.client.post(urlString, payload);
      return res;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  /**
   * Updates an entity of the given id
   * @param {Object} payload
   * @param {string} id
   */
  async updateAsync(payload, id) {
    this._loadClient();

    try {
      const urlString = this.endpoint + '/' + id;
      const res = this.client.patch(urlString, payload);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Delete entity by id
   * @param {string} id
   * @return {Object}
   */
  async deleteAsync(id) {
    this._loadClient();

    try {
      const urlString = this.endpoint + '/' + id;
      const res = this.client.delete(urlString);
      return res;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  async customRequestAsync(method, params) {
    this._loadClient();
    /**
     * params = {
     *  id: 5,
     *  PostId: 10,
     *  name: dsds
     * }
     */
    let queryString = '?';
    Object.entries(params).forEach(([key, value]) => {
      queryString = queryString + key + '=' + value + '&';
    });
    const methodName = method.toUpperCase();

    switch (methodName) {
      case 'GET':
        try {
          const urlString = this.endpoint + '/' + queryString;
          const res = await this.client.get(urlString);
          return res.data;
        } catch (error) {
          return 404;
        }
      case 'POST':
        break;
      case 'UPDATE':
        break;
      case 'DELETE':
        break;
    }
  }
}

export { BaseRepository };
