import { petsService } from "../services/PetsService.js";
import BaseController from "../utils/BaseController.js";




export class PetsController extends BaseController {
  constructor() {
    super('api/pets')
    this.router.get('', this.getPets)
    this.router.get('/:creatorId', this.getOnePet)
    this.router.get('/search', this.searchPets)


  }


  async getPets(request, response, next) {
    try {
      const pets = await petsService.getPets()
      response.send(pets)
    } catch (error) {
      next.error
    }
  }


  async getOnePet(request, response, next) {
    try {
      const petid = request.params.creatorId
      const pet = await petsService.getOnePet(petid)
      response.send(pet)
    } catch (error) {
      next.error
    }
  }


  async searchPets(request, response, next) {
    try {
      const searchQuery = request.query
      const pets = await petsService.searchPets(searchQuery)
      response.send(pets)
    } catch (error) {
      next.error
    }
  }








}










