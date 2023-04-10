import { type ICharacter } from '../models/character_interface'

export function sortByName( results : ICharacter[]) {
  return results.sort(function (a: ICharacter, b: ICharacter) {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
}
