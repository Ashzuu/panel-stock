import type { HttpContext } from '@adonisjs/core/http'
import Musicien from '#models/musicien'
import { musicienValidator } from '#validators/musicien'

export default class MusiciensController {
  async displayMusiciens({ view }: HttpContext) {
    const musiciens = await Musicien.all()
    return view.render('pages/musicien', { musiciens })
  }

  async displayCreateMusicien({ view }: HttpContext) {
    return view.render('pages/forms/add_musicien')
  }

  async create({ request, response, session }: HttpContext) {
    const { prenom, nom, instrument, naissance, dimancheOnly, renfort } =
      await request.validateUsing(musicienValidator)
    try {
      const musicien = new Musicien()
      musicien.nom = nom
      musicien.prenom = prenom
      musicien.renfort = renfort || false
      musicien.dimanche_only = dimancheOnly || false
      musicien.instrument = instrument
      musicien.naissance = naissance
      musicien.chef_pupitre = false
      await musicien.save()
      return response.redirect().toRoute('musicienView')
    } catch (e) {
      session.flash('error', e.message)
      return response.redirect().toRoute('createMusicienView')
    }
  }

  async delete({ response, params }: HttpContext) {
    const musicien = await Musicien.find(params.id)
    await musicien?.delete()
    return response.redirect().toRoute('musicienView')
  }
}
