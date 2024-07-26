import styled from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";
import ButtonSubmitComponent from "../button-submit";
import LoadingSpinnerComponent from "../../loading-spinner";
import TitlePageComponent from "../../title-page";

const FormStyled = styled.form<StyledComponentProps>`
    width: 100%;
    padding: 0 100px;

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
    title: string;
};

export default function FormContainerDefaultComponent({
    children,
    isFetching,
    title,
    isLoadingData,
    handleSubmit,
}: Props) {
    return (
        <FormStyled autoComplete="off" onSubmit={handleSubmit}>
            <TitlePageComponent text={title} />
            <SeparatorStyled />
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
        </FormStyled>
    );
}
