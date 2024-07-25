import styled from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";

const ContainerActionButtonsStyled = styled.div<StyledComponentProps>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
`;

const ButtonStyled = styled.button<StyledComponentProps>`
    padding: 5px 10px;
    margin: 0;
    border-radius: 10px;
    font-size: .9rem;
    border: 1px solid ${props => props.theme.buttonPaginationbgColor};
    color: ${props => props.theme.buttonPaginationTxtColor};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.buttonPaginationBgColorHover};
    }
`;

const PaginationContainerStyled = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const LabelStyled = styled.label<StyledComponentProps>`
    color: ${props => props.theme.buttonPaginationTxtColor};
    font-size: .8rem;
`;

const SelectStyled = styled.select`
    padding: 5px;
    color: ${props => props.theme.buttonPaginationTxtColor};
    font-size: .8rem;
`;

type Props = {
    handlePreviousPage: () => any;
    handleNextPage: () => any;
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
    handleChangeRowsPerPage: (val: string) => any;
    rowsPerPageOptions: number[];
};

export default function PaginationTableComponent({
    handlePreviousPage,
    handleNextPage,
    currentPage,
    totalPages,
    rowsPerPage,
    handleChangeRowsPerPage,
    rowsPerPageOptions,
}: Props) {
    return (
        <PaginationContainerStyled>
            <ContainerActionButtonsStyled>
                <ButtonStyled
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Anterior
                </ButtonStyled>
                <ButtonStyled
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Próxima
                </ButtonStyled>
            </ContainerActionButtonsStyled>
            <ContainerActionButtonsStyled>
                <LabelStyled>{currentPage} de {totalPages}</LabelStyled>
            </ContainerActionButtonsStyled>
            <ContainerActionButtonsStyled>
                <LabelStyled htmlFor="rowsPerPage">Linhas por página: </LabelStyled>
                <SelectStyled
                    id="rowsPerPage"
                    value={rowsPerPage}
                    onChange={(e) => handleChangeRowsPerPage(e.target.value)}
                >
                    {rowsPerPageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </SelectStyled>
            </ContainerActionButtonsStyled>
        </PaginationContainerStyled>
    );
}
