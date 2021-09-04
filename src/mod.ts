import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router.get('/', ctx => {
  ctx.response.body = 'Hello world!'
})

router.get('/users/:id', ctx => {
  ctx.response.body = `User ID: ${ctx.params.id}`
})

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: Deno.env.get('PORT') })
