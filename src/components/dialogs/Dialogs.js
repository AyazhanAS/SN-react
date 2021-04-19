import React from 'react'
import s from "./Dialogs.module.css"

export default function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={s.dialog + " " + s.active}>
                    Almaty
                </div>
                <div className={s.dialog}>
                    NurSultan
                </div>
                <div className={s.dialog}>
                    Shymkent
                </div>
                <div className={s.dialog}>
                    Karaganda
                </div>
                <div className={s.dialog}>
                    Aktau
                </div>
                <div className={s.dialog}>
                    Atyrau
                </div>
                <div className={s.dialog}>
                    Lenger
                </div>
                <div className={s.dialog}>
                    Oral
                </div>
                <div className={s.dialog}>
                    Semey
                </div>
                <div className={s.dialog}>
                    Aktobe
                </div>
            </div>
            <div className={s.mesaages}>
                <div className={s.mesaage}>Hi</div>
                <div className={s.mesaage}>Hello</div>
                <div className={s.mesaage}>How are you?</div>
            </div>
        </div>
    )
}
