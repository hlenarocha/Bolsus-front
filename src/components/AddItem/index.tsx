import * as C from './styles';

type Props = {
  source: string;
  title: string;
  subtitle: string;
};

export const AddItem = ({source, title, subtitle}: Props) => {
  return(
    <C.Container>
    <C.Image src={source} />
    <C.ContainerText>
      <C.Title>{title}</C.Title>
      <C.Subtitle>{subtitle}</C.Subtitle>
    </C.ContainerText>
    
    </C.Container>

  );
}