import React, { FC } from 'react';
import {Card, CardContent} from "@mui/material";
import Impressum from "../Impressum/Impressum";
import {styled} from "@mui/material/styles";

interface CompanyDataProps {}

const CompanyData: FC<CompanyDataProps> = () => {
    const ItemCard = styled(Card)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: 0,
        boxShadow: 'none',
    }));
    return(    <ItemCard>
            <CardContent>
                <Impressum />
            </CardContent>
        </ItemCard>
    );
}

export default CompanyData;
