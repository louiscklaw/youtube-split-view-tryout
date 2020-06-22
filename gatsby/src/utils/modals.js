const showModal = (ref) =>{
  ref.current.classList.add(active_style.isActive)
}

const closeModal = (ref) => {
  ref.current.classList.remove(active_style.isActive)
}

const showSettingsModal = (settings_ref) => {

}

const showAnnouncementModal = (announce_ref) => {
  showModal(announce_ref)
}

export { showModal, closeModal }
