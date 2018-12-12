/**
 * @see https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart/api
 */

import http from '../lib/http'

export default {
  alive() {
    return http('/alive')
      .then(res => {
        // eslint-disable-next-line no-console
        // console.log('[@hfe/vue-cli-plugin-axios-react] Talos Demo Public API Response: ', res)
        return res
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e)
        throw e
      })
  },
}
