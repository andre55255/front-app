import styled from "styled-components";
import TitlePageComponent from "../utils/title-page";
import ButtonAddComponent from "../utils/buttons/button-add";
import ButtonFilterComponent from "../utils/buttons/button-filter";
import TableDataComponent, { Column } from "../utils/table";
import { useEffect, useState } from "react";
import { filterByIndexes } from "../../helpers/methods-helpers";
import { CustomersGetType } from "../../types/api-smart-hint/customers-get-";
import moment from "moment";

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

interface Cliente {
    id: number;
    nomeRazaoSocial: string;
    email: string;
    telefone: string;
    dataCadastro: string;
    bloqueado: boolean;
}

export default function HomeComponent() {
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
    const [customersGetList, setCustomersGetList] = useState<
        CustomersGetType[]
    >([]);

    useEffect(() => {
        setCustomersGetList([
            {
                id: 1,
                nameOrCorporateReason: "Alice Johnson",
                email: "alice.johnson@example.com",
                phoneNumber: "+1234567890",
                createdAt: new Date("2023-01-15T10:30:00Z"),
                isBlocked: false,
            },
            {
                id: 3,
                nameOrCorporateReason: "Bob Smith",
                email: "bob.smith@example.com",
                phoneNumber: "+1234567891",
                createdAt: new Date("2023-02-20T11:00:00Z"),
                isBlocked: true,
            },
            {
                id: 2,
                nameOrCorporateReason: "Charlie Brown",
                email: "charlie.brown@example.com",
                phoneNumber: "+1234567892",
                createdAt: new Date("2023-03-25T09:45:00Z"),
                isBlocked: false,
            },
            {
                id: 11,
                nameOrCorporateReason: "David Wilson",
                email: "david.wilson@example.com",
                phoneNumber: "+1234567893",
                createdAt: new Date("2023-04-10T14:15:00Z"),
                isBlocked: true,
            },
            {
                id: 6,
                nameOrCorporateReason: "Eve Davis",
                email: "eve.davis@example.com",
                phoneNumber: "+1234567894",
                createdAt: new Date("2023-05-05T08:30:00Z"),
                isBlocked: false,
            },
            {
                id: 19,
                nameOrCorporateReason: "Frank Clark",
                email: "frank.clark@example.com",
                phoneNumber: "+1234567895",
                createdAt: new Date("2023-06-15T13:45:00Z"),
                isBlocked: true,
            },
            {
                id: 100,
                nameOrCorporateReason: "Grace Lewis",
                email: "grace.lewis@example.com",
                phoneNumber: "+1234567896",
                createdAt: new Date("2023-07-20T07:00:00Z"),
                isBlocked: false,
            },
            {
                id: 25,
                nameOrCorporateReason: "Hank Robinson",
                email: "hank.robinson@example.com",
                phoneNumber: "+1234567897",
                createdAt: new Date("2023-08-25T12:30:00Z"),
                isBlocked: true,
            },
            {
                id: 26,
                nameOrCorporateReason: "Ivy Walker",
                email: "ivy.walker@example.com",
                phoneNumber: "+1234567898",
                createdAt: new Date("2023-09-30T10:15:00Z"),
                isBlocked: false,
            },
            {
                id: 9,
                nameOrCorporateReason: "Jack Wright",
                email: "jack.wright@example.com",
                phoneNumber: "+1234567899",
                createdAt: new Date("2023-10-15T11:45:00Z"),
                isBlocked: true,
            },
        ]);
    }, []);

    const columnsTableData: Column<CustomersGetType>[] = [
        {
            titleStr: "Nome/Razão Social",
            rowRender: (row) => row.nameOrCorporateReason,
        },
        { titleStr: "Email", rowRender: (row) => row.email },
        { titleStr: "Telefone", rowRender: (row) => row.phoneNumber },
        {
            titleStr: "Data de cadastro",
            rowRender: (row) => moment(row.createdAt).format("DD/MM/YYYY"),
        },
        {
            titleStr: "Bloqueado",
            rowRender: (row) => (
                <input type="checkbox" checked={row.isBlocked} disabled />
            ),
        },
    ];

    const handleOnClickAddCustomer = () => {
        const data = filterByIndexes(customersGetList, selectedIndexes);

        console.log(data);
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
                <TableDataComponent
                    selectedIndexes={selectedIndexes}
                    setSelectedIndexes={setSelectedIndexes}
                    handleOnPressEdit={(row) => {
                        console.log(row.id);
                    }}
                    data={customersGetList}
                    columns={columnsTableData}
                />
            </TableContainerStyled>
        </ContainerStyled>
    );
}
