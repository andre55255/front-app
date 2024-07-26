import styled from "styled-components";
import TitlePageComponent from "../utils/title-page";
import ButtonAddComponent from "../utils/buttons/button-add";
import ButtonFilterComponent from "../utils/buttons/button-filter";
import TableDataComponent, { Column } from "../utils/table";
import { useEffect, useState } from "react";
import { formatDateTimePtBr, formatPhoneNumberPtBr } from "../../helpers/methods-helpers";
import { UsersStoresGetType } from "../../types/api-smart-hint/users-stores-get";
import { useUsersStoresRequest } from "../../services/smart-hint-api/users-stores/get-all";
import { useToastApp } from "../../hooks/use-toast-app";
import LoadingSpinnerComponent from "../utils/loading-spinner";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../helpers/routes-pages";

const ContainerStyled = styled.div`
    padding: 20px;
`;

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`;

const TableContainerStyled = styled.div`
    margin-top: 20px;
`;

export default function HomeComponent() {
    const navigate = useNavigate();
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
    const [usersStoresGetList, setUsersStoresGetList] = useState<
        UsersStoresGetType[]
    >([]);
    const { getUsersStores } = useUsersStoresRequest();
    const { showToast } = useToastApp();

    const findUsersStores = async () => {
        setIsLoadingData(true);

        const resultReq = await getUsersStores();

        setIsLoadingData(false);

        if (resultReq.status !== "OK") {
            await showToast("error", resultReq.message);
            return;
        }

        if (resultReq.object) {
            setUsersStoresGetList(resultReq.object);
        }
    };

    useEffect(() => {
        findUsersStores();
    }, []);

    const columnsTableData: Column<UsersStoresGetType>[] = [
        {
            titleStr: "Nome/Razão Social",
            rowRender: (row) => row.nameOrCorporateReason,
        },
        { titleStr: "Email", rowRender: (row) => row.email },
        { titleStr: "Telefone", rowRender: (row) => formatPhoneNumberPtBr(row.phoneNumber) },
        {
            titleStr: "Data de cadastro",
            rowRender: (row) => formatDateTimePtBr(row.createdAt),
        },
        {
            titleStr: "Bloqueado",
            rowRender: (row) => (
                <input type="checkbox" checked={row.isBlocked} disabled />
            ),
        },
    ];

    const handleOnClickAddCustomer = () => {
        navigate(routesPages.createUsersStores);
    };

    const handleOnClickFilter = () => {};

    return (
        <ContainerStyled>
            <HeaderStyled>
                <TitlePageComponent text="Consulte os seus Clientes cadastrados na sua Loja ou realize o cadastro de novos Clientes" />
                <ButtonAddComponent
                    title="Adicionar Cliente"
                    onClick={handleOnClickAddCustomer}
                />
            </HeaderStyled>
            <ButtonFilterComponent
                title="Filtrar"
                onClick={handleOnClickFilter}
            />
            <TableContainerStyled>
                {isLoadingData ? (
                    <LoadingSpinnerComponent />
                ) : (
                    <TableDataComponent
                        selectedIndexes={selectedIndexes}
                        setSelectedIndexes={setSelectedIndexes}
                        handleOnPressEdit={(row) => {
                            console.log(row.id);
                        }}
                        data={usersStoresGetList}
                        columns={columnsTableData}
                    />
                )}
            </TableContainerStyled>
        </ContainerStyled>
    );
}
