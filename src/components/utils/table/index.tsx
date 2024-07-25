import React, { useState } from "react";
import styled from "styled-components";
import PaginationTableComponent from "./pagination";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";
import { FiEdit } from "react-icons/fi";

const TableContainerStyled = styled.div<StyledComponentProps>`
    margin-top: 20px;
`;

const TableStyled = styled.table<StyledComponentProps>`
    width: 100%;
    border-collapse: collapse;

    @media (max-width: 950px) {
        display: block;
        thead {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
    }
`;

const TheadStyled = styled.thead<StyledComponentProps>`
    background-color: ${(props) => props.theme.tableBgColor};
`;

const ThStyled = styled.th<StyledComponentProps>`
    padding: 8px;
    border-bottom: 1px solid ${(props) => props.theme.tableBgColor};
    font-size: 0.9rem;
    text-align: left;
    color: ${(props) => props.theme.tableTxtColor};
`;

const TbodyStyled = styled.tbody<StyledComponentProps>`
    @media (max-width: 950px) {
        display: block;
        width: 100%;
    }
`;

const TrStyled = styled.tr<StyledComponentProps>`
    &:nth-child(even) {
        background-color: ${(props) => props.theme.tableBgColor};
    }

    @media (max-width: 950px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        border-bottom: 1px solid ${(props) => props.theme.tableBgColor};
        border-radius: 5px;
        overflow: hidden;
    }
`;

const TdStyled = styled.td<StyledComponentProps>`
    color: ${(props) => props.theme.tableTxtColor};
    font-size: 0.9rem;
    padding: 8px;
    border-bottom: 1px solid ${(props) => props.theme.tableBgColor};

    @media (max-width: 950px) {
        padding: 10px;
        text-align: left;
        border: none;
    }
`;

export type Column<T> = {
    titleStr: string;
    rowRender: (row: T) => React.ReactNode;
};

type TableProps<T> = {
    selectedIndexes: number[];
    setSelectedIndexes: React.Dispatch<React.SetStateAction<number[]>>;
    data: T[];
    columns: Column<T>[];
    rowsPerPageOptions?: number[];
    handleOnPressEdit: (row: T) => any;
};

export default function TableDataComponent<T>({
    selectedIndexes,
    setSelectedIndexes,
    data,
    columns,
    rowsPerPageOptions = [20, 40, 50, 100],
    handleOnPressEdit,
}: TableProps<T>) {
    const [rowsPerPage, setRowsPerPage] = useState<number>(
        rowsPerPageOptions[0]
    );
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedIndexes(data.map((_, index) => index));
        } else {
            setSelectedIndexes([]);
        }
    };

    const handleSelectRow = (index: number) => {
        setSelectedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((selectedId) => selectedId !== index)
                : [...prev, index]
        );
    };

    const handleChangeRowsPerPage = (value: string) => {
        setRowsPerPage(Number(value));
        setCurrentPage(1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const displayedData = data.slice(startIndex, startIndex + rowsPerPage);

    return (
        <TableContainerStyled>
            <TableStyled>
                <TheadStyled>
                    <TrStyled>
                        <ThStyled>
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={selectedIndexes.length === data.length}
                            />
                        </ThStyled>
                        {columns.map((column, index) => (
                            <ThStyled key={index}>{column.titleStr}</ThStyled>
                        ))}
                        <ThStyled>Ações</ThStyled>
                    </TrStyled>
                </TheadStyled>
                <TbodyStyled>
                    {displayedData.map((row, rowIndex) => (
                        <TrStyled key={rowIndex}>
                            <TdStyled>
                                <input
                                    type="checkbox"
                                    checked={selectedIndexes.includes(
                                        startIndex + rowIndex
                                    )}
                                    onChange={() =>
                                        handleSelectRow(startIndex + rowIndex)
                                    }
                                />
                            </TdStyled>
                            {columns.map((column, colIndex) => (
                                <TdStyled key={colIndex}>
                                    {column.rowRender(row)}
                                </TdStyled>
                            ))}
                            <TdStyled>
                                <FiEdit
                                    color="#0056b3"
                                    onClick={() => handleOnPressEdit(row)}
                                    style={{
                                        cursor: "pointer",
                                    }}
                                />
                            </TdStyled>
                        </TrStyled>
                    ))}
                </TbodyStyled>
            </TableStyled>
            <PaginationTableComponent
                currentPage={currentPage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
                totalPages={totalPages}
            />
        </TableContainerStyled>
    );
}
