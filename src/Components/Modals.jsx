import React from "react";
import { useModal } from "./hooks/useModal";
import { Modal } from "./Modal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h1>Modales</h1>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi Modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          dignissimos reiciendis consectetur, placeat quam alias ut. Iusto
          incidunt harum nobis labore similique nam provident necessitatibus
          quaerat. Tempora, sed. Autem, nobis.0
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Animals" />
      </Modal>

      <button onClick={openModalPortal}>Modal en Portal</button>
      <Modal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM
          diferente a donde carga neustra app de React, gracias a react Portal.
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="Animals" />
      </Modal>
    </div>
  );
};
