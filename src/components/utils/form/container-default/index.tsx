import styled from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";
import ButtonSubmitComponent from "../button-submit";
import LoadingSpinnerComponent from "../../loading-spinner";
import TitlePageComponent from "../../title-page";
import ButtonOutlineComponent from "../button-outline";

const FormStyled = styled.form<
    StyledComponentProps & { isNotPadding?: boolean }
>`
    width: 100%;
    padding: ${(props) => (props.isNotPadding ? "0" : "0 100px")};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
        padding: 0 20px;
    }
`;

const SeparatorStyled = styled.div<StyledComponentProps>`
    height: 1rem;
`;

type Props = {
    children: React.ReactNode;
    isFetching: boolean;
    isLoadingData: boolean;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    onClickBtnSecondaryForm?: () => any;
    btnSecondaryFormTitle?: string;
    title?: string;
    isNotPadding?: boolean;
};

export default function FormContainerDefaultComponent({
    children,
    isFetching,
    title,
    isLoadingData,
    handleSubmit,
    onClickBtnSecondaryForm,
    btnSecondaryFormTitle,
    isNotPadding,
}: Props) {
    return (
        <FormStyled
            autoComplete="off"
            onSubmit={handleSubmit}
            isNotPadding={isNotPadding}
        >
            {title && (
                <>
                    <TitlePageComponent text={title} />
                    <SeparatorStyled />
                </>
            )}
            {isLoadingData && <LoadingSpinnerComponent />}
            <SeparatorStyled />
            {children}
            <SeparatorStyled />
            {isFetching ? (
                <LoadingSpinnerComponent />
            ) : (
                <ButtonSubmitComponent disabled={isFetching}>
                    Enviar
                </ButtonSubmitComponent>
            )}
            {btnSecondaryFormTitle &&
                onClickBtnSecondaryForm &&
                !isFetching && (
                    <>
                        <SeparatorStyled />
                        <ButtonOutlineComponent onClick={onClickBtnSecondaryForm}>{btnSecondaryFormTitle}</ButtonOutlineComponent>
                    </>
                )}
        </FormStyled>
    );
}
