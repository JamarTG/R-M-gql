import CharacterDetailsPreview from "./CharacterDetailsPreview";
import { CharacterT } from "../types";

export default function Character({
  character,
  toggleModal,
  openModal,
}: {
  character: CharacterT;
  toggleModal: any;
  openModal: boolean;
}) {
  return (
    <div key={character.id}>
      <CharacterDetailsPreview character={character} />
      {!openModal ? (
        <button className={!openModal ? "" : "hide"} onClick={() => toggleModal(character, "OPEN")}>
          Show Character Details
        </button>
      ) : null}
    
    </div>
  );
}
