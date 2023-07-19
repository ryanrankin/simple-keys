/**
 * Simple Key generator for react child nodes
 *
 * @author: Ryan N. Rankin <Ryan.Rankin@EntouchControls.com>
 * @see: Motivated by https://reactjs.org/docs/lists-and-keys.html#keys
 **/

class SimpleKeys {
  /**
   * @constructor
   * @param count
   * @returns {Uint32Array}
   */
  constructor(count = 1) {
    this.count = 1;
    this.keys = crypto.getRandomValues(new Uint32Array(count));
    return this.getKeys();
  }

  /**
   * getKeys
   *
   * @returns {Uint32Array}
   */
  getKeys() {
    return this.keys;
  }

  /**
   * getKey
   *
   * @param index
   * @returns {number}
   */
  getKey(index = 0) {
    return this.keys[index];
  }
}

export default SimpleKeys;
