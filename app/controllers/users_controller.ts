import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { userValidator } from '#validators/user'

export default class UsersController {
  async displayUser({ view }: HttpContext) {
    const users = await User.all()
    return view.render('pages/user', { users })
  }

  async displayCreateUser({ view }: HttpContext) {
    return view.render('pages/forms/add_user')
  }

  async create({ request, response, session }: HttpContext) {
    const { nom, email, password, role } = await request.validateUsing(userValidator)

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
  }

  async delete({ response, params }: HttpContext) {
    const user = await User.find(params.id)
    await user?.delete()
    return response.redirect().toRoute('userView')
  }
}
