import * as C from "./styles";
import imgDelete from "../../assets/delete-red.png";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleDelete: () => void;
}

export default function ModalAreYouSure({
  isOpen,
  setIsOpen,
  handleDelete,
}: ModalProps) {
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <C.Container style={{ display: isOpen ? "flex" : "none" }}>
      <C.Box>
        <C.Image src={imgDelete}></C.Image>
        <C.Title>Deletar registro</C.Title>
        <C.Description>Tem certeza?</C.Description>

        <div style={{ display: "flex", flexDirection: "row", width: '50%', justifyContent: 'space-between' }}>
          <C.ManterButton onClick={handleClose}>MANTER</C.ManterButton>
          <C.DeletarButton
            onClick={async () => {
              await handleDelete();
              handleClose();
            }}
          >
            DELETAR
          </C.DeletarButton>
        </div>
      </C.Box>
    </C.Container>
  );
}
