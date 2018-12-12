/**
 * Mock Only for Dev or Test
 */

import MockAdapter from 'axios-mock-adapter'
import instance from './axios'

export default new MockAdapter(instance)
