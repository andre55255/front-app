import styled from "styled-components";
import { StyledComponentProps } from "../../../../../types/styled-component/styled-component-props";

const ContainerMainStyled = styled.div<StyledComponentProps>`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
`;

type Props = {
    children: React.ReactNode;
};

export default function RowContainerInputComponent({ children }: Props) {
    return <ContainerMainStyled>{children}</ContainerMainStyled>;
}
