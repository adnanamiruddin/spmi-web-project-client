export const showModal = (modalId) => {
  // @ts-ignore
  document.getElementById(modalId).showModal();
};

export const closeModal = (modalId) => {
  // @ts-ignore
  document.getElementById(modalId).close();
};
