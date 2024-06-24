import { sanitizeResponseBody } from './sanitize-response-body'

describe('Sanitize response body', () => {
  test('Sanitize plain object', () => {
    const data = {
      accessToken: 'token-string',
      password: 'password-string',
      fullName: 'Test',
    }
    const result = sanitizeResponseBody(data)
    expect(result).toHaveProperty('fullName')
    expect(result).not.toHaveProperty('accessToken')
    expect(result).not.toHaveProperty('password')
  })
})
