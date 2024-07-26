import styled, { keyframes } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";

const spinStyled = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div<StyledComponentProps & { isOutline?: boolean; }>`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid ${(props) => props.isOutline ? "#ccc" : props.theme.loadingSpinnerColor};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spinStyled} 1s linear infinite;
`;

type Props = {
  isOutline?: boolean;
}

export default function LoadingSpinnerComponent({ isOutline }: Props) {
    return <SpinnerStyled isOutline={isOutline} />;
}
