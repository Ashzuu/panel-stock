import type { HttpContext } from '@adonisjs/core/http'
import Musicien from '#models/musicien'

export default class MusiciensController {
  async displayMusiciens({ view }: HttpContext) {
    const musiciens = await Musicien.all()
    return view.render('pages/musicien', { musiciens })
  }

  async displayCreateMusicien({ view }: HttpContext) {
    return view.render('pages/forms/add_musicien')
  }
}
