import { dbContext } from "../db/DbContext.js"



class PetsService {


  async getPets() {
    const pets = await dbContext.Pets.find()
    return pets
  }


  async getOnePet(petid) {
    const pet = await dbContext.Pets.findById(petid)
    return pet
  }

  async searchPets(searchQuery) {

    let sortby = searchQuery.sort
    delete searchQuery.sort

    let limitby = searchQuery.limit
    delete searchQuery.limit


    const pets = await dbContext.Pets.find(searchQuery).sort(sortby).limit(limitby).populate('creator')
    return pets
  }






}




export const petsService = new PetsService()



