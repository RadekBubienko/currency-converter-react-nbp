import styled from "styled-components";

export const ClockContainer = styled.div`
    text-align: right;
    padding: 0 3px 15px 0;
    font-family: "Space Mono", monospace;
    color: ${({ theme }) => theme.color.darkGrey};
    font-size: 13px;
`;