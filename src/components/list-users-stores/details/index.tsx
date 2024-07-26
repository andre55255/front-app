import styled from "styled-components";
import { UsersStoresSaveType } from "../../../types/api-smart-hint/users-stores-save";
import LoadingSpinnerComponent from "../../utils/loading-spinner";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";
import {
    formatCNPJ,
    formatCPF,
    formatDateTimePtBr,
    formatPhoneNumberPtBr,
    formatStateRegistration,
    formatStrToDatePtBr,
} from "../../../helpers/methods-helpers";

const ContainerStyled = styled.div<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
`;

const ContainerItemStyled = styled.div<StyledComponentProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
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

type Props = {
    data: UsersStoresSaveType | undefined;
    isLoadingDetails: boolean;
    handleCloseModal: () => void;
};

export default function DetailsUsersStoreComponent({
    data,
    isLoadingDetails,
    handleCloseModal,
}: Props) {
    return (
        <ContainerStyled>
            {isLoadingDetails && <LoadingSpinnerComponent />}
            <ContainerItemStyled>
                <TitleStyled>ID:</TitleStyled>
                <DataStyled>{data?.id}</DataStyled>
            </ContainerItemStyled>
            <ContainerItemStyled>
                <TitleStyled>Nome/Razão Social:</TitleStyled>
                <DataStyled>{data?.nameOrCorporateReason}</DataStyled>
            </ContainerItemStyled>
            <ContainerItemStyled>
                <TitleStyled>Email:</TitleStyled>
                <DataStyled>{data?.email}</DataStyled>
            </ContainerItemStyled>
            <ContainerItemStyled>
                <TitleStyled>Telefone:</TitleStyled>
                <DataStyled>
                    {formatPhoneNumberPtBr(data?.phoneNumber ?? "")}
                </DataStyled>
            </ContainerItemStyled>
            <ContainerItemStyled>
                <TitleStyled>Tipo:</TitleStyled>
                <DataStyled>
                    {data?.personType === "F"
                        ? "Pessoa Física"
                        : "Pessoa Jurídica"}
                </DataStyled>
            </ContainerItemStyled>
            <ContainerItemStyled>
                <TitleStyled>
                    {data?.personType === "F" ? "CPF" : "CNPJ"}:
                </TitleStyled>
                <DataStyled>
                    {data?.personType === "F"
                        ? formatCPF(data.cpfCnpj ?? "")
                        : formatCNPJ(data?.cpfCnpj ?? "")}
                </DataStyled>
            </ContainerItemStyled>
            {data?.stateRegistration && (
                <ContainerItemStyled>
                    <TitleStyled>Inscrição Estadual:</TitleStyled>
                    <DataStyled>
                        {formatStateRegistration(data.stateRegistration)}
                    </DataStyled>
                </ContainerItemStyled>
            )}
            {data?.gender && (
                <ContainerItemStyled>
                    <TitleStyled>Gênero:</TitleStyled>
                    <DataStyled>
                        {data?.personType === "M"
                            ? "Masculino"
                            : data.personType === "F"
                            ? "Feminino"
                            : "Outro"}
                    </DataStyled>
                </ContainerItemStyled>
            )}
            {data?.birthDate && (
                <ContainerItemStyled>
                    <TitleStyled>Data de nascimento:</TitleStyled>
                    <DataStyled>
                        {formatStrToDatePtBr(data.birthDate)}
                    </DataStyled>
                </ContainerItemStyled>
            )}
            <ContainerItemStyled>
                <TitleStyled>Está bloquado?</TitleStyled>
                <DataStyled>{data?.isBlocked ? "Sim" : "Não"}</DataStyled>
            </ContainerItemStyled>
            {data?.createdAt && (
                <ContainerItemStyled>
                    <TitleStyled>Data de cadastro:</TitleStyled>
                    <DataStyled>
                        {formatDateTimePtBr(data.createdAt)}
                    </DataStyled>
                </ContainerItemStyled>
            )}
        </ContainerStyled>
    );
}
