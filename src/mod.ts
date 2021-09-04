import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router.get(ctx => {
  ctx.response.body = 'Hello world!'
})

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: Deno.env.get('PORT') })
