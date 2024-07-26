import styled from "styled-components";
import { StyledComponentProps } from "../../../../../types/styled-component/styled-component-props";

const ContainerMainStyled = styled.div<StyledComponentProps & { weight: number; }>`
    flex: ${props => props.weight};
`;

type Props = {
    children: React.ReactNode;
    weight: number;
};

export default function HalfContainerInputComponent({ children, weight }: Props) {
    return <ContainerMainStyled weight={weight}>{children}</ContainerMainStyled>;
}
