import { toast } from 'react-toastify'

import style from '../../scss/style.module.scss'

const showSavingNotification = () => {
  toast.success('🦄 Wow so easy!', {
    position: "top-center",
    // autoClose: 5000,
    hideProgressBar: false,
    // closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: [style.notification ,style.isDanger,style.roundedCorner].join(' '),
    bodyClassName: "grow-font-size",
    progressClassName: 'fancy-progress-bar'
    })
}

export {showSavingNotification}