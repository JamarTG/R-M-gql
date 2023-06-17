import { CharacterT } from "../types";

export default function CharacterDetailsModal( {character , toggleModal }: {character : CharacterT , toggleModal : any} ) { 

  console.log("the character",character)
  return (
    <dialog key={character.id} open>
        <img src={character.image} alt={character.name} />
          <h2 className="golden">{character.name}</h2>
          <p>Gender {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Location: {character.location.name}</p>
          <button className="close-btn" onClick={() => toggleModal(character,"CLOSE")}>CLOSE</button>
    </dialog>
  )
}