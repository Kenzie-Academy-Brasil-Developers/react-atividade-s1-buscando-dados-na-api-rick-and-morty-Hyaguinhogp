import { CharCardContainer } from "./styles";

const CharCard = ({character}) => {

    const charName = character.name.length > 15 ? character.name.substring(0, 14) + '...' : character.name;

    return (
        <CharCardContainer character={character}>
            <h2>{charName}</h2>
            <h2>{character.species}</h2>
            <figure>
                <img src={character.image} alt="" />
            </figure>
            
        </CharCardContainer>
    );
}

export default CharCard;