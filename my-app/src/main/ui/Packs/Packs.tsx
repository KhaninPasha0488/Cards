import React, {memo, useEffect} from 'react';
import {GetPacksPayloadType, packsApi} from '../../dal/packs-api';



import Typography from '@mui/material/Typography';

import s from './Packs.module.scss';
import {ButtonGroup, LinearProgress} from "@mui/material";
import Button from "@mui/material/Button";

import {useDispatch, useSelector} from "react-redux";
import {CustomMuiPagination} from "../../../features/Pagination/CustomMuiPagination";
import LoadingStatusBackdrop from "../../../features/LoadingBackDrop/BackDrop";
import {DoubleRangeInput} from "../../../features/DoubleRangeInput/DoubleRangeInput";
import {CustomMuiSelect} from "../../../features/Select/CustomMuiSelect";
import {AddNewPackModal} from "../../../features/CustomModals/AddNewPackModal/AddNewPackModal";
import {Input} from "../../../features/Input/Input";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {setUserProfile} from "../../bll/profileReducer";
import {TablePacks} from "../../../features/TablePacks/TablePacks";


// function TablePacks(props: { removePackCallback: (packId: string) => void, onChangeFilterValue: (sortPacks: string) => void, cardPacks: any, updatePack: (name: string, packId: string) => void }) {
//     return null;
// }

export const Packs = memo(() => {
    const {status} = useAppSelector(state => state.app)
    const {_id} = useAppSelector(state => state.profile)
    const {
        packs: {cardPacks, cardPacksTotalCount, pageCount, page, maxCardsCount, minCardsCount},
        isLoaded,
        own,
        value,
        sliderValue,
        sortValue
    } = useAppSelector(state => state.packs)


    const fetchData: GetPacksPayloadType = {
        packName: value || '',
        page,
        pageCount,
        user_id: own ? _id : undefined,
        min: minCardsCount,
        max: maxCardsCount,
        sortPacks: sortValue
    }
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     packsApi.getPack(fetchData).then((res) => {
    //         return res.data
    //     })
    //
    // }, [fetchData])

    const addPackHandler = () =>{}
    const onPageChange = () => {}

    const onChangePageCount = () => {}

    const onRemovePackCallback = () => {}
    const onUpdatePackHandler = () => {}
    const onchangeSliderValue = () => {}
    const onChangeFilterPacks = () => {}
    const onMyPacksHandler = () => {}
    const onAllPacksHandler =  () => {}


    const myClassName = `${s.belong} ${own ? s.active : ''}`
    const allClassName = `${s.belong} ${own ? '' : s.active}`

    if (isLoaded) return <LoadingStatusBackdrop/>

    return (
        <div className={s.main}>
            <div className={s.packsSettings}>
                <div className={s.buttonGroupContainer}>
                    <Typography variant={'h6'}>
                        Show cards packs
                    </Typography>
                    <ButtonGroup style={{marginTop: '20px'}}>
                        <Button onClick={onMyPacksHandler} className={myClassName}>My</Button>
                        <Button onClick={onAllPacksHandler} className={allClassName}>All</Button>
                    </ButtonGroup>
                </div>
                <div className={s.doubleRangeContainer}>
                    <Typography variant={'h6'}>
                        Number of cards
                    </Typography>
                    <DoubleRangeInput onchangeSliderValue={onchangeSliderValue}/>
                </div>

            </div>

            <div className={s.content}>

                <div className={s.controls}>
                    <Input placeholder={'Search by title'}/>
                    <div>
                        <AddNewPackModal addPackHandler={addPackHandler}/>
                    </div>
                </div>
                <div className={s.table}>
                    <TablePacks cardPacks={cardPacks}
                                onChangeFilterValue={onChangeFilterPacks}
                                updatePack={onUpdatePackHandler}
                                removePackCallback={onRemovePackCallback}
                    />
                    <div className={s.pagination}>
                        <CustomMuiPagination
                            totalItemsCount={cardPacksTotalCount}
                            pageCount={pageCount}
                            currentPage={page}
                            onSetNewPage={onPageChange}
                            disabled={status === 'loading'}
                        />
                        <CustomMuiSelect disabled={status === 'loading'}
                                         value={pageCount}
                                         onChangeOptions={onChangePageCount}/>
                    </div>
                </div>
            </div>
        </div>
    )
})

