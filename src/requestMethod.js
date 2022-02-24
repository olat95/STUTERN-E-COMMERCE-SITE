import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGRlN2UxYWZkM2M5MDFlYTcyOTJlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzk4ODM4MywiZXhwIjoxNjM4MjQ3NTgzfQ.-wDAI0wtrsiteDq_7UXkZOFGsoS9ufr3j7RQZK8JzkM'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
})
