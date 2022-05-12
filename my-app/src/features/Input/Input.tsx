import React, {ChangeEvent, memo, useCallback, useEffect, useState} from 'react';

import {TextField} from '@mui/material';




import s from '../Pages/LoginPage/LoginPage.module.scss';
import {useAppDispatch, useAppSelector} from "../../main/bll/store";


type PropsType = {
    placeholder: string,
}

export const Input = memo(({placeholder}: PropsType) => {

    const {value} = useAppSelector(state => state.packs)
    const [defaultValue, setValue] = useState<string>(value || '')
    // const debouncedValue = useDebounce<string>(defaultValue)
    const dispatch = useAppDispatch()

    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value), [])

    useEffect(() => {},[])
    //     dispatch(setSearchValue(debouncedValue))
    // }, [debouncedValue])

    return (
        <div>
            <TextField
                placeholder={placeholder}

                value={defaultValue}
                onChange={onChangeCallback}
                sx={{width: '300px'}}
                id="outlined-basic"
                variant="standard"
            />
        </div>
    )
})