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
import useGetByFilterUsersStoresRequest from "../../services/smart-hint-api/users-stores/get-by-filter";
import InputSwitchComponent from "../utils/form/inputs/input-switch";
import { UsersStoresSaveType } from "../../types/api-smart-hint/users-stores-save";
import useGetByIdUsersStoresRequest from "../../services/smart-hint-api/users-stores/get-by-id";
import ModalComponent from "../utils/modal";
import DetailsUsersStoreComponent from "./details";
import DeleteUsersStoresComponent from "./delete";
import useDeleteUsersStoresRequest from "../../services/smart-hint-api/users-stores/delete";

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

    const [isVisibleModalDelete, setIsVisibleModalDelete] = useState<boolean>(false);
    const [idDelete, setIdDelete] = useState<string>();

    const [isVisibleModalDetails, setIsVisibleModalDetails] =
        useState<boolean>(false);
    const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(false);
    const [usersStoresDetails, setUsersStoresDetails] = useState<
        UsersStoresSaveType | undefined
    >(undefined);

    const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
    const [filterUsersStores, setFilterUsersStores] =
        useState<UsersStoresFilterType>();
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
    const [usersStoresGetList, setUsersStoresGetList] = useState<
        UsersStoresGetType[]
    >([]);

    const { deleteUsersStores } = useDeleteUsersStoresRequest();
    const { getByIdUsersStores } = useGetByIdUsersStoresRequest();
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
                <InputSwitchComponent
                    type="checkbox"
                    isInvalid={false}
                    valueBool={row.isBlocked}
                    onChangeBool={() => {}}
                    disabled
                />
            ),
        },
    ];

    const handleOnClickAddCustomer = () => {
        navigate(routesPages.createUsersStores);
    };

    const handleOnClickFilter = () => {
        setIsVisibleDrawerFilter(!isVisibleDrawerFilter);
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

    const handleGetDetails = async (id: string) => {
        setIsLoadingDetails(true);
        setIsVisibleModalDetails(true);

        const result = await getByIdUsersStores(id);

        setIsLoadingDetails(false);

        if (result.status !== "OK") {
            showToast("error", result.message);
            return;
        }

        if (result.object) {
            setUsersStoresDetails(result.object);
        }
    };

    const handleConfirmDelete = async (id: string | undefined) => {
        setIsLoadingDetails(true);
        const result = await deleteUsersStores(id);
        setIsLoadingDetails(false);

        if (result.status !== "OK") {
            showToast("error", result.message);
            return;
        }
        
        setIsVisibleModalDelete(false);
        await findUsersStores();
    }

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
            <ModalComponent
                isOpen={isVisibleModalDetails}
                onClose={() => setIsVisibleModalDetails(false)}
                title="Detalhes de comprador"
            >
                <DetailsUsersStoreComponent
                    data={usersStoresDetails}
                    handleCloseModal={() => setIsVisibleModalDetails(false)}
                    isLoadingDetails={isLoadingDetails}
                />
            </ModalComponent>
            <ModalComponent
                isOpen={isVisibleModalDelete}
                onClose={() => setIsVisibleModalDelete(false)}
                title="Remover comprador"
            >
                <DeleteUsersStoresComponent 
                    isLoadingData={isLoadingDetails}
                    onConfirm={handleConfirmDelete}
                    id={idDelete}
                />
            </ModalComponent>
            <HeaderStyled>
                <TitlePageComponent text="Consulte os seus clientes cadastrados na sua loja ou realize o cadastro de novos clientes" />
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
                        handleOnPressDetails={(row) => {
                            handleGetDetails(row.id + "");
                        }}
                        handleOnPressDelete={(row) => {
                            setIdDelete(row.id + "");
                            setIsVisibleModalDelete(true);
                        }}
                        data={usersStoresGetList}
                        columns={columnsTableData}
                    />
                )}
            </TableContainerStyled>
        </ContainerStyled>
    );
}
