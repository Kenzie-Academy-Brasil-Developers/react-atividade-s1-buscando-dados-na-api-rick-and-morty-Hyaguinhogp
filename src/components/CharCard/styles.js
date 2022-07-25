import styled from "styled-components";

export const CharCardContainer = styled.li`

    display: flex;
    align-items: center;
    flex-direction: column;
    width: 340px;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    background-color: ${({character}) => character.status === 'Alive' ? '#2A91EB' : '#EB707F'};
    color: ${({character}) => character.status === 'Alive' ? '#01075C' : '#5C0013'};
    border: 1px solid ${({character}) => character.status === 'Alive' ? '#01075C' : '#5C0013'};
    border-radius: 4px;

    h2 {
        font-weight: 600;
        margin-bottom: 20px;
    }

    figure {
        width: fit-content;
    }
`