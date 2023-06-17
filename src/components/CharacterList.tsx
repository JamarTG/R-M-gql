import Character from "./Character";
import { CharacterT } from "../types";
import { useState } from "react";
import CharacterDetailsModal from "./CharacterDetailsModal";

export default function CharacterList({
  characters,
}: {
  characters: CharacterT[];
}) {
  const [openModal, setOpenModal] = useState(false);
  const [modalCharacter, setModalCharacter] = useState<CharacterT>(
    {} as CharacterT
  );

  function toggleModal(character: CharacterT, action: "OPEN" | "CLOSE") {
    action === "OPEN" ? setOpenModal(true) : setOpenModal(false);
    action === "OPEN"
      ? setModalCharacter(character)
      : setModalCharacter(modalCharacter);
  }

  return (
    <section className="content-font grid">
      {openModal ? (
        <CharacterDetailsModal
          toggleModal={toggleModal}
          character={modalCharacter}
        />
      ) : null}
      {characters.map((character: CharacterT) => (
        <div key={character.id}>
          <Character
            character={character}
            toggleModal={toggleModal}
            openModal={openModal}
          />
        </div>
      ))}
    </section>
  );
}
