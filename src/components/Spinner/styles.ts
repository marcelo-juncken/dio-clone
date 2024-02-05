import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: relative;
    left: calc(50% - 10px - 2px);
    animation: ${rotate} 1s linear infinite;
`;