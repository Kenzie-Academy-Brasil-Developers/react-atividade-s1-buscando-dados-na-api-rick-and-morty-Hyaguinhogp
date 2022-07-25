import { useEffect, useState } from "react";
import CharCard from "../CharCard";
import { Chars, CharsHeader } from "./styles";


const Characters = () => {

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then((res) => res.json())
            .then((res) => {
                setCharacterList(res.results)
            });
    })

    return (
        <Chars>
            <CharsHeader>
                <h1>Meus personagens</h1>
            </CharsHeader>

            <ul>
                {
                    characterList.map((char) => {
                        return (<CharCard key={char.id} character={char} />)
                    })
                }
            </ul>
        </Chars>
    );
}

export default Characters;