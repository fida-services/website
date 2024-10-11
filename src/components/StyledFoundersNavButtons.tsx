import styled from 'styled-components';
import { colors } from 'theme';

export const StyledMenuModalButton = styled.button`
    color: ${colors.white};
    background: unset;
    text-align: center;
    transition: 0.5s;
    border: none;
    width: fit-content;
    font-size: 1rem;
    padding: 10px 18px;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
    opacity: 0.6;
    }
`;

export const StyledMenuMainButton = styled.button`
    color: ${colors.white};
    background: unset;
    text-align: center;
    transition: 0.5s;
    border: 1px solid ${colors.white};
    border-radius: 25px;
    width: fit-content;
    font-size: 1rem;
    padding: 10px 18px;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
    opacity: 0.6;
    }
`;
