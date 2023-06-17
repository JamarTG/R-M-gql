import { CharacterT } from "../types";


export default function CharacterDetailsPreview( {character }: {character : CharacterT} ) {
    return ( <div key={character.id}>
              <img
                src={character.image}
                alt={character.name}
              />
              <h2>{character.name}</h2>
              <p>Created: {character.created}</p>
          
            </div>)
            }