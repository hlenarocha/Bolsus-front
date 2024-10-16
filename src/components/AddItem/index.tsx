import * as C from './styles';

type Props = {
  source: string;
  title: string;
  subtitle: string;
  setIsOpen: (isOpen: boolean) => void;
};

export const AddItem = ({source, title, subtitle, setIsOpen}: Props) => {
  function handleOpenModal() {
    setIsOpen(true);

  }

  return(
    <C.Container>
    <C.Image src={source} onClick={handleOpenModal}/>
    <C.ContainerText>
      <C.Title>{title}</C.Title>
      <C.Subtitle>{subtitle}</C.Subtitle>
    </C.ContainerText>
    
    </C.Container>

  );
}