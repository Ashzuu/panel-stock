import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async displayLogin({ view }: HttpContext) {
    return view.render('pages/login')
  }
}
