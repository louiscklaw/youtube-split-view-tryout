import { toast } from 'react-toastify'

import ThemeContext from '../../contexts/theme-context'

function showSavingNotification() {
  let {active_style} = React.useContext(ThemeContext)
  let style = active_style

  return toast.success('🦄 Wow so easy!', {
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
