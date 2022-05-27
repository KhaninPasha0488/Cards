import s from './Profile.module.css';
import emptyProfilePhoto from '../image/elon-musk-smoke.gif'
import React, {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import {TextField} from '@mui/material';
import {useDispatch} from 'react-redux';
import {changeProfilePhoto, changeUserName} from '../../bll/profileReducer';


type ProfileInfoPropsType = {
    avatar: string
    name: string
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {

    const [title, setTitle] = useState(props.name)

    const [editProfileMode, setEditProfileMode] = useState(false);

    const dispatch = useDispatch()
    const inRef = useRef<HTMLInputElement>(null)

    const upload = (e: ChangeEvent<HTMLInputElement>) => {

        const reader = new FileReader()

        //у таргета files всегда массив, даже если инпуту не поставлен multiply там всего 1 файл
        const newFile = e.target.files && e.target.files[0]

        if (newFile) {
            reader.onloadend = () => {
                dispatch(changeProfilePhoto(reader.result)as any)
            }
            reader.readAsDataURL(newFile)

        }
    }
    const onBlur = () => {
        setEditProfileMode(false)
        if (title !== props.name) {
            dispatch(changeUserName(title)as any)
        }
    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setEditProfileMode(false)
            if (title !== props.name) {
                dispatch(changeUserName(title)as any)
            }
        }
    }

    useEffect(() => {
        setTitle(props.name)
    }, [props.name])

    return (
        <div className={s.profile__infoPage}>

            <div
                style={{
                    paddingTop: '20px',
                    marginBottom: '15px',
                }}
            >
                <div className={s.editAvatar}>
                    <input type="file"
                           ref={inRef}
                           style={{display: 'none'}}
                           onChange={upload}
                           accept=".jpg, .jpeg, .png"
                    />

                    <img src={props.avatar ? props.avatar : emptyProfilePhoto}
                         className={s.profile__photo}
                         onClick={() => inRef.current?.click()}
                    />
                </div>


            </div>

            <div className={s.profile__textName}
                 onClick={() => {
                     setEditProfileMode(true)
                 }
                 }
            >

                {editProfileMode
                    ? <TextField variant={'standard'}
                                 value={title}
                                 onBlur={onBlur}
                                 autoFocus
                                 onKeyPress={onEnterPressHandler}
                                 onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                    : <span onClick={() => {
                        setEditProfileMode(false)
                    }
                    }>{props.name}
                        {/*<img src={pencil} height={'13px'}*/}
                        {/*     style={{display: 'inline-block', marginLeft: '10px'}}/>*/}
                </span>

                }
            </div>
        </div>
    )
})
