import React from 'react'

import {AvatarContainer} from './styles';
import {IAvatar} from "./types";

export const Avatar = React.memo(({urlAvatar = "https://avatars.githubusercontent.com/u/24771425?v=4"}: IAvatar) => {
    return (<AvatarContainer src={urlAvatar}/>)
});

