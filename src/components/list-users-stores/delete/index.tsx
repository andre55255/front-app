import styled from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";
import ButtonDeleteComponent from "../../utils/buttons/button-delete";
import LoadingSpinnerComponent from "../../utils/loading-spinner";

const ContainerStyled = styled.div<StyledComponentProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
`;

const TitleStyled = styled.span<StyledComponentProps>`
    font-size: 1rem;
    font-weight: 800;
    color: ${(props) => props.theme.colorLabelForm};
`;

const DataStyled = styled.span<StyledComponentProps>`
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colorLabelForm};
`;

const ContainerSpinner = styled.div<StyledComponentProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`;

type Props = {
    id: string | undefined;
    onConfirm: (id: string | undefined) => any;
    isLoadingData: boolean;
};

export default function DeleteUsersStoresComponent({
    id,
    onConfirm,
    isLoadingData,
}: Props) {
    return (
        <ContainerStyled>
            <TitleStyled>
                Deseja realmente deletar o comprador de registro "{id}"?
            </TitleStyled>
            <DataStyled>OBS: Não será possível desfazer depois!</DataStyled>
            <ContainerSpinner>
                {isLoadingData && <LoadingSpinnerComponent />}
                <ButtonDeleteComponent
                    title="Confirmar"
                    onClick={() => onConfirm(id)}
                    isOutline={true}
                />
            </ContainerSpinner>
        </ContainerStyled>
    );
}
