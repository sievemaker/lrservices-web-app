import React, {FC} from 'react';
import LargeScreenAppBar from "../LargeScreenAppBar/LargeScreenAppBar";
import SmallScreenAppBar from "../SmallScreenAppBar/SmallScreenAppBar";

interface AppBarComponentProps {
    isLargeScreen: boolean
}

const AppBarComponent: FC<AppBarComponentProps> = React.forwardRef((props, ref) => {
    return props.isLargeScreen ? (
        <LargeScreenAppBar />
    ) : (<SmallScreenAppBar />)});

export default AppBarComponent;
