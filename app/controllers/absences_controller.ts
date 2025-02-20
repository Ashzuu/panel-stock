import type { HttpContext } from '@adonisjs/core/http'

export default class AbsencesController {
  async displayAbsence({ view }: HttpContext) {
    return view.render('pages/absence')
  }
}
