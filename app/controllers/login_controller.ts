import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class LoginController {
  async displayLogin({ view }: HttpContext) {
    return view.render('pages/login')
  }

  async login({ request, auth, response, session }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      return response.redirect().toRoute('home')
    } catch (e) {
      session.flash('error', e.message)
      return response.redirect().toRoute('loginView')
    }
  }

  async logout({ auth, response }: HttpContext) {
    if (auth.isAuthenticated) {
      auth.use('web').logout()
    }
    response.redirect().toRoute('home')
  }
}
