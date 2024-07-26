import styled from "styled-components";
import TitlePageComponent from "../utils/title-page";
import ButtonAddComponent from "../utils/buttons/button-add";
import ButtonFilterComponent from "../utils/buttons/button-filter";
import TableDataComponent, { Column } from "../utils/table";
import { useEffect, useState } from "react";
import {
    formatDateTimePtBr,
    formatPhoneNumberPtBr,
} from "../../helpers/methods-helpers";
import { UsersStoresGetType } from "../../types/api-smart-hint/users-stores-get";
import { useUsersStoresRequest } from "../../services/smart-hint-api/users-stores/get-all";
import { useToastApp } from "../../hooks/use-toast-app";
import LoadingSpinnerComponent from "../utils/loading-spinner";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../helpers/routes-pages";
import DrawerComponent from "../utils/drawer";
import FilterUsersStoresComponent from "./filters";
import { UsersStoresFilterType } from "../../types/api-smart-hint/users-stores-filter";
import ButtonResetComponent from "../utils/buttons/button-reset";
import useGetByFilterUsersStoresRequest from "../../services/smart-hint-api/users-stores/get-by-filter";
import { FormikHelpers } from "formik";

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

const ContainerFilterButtonsStyled = styled.div`
    display: flex;
    gap: 10px;
`;

const TableContainerStyled = styled.div`
    margin-top: 20px;
`;

export default function HomeComponent() {
    const navigate = useNavigate();

    const [isVisibleDrawerFilter, setIsVisibleDrawerFilter] =
        useState<boolean>(false);
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
    const [filterUsersStores, setFilterUsersStores] =
        useState<UsersStoresFilterType>();
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
    const [usersStoresGetList, setUsersStoresGetList] = useState<
        UsersStoresGetType[]
    >([]);

    const { getByFilterUsersStores } = useGetByFilterUsersStoresRequest();
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
        {
            titleStr: "Telefone",
            rowRender: (row) => formatPhoneNumberPtBr(row.phoneNumber),
        },
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

    const handleOnClickFilter = () => {
        setIsVisibleDrawerFilter(!isVisibleDrawerFilter);
    };

    const handleOnClickClearFilters = async () => {
        setFilterUsersStores({});

        await handleSubmitFilter({});
    };

    const handleSubmitFilter = async (values: UsersStoresFilterType) => {
        setIsLoadingData(true);
        const result = await getByFilterUsersStores(values);
        setIsLoadingData(false);

        if (result.status !== "OK") {
            showToast("error", result.message);
            return;
        }

        if (result.object) {
            setSelectedIndexes([]);
            setUsersStoresGetList(result.object);
            setIsVisibleDrawerFilter(false);
        }
    };

    return (
        <ContainerStyled>
            <DrawerComponent
                isOpen={isVisibleDrawerFilter}
                onClose={() => setIsVisibleDrawerFilter(!isVisibleDrawerFilter)}
                title="Filtrar Compradores"
            >
                <FilterUsersStoresComponent
                    isLoadingData={isLoadingData}
                    handleSubmit={handleSubmitFilter}
                    filterUsersStores={filterUsersStores}
                />
            </DrawerComponent>
            <HeaderStyled>
                <TitlePageComponent text="Consulte os seus Clientes cadastrados na sua Loja ou realize o cadastro de novos Clientes" />
                <ButtonAddComponent
                    title="Adicionar Cliente"
                    onClick={handleOnClickAddCustomer}
                />
            </HeaderStyled>
            <ContainerFilterButtonsStyled>
                <ButtonFilterComponent
                    title="Filtrar"
                    onClick={handleOnClickFilter}
                />
            </ContainerFilterButtonsStyled>
            <TableContainerStyled>
                {isLoadingData ? (
                    <LoadingSpinnerComponent />
                ) : (
                    <TableDataComponent
                        selectedIndexes={selectedIndexes}
                        setSelectedIndexes={setSelectedIndexes}
                        handleOnPressEdit={(row) => {
                            navigate(
                                routesPages.editUsersStores.replace(
                                    ":id",
                                    row.id + ""
                                )
                            );
                        }}
                        data={usersStoresGetList}
                        columns={columnsTableData}
                    />
                )}
            </TableContainerStyled>
        </ContainerStyled>
    );
}
