import { StyledParagraph } from "./styled";

const Result = ({ result }) => (
    <StyledParagraph>
        {result !== undefined && (
          <>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
            {" "}
            <strong>
              {result.targetAmount.toFixed(2)}&nbsp;{result.code}
            </strong>
          </>   
        )}
    </StyledParagraph>
);

export default Result;