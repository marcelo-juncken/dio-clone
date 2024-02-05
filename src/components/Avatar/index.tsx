import React from 'react'

import {AvatarContainer} from './styles';
import {AvatarProps} from "../../types/components/Avatar";

export const Avatar = ({urlAvatar = "https://avatars.githubusercontent.com/u/24771425?v=4"}: AvatarProps) => {
    return (<AvatarContainer src={urlAvatar}/>)
}

