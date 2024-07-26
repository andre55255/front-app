import styled from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";
import { FaTimes } from "react-icons/fa";

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

const ModalContainerStyled = styled.div<StyledComponentProps & { isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    min-width: 60%;
    max-width: 90%;
    min-height: 40%;
    background-color: ${props => props.theme.bodyDrawerColor};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    flex-direction: column;
    border-radius: 8px;
`;

const ModalHeaderStyled = styled.div<StyledComponentProps>`
    padding: 16px;
    background-color: ${props => props.theme.headerDrawerBgColor};
    color: ${props => props.theme.headerDrawerTxtColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const ModalHeaderTitleStyled = styled.p<StyledComponentProps>`
    color: ${props => props.theme.headerDrawerTxtColor};
    font-size: 1rem;
    font-weight: 800;
`;

const ModalContentStyled = styled.div<StyledComponentProps>`
    padding: 16px;
    max-height: 400px;
    overflow-y: auto;
`;

const CloseButtonStyled = styled.button<StyledComponentProps>`
    background: none;
    border: none;
    color: ${props => props.theme.headerDrawerTxtColor};
    font-size: 1.2rem;
    cursor: pointer;
`;

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

export default function ModalComponent({
    isOpen,
    onClose,
    title,
    children
}: Props) {
    return (
        <>
            <OverlayStyled isOpen={isOpen} onClick={onClose} />
            <ModalContainerStyled isOpen={isOpen}>
                <ModalHeaderStyled>
                    <ModalHeaderTitleStyled>{title}</ModalHeaderTitleStyled>
                    <CloseButtonStyled onClick={onClose}>
                        <FaTimes />
                    </CloseButtonStyled>
                </ModalHeaderStyled>
                <ModalContentStyled>{children}</ModalContentStyled>
            </ModalContainerStyled>
        </>
    );
}
