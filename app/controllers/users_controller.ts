import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async displayUser({ view }: HttpContext) {
    const users = await User.all()
    return view.render('pages/user', { users })
  }

  async displayCreateUser({ view }: HttpContext) {
    return view.render('pages/forms/add_user')
  }

  async create({ request, response, session }: HttpContext) {
    const { nom, email, password, passwordConfirm, role } = request.all()
    if (password === passwordConfirm) {
      const user = new User()
      user.fullName = nom
      user.email = email
      user.password = password
      user.role = role
      try {
        await user.save()
        return response.redirect().toRoute('userView')
      } catch (e) {
        session.flash('error', e.message)
        return response.redirect().toRoute('createUserView')
      }
    } else {
      session.flash(
        'error',
        'Le mot de passe de confirmation ne correspond pas au mot de passe initial !'
      )
      return response.redirect().toRoute('createUserView')
    }
  }
}
