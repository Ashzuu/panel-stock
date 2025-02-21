import type { HttpContext } from '@adonisjs/core/http'
import Absence from '#models/absence'
import db from '@adonisjs/lucid/services/db'
import { absenceValidator } from '#validators/absence'

export default class AbsencesController {
  async displayAbsence({ view }: HttpContext) {
    const absences = await Absence.all()
    return view.render('pages/absence', { absences })
  }

  async displayCreateAbsence({}: HttpContext) {}

  async create({ request, response, session }: HttpContext) {
    try {
      let { prenom, nom, dateAbsence, raison } = await request.validateUsing(absenceValidator)
      prenom = prenom.charAt(0).toUpperCase() + prenom.slice(1)
      nom = nom.toUpperCase()
      const musiciens = await db
        .from('musiciens')
        .where('nom', '=', nom)
        .andWhere('prenom', '=', prenom)
      if (musiciens.length === 1) {
        const absence = new Absence()
        absence.date_absence = dateAbsence
        absence.raison = raison
        absence.id_musicien = musiciens[0].id
        await absence.save()
        session.flash('success', 'Votre absence a bien été enregistré !')
        return response.redirect().toRoute('home')
      } else {
        session.flash(
          'error',
          "Le nom et le prénom ne sont pas renseignées dans la base de données, demandez à un administrateur ou vérifiez l'orthographe."
        )
        response.redirect().toRoute('home')
      }
    } catch (e) {
      console.log(e.message)
      session.flash('error', e.message)
      return response.redirect().toRoute('home')
    }
  }

  async delete({ response, params }: HttpContext) {
    const absence = await Absence.find(params.id)
    await absence?.delete()
    return response.redirect().toRoute('absenceView')
  }
}
