import { expect, test } from "vitest"
import request from 'supertest'
import { server } from '../app.ts'
import { makeCourse } from "../tests/factories/make-course.ts"

test('get course by id', async () => {
  await server.ready()

  const course = await makeCourse()

  const response = await request(server.server)
    .get(`/courses/${course.id}`)

  expect(response.status).toEqual(200),
  expect(response.body).toEqual({
    course: {
      id: expect.any(String),
      title: expect.any(String),
      description: null,
    }
  })
})

test('return 404 for non existing courses', async () => {
  await server.ready()

  const response = await request(server.server)
    .get(`/courses/781b4faa-8c12-43ca-b1c2-5b8d610aaf4b`)

  expect(response.status).toEqual(404)
})