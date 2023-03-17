import React, { FC } from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {Link} from "@mui/material";

interface LinkedInLinkProps {}

const LinkedInLink: FC<LinkedInLinkProps> = () => (
    <Link href={"https://www.linkedin.com/in/łukasz-rzeszotarski/"}><LinkedInIcon fontSize={"large"}/></Link>
);

export default LinkedInLink;
