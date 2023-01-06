import { createClient } from './client.js';

/**
 * Creates Base repo
 * @param {string} controllerPath url
 * @param {string} endpoint endpoint
 * @return {*} client
 */
class BaseRepository {
  /**
     * Base repo constructor
     * @param {string} controllerPath url
     * @param {string} endpoint endpoint
     */
  constructor (controllerPath, endpoint, primaryKeyField) {
    this.controllerPath = controllerPath;
    this.endpoint = endpoint;
    this.client = null;
  }

  /**
   * @private
   * client lazy loading, aka create client if it doesnt exist,
   * else use the existing one
   */
  _loadClient () {
    if (this.client == null) {
      this.client = createClient()
    }
  }

  /**
   * GET ALL Req call for all entity records for given endpoint
   * @returns {Array.<Object>} An array of all entities of given endpoint
   */
  async getAsync () {

    this._loadClient()

    try {
        const urlString = this.controllerPath + '/' + this.endpoint
        const res = await this.client.get(urlString)
        return res.data
    } catch (error) {
        console.log(error)
        return [{}]
    }
  }

  /**
   * GET BY ID Req call for given id
   * @param {object} id of entity to get
   * @returns {Object} Entity found
   */
  async getPostAsync (id) {

    this._loadClient()

    try {
        const urlString = this.controllerPath + '/' + this.endpoint + '/' + id
        const res = this.client.get(urlString)
        return res.data
    } catch (error) {
        console.log(error)
        return {}
    }
  }

}
