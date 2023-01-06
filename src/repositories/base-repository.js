import { createClient } from './client.js';

/**
 * Creates Base repo
 * @param {string} controllerPath url
 * @param {string} endpoint endpoint
 */
class BaseRepository {
  /**
   * Base repo constructor
   * @param {string} controllerPath url
   * @param {string} endpoint endpoint
   */
  constructor(controllerPath, endpoint, primaryKeyField) {
    this.controllerPath = controllerPath;
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
   * @returns {Array.<Object>} An array of all entities of given endpoint
   */
  async getAsync() {
    this._loadClient();

    try {
      const urlString = this.controllerPath + '/' + this.endpoint;
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
   * @returns {Object} Entity found
   */
  async getPostAsync(id) {
    this._loadClient();

    try {
      const urlString = this.controllerPath + '/' + this.endpoint + '/' + id;
      const res = this.client.get(urlString);
      return res.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  /**
   * Create an entity
   * @param {Object} payload - the data of the entity to create
   */
  async createAsync(payload) {
    this._loadClient();

    try {
      const urlString = this.controllerPath + '/' + this.endpoint;
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
      const urlString = this.controllerPath + '/' + this.endpoint + '/' + id;
      const res = this.client.patch(urlString, payload);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Delete entity by id
   * @param {string} id
   * @returns
   */
  async deleteAsync(id) {
    this._loadClient();

    try {
      const urlString = this.controllerPath + '/' + this.endpoint + '/' + id;
      const res = this.client.delete(urlString);
      return res;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}
