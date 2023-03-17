import React, { FC } from 'react';
import ExperienceItem from "../ExperienceItem/ExperienceItem";

interface ExperiencesProps {}

const Experiences: FC<ExperiencesProps> = () => (
    <table className="table">
        <tbody>
        <tr>
            <td><ExperienceItem /></td>
        </tr>
        </tbody>
    </table>
);

export default Experiences;
