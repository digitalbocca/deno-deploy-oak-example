import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router.get('/', ctx => {
  ctx.response.status = 200
  ctx.response.type = 'json'
  ctx.response.body = {
    appName: 'deno-deploy-oak-example'
  }
})

router.get('/users/:id', ctx => {
  ctx.response.status = 200
  ctx.response.type = 'json'
  ctx.response.body = {
    userID: ctx.params.id
  }
})

router.all('/:slug', ctx => {
  ctx.response.status = 404
  ctx.response.type = 'json'
  ctx.response.body = {
    appName: 'deno-deploy-oak-example',
    msg: 'Página não encontrada.',
    recurso: ctx.params.slug
  }
})

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 3000/*Deno.env.get('PORT')*/ })
