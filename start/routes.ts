/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Route from '@adonisjs/core/services/router'

const mainController = () => import('#controllers/main_controller')
const loginController = () => import('#controllers/login_controller')
const userController = () => import('#controllers/login_controller')
const absenceController = () => import('#controllers/absences_controller')
const musicienController = () => import('#controllers/musiciens_controller')

// Views
Route.get('/', [mainController, 'displayHome']).as('home')
Route.get('/authenticate', [loginController, 'displayLogin']).as('loginView')
Route.get('/utilisateurs', [userController, 'displayUser']).as('userView')
Route.get('/absences', [absenceController, 'displayAbsence']).as('absenceView')
Route.get('/musiciens', [musicienController, 'displayMusiciens']).as('musicienView')
