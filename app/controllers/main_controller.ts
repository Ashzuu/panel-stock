import type { HttpContext } from '@adonisjs/core/http'

export default class MainsController {
  async displayHome({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async displayReport({ view }: HttpContext) {
    return view.render('pages/forms/report_error')
  }
}
