import styled from "styled-components";
import { StyledComponentProps } from "../../../../../types/styled-component/styled-component-props";

const ContainerMainStyled = styled.div<StyledComponentProps>`
    width: 100%;
`;

type Props = {
    children: React.ReactNode;
};

export default function FullContainerInputComponent({ children }: Props) {
    return <ContainerMainStyled>{children}</ContainerMainStyled>;
}
