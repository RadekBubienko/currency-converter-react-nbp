import styled from "styled-components";

export const Container = styled.main`
    background-color: ${({ theme }) => theme.color.lightGrey};
    max-width: 500px;
    margin: 0 10px;
    padding: 15px 30px 10px 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px ${({ theme }) => theme.color.black};
    height: 480px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 525px;
        margin: 0 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMid}px) {
        height: 545px;
        margin: 0 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        height: 630px;
        margin: 0 10px;
    }
`;