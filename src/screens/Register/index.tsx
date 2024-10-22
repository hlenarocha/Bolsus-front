import * as C from './styles';
import logoImage from '../../assets/logo-bolsus.png';
import { useState } from 'react';
import createClientLogin from "../../api/axiosInstance";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmedPassword, setIsValidConfirmedPassword] = useState(false);


  const nameRegex =  /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  

  function handleOnChangeName(text: string) {
    setName(text);

    if (text.length > 0 && text.match(nameRegex)) {
      setIsValidName(true);
    } 
  }

  function handleOnChangeEmail(text: string) {
    setEmail(text);

    if (text.length > 0 && text.match(emailRegex)) {
      setIsValidEmail(true);
    }  
  }


  function handleOnChangePassword(text: string) {
    setPassword(text);

    if (text.length > 0 && text.match(passwordRegex)) {
      setIsValidPassword(true);
    }  
  }

  
  function handleOnChangeConfirmedPassword(text: string) {
    setConfirmedPassword(text);

    if (text === password) {
      setIsValidConfirmedPassword(true);
    }  
  }

  function handleRegister() = async () => {
    if (isValidName && isValidEmail && isValidPassword && isValidConfirmedPassword) {
      const data = { name, email, password };
      const result = await createClientLogin(data);
      
    } else {

    }
  }

  return(
    <C.Container>
      <C.Box>
      <C.Logo>
        <C.Image src={logoImage} />
        <C.HeaderTitle>Bolsus</C.HeaderTitle>
        <C.Subtitle>Controle sua vida financeira e encha os <span style={{color: 'greenyellow'}}>Bolsus</span>.</C.Subtitle>
        </C.Logo>
        <C.Title>Cadastre-se e organize suas finanças!</C.Title>
        <C.InputBox>
        <C.Input placeholder='Insira seu nome' type='text' required onChange={(e) => handleOnChangeName(e.target.value)} style={{borderColor: name.length === 0 ? "white" : (name.match(nameRegex) ? "greenyellow" : "red") }} />
        <C.Input placeholder='Insira seu e-mail preferido' type='text' required onChange={(e) => handleOnChangeEmail(e.target.value)} style={{borderColor: email.length === 0 ? "white" : (email.match(emailRegex) ? "greenyellow" : "red")}} />
        <C.Input placeholder='Crie uma senha super secreta' type='password' required onChange={(e) => handleOnChangePassword(e.target.value)} style={{borderColor: password.length === 0 ? "white" : (password.match(passwordRegex) ? "greenyellow" : "red")}}/>
        <p style={{width: 350, fontSize: 14, marginTop: -10, marginBottom: 10, color: 'white', display: password.match(passwordRegex) || password.length === 0 ? 'none' : 'block'}}><span style={{color: 'red', fontWeight: 'bold'}}>ATENÇÃO!</span> Sua senha deve ter, no mínimo, 8 carateres e conter 1 letra e 1 número pelo menos.</p>
        <C.Input placeholder='Confirme sua senha super secreta' type='password' required onChange={(e) => handleOnChangeConfirmedPassword(e.target.value)} style={{borderColor: confirmedPassword.length === 0 ? "white" : (confirmedPassword === password ? "greenyellow" : "red")}}/>

        <C.Button>CADASTRAR</C.Button>
        </C.InputBox>
      </C.Box>
      
    </C.Container>
  );
}