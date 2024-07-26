import styled from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";

const DrawerContainerStyled = styled.div<StyledComponentProps & { isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
    width: 300px;
    height: 100%;
    background-color: ${props => props.theme.bodyDrawerColor};
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    transition: left 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
`;

const OverlayStyled = styled.div<StyledComponentProps & { isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const DrawerHeaderStyled = styled.div<StyledComponentProps>`
    padding: 16px;
    background-color: ${props => props.theme.headerDrawerBgColor};
    color: ${props => props.theme.headerDrawerTxtColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DrawerHeaderTitlestyled = styled.p<StyledComponentProps>`
    font-size: .9rem;
    color: ${props => props.theme.headerDrawerTxtColor};
    font-weight: 600;
`;

const DrawerContentStyled = styled.div<StyledComponentProps>`
    padding: 16px;
    width: 100%;
`;

const CloseButtonStyled = styled.button<StyledComponentProps>`
    background: none;
    border: none;
    color: ${props => props.theme.headerDrawerTxtColor};
    font-size: 1.2rem;
    cursor: pointer;
`;

type Props = {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function DrawerComponent({ title, isOpen, onClose, children }: Props) {
    return (
        <>
            <OverlayStyled isOpen={isOpen} onClick={onClose} />
            <DrawerContainerStyled isOpen={isOpen}>
                <DrawerHeaderStyled>
                    <DrawerHeaderTitlestyled>{title}</DrawerHeaderTitlestyled>
                    <CloseButtonStyled onClick={onClose}>&times;</CloseButtonStyled>
                </DrawerHeaderStyled>
                <DrawerContentStyled>{children}</DrawerContentStyled>
            </DrawerContainerStyled>
        </>
    );
}
