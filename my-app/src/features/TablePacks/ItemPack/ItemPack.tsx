import React from 'react';
import {NavLink} from "react-router-dom";



import {DeletePackModal} from "../../CustomModals/DeleteModal/DeletePackModal";
import {EditPackModal} from "../../CustomModals/EditPackModal/EditPackModal";

import c from "../../../common/styles/Common.module.scss";
import s from "./ItemPack.module.scss";
import {useAppSelector} from "../../../main/bll/store";
import {CardPackType} from "../../../main/dal/packs-api";


type PropsType = {
    pack: CardPackType
    updatePack: (name: string, _id: string) => void
    profileId: string
    onRemovePackHandler: (packId: string) => void
    navigateToCardPage: (_id: string) => void
}

export const ItemPack = React.memo(({
                                        pack,
                                        updatePack,
                                        profileId,
                                        onRemovePackHandler,
                                        navigateToCardPage
                                    }: PropsType) => {

    const {status} = useAppSelector(state => state.app)

    return (
        <tr>
            <td>

                        <div style={{width: '140px', marginRight: '10px'}}>{pack.name}</div>

            </td>
            <td>{pack.cardsCount}</td>
            <td>{pack.updated.split('').slice(0, 10).join('')}</td>
            <td>{pack.created.split('').slice(0, 10).join('')}</td>
            <td className={s.packContainer}>
                <div className={s.buttons}>
                    {profileId === pack.user_id &&
                    <DeletePackModal _id={pack._id} packName={pack.name}
                                     onRemovePackHandler={onRemovePackHandler}/>}
                    {profileId === pack.user_id &&
                    <EditPackModal _id={pack._id} updatePack={updatePack}/>}
                    <button className={c.button} disabled={status === 'loading'}
                            onClick={() => navigateToCardPage(pack._id)}>Learn
                    </button>
                </div>
            </td>
        </tr>

    )
})