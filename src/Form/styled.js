import styled from "styled-components";

export const StyledForm = styled.form``;

export const Fieldset = styled.fieldset`
    border: 3px solid ${({ theme }) => theme.color.lightTeal};
    padding: 12px;
    border-radius: 5px;
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
`;

export const Label = styled.span``;

export const LabelText = styled.span`
    width: 100%;
    max-width: 125px;
    display: inline-block;
    text-align: left;
    margin-right: 5px;
`;

export const Input = styled.input`
    border: 2px solid ${({ theme }) => theme.color.lightTeal};
    padding: 10px;
    width: 100%;
    max-width: 250px;
    border-radius: 5px;
    margin: 0px 5px 20px 0px;

    &:required {
        border-color: ${({ theme }) => theme.color.lightTeal};
    }
`;

export const Select = styled.select`
    border: 2px solid ${({ theme }) => theme.color.lightTeal};
    padding: 10px;
    width: 100%;
    max-width: 250px;
    border-radius: 5px;
    margin: 0px 5px 20px 0px;

    &:required {
        border-color: ${({ theme }) => theme.color.lightTeal};
    }
`;

export const Button = styled.button`
    text-align: center;
    width: 33.33333333334%;
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 5px;
    margin: 24px auto 12px;
    display: block;


@media (max-width: ${({ theme }) => theme.breakpoint.mobileMidButton}px) {
        width: 100%;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.darkGreen};
    }
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.teal};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson};
`;

export const Info = styled.p`
    font-size: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMid}px) {
        font-size: 10px;
    }
`;