import * as C from "./styles";
import imageClose from "../../assets/close.png";
import { useContext, useState } from "react";
import {
  createExpenseRegister,
  createIncomeRegister,
} from "../../api/axiosInstance";
import { dataContext } from "../../contexts/datacontext";
import { readExpenseData, readIncomeData } from "../../api/axiosInstance";
import ModalSuccess from "../ModalSuccess";
interface ModalProps {
  title: string;
  description: string;
  setIsOpen: (isOpen: boolean) => void;
  imageUrl: string;
  categories: string[];
  isOpen: boolean;
  isExpense: boolean;
}

export default function Modal({
  title,
  description,
  setIsOpen,
  isOpen,
  imageUrl,
  categories,
  isExpense,
}: ModalProps) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Selecione uma categoria");
  const [categoryId, setCategoryId] = useState(0);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);

  const context = useContext(dataContext);

  function handleDate(date: string) {
    setDate(date);
  }

  function handleCategory(category: string) {
    if (category !== "Selecione uma categoria") {
      setCategory(category);
      getCategoryId(category);
    }
  }

  function handleName(name: string) {
    name = name.replace(/[^a-zA-Z]/g, "");
    setName(name);
  }

  function handleValue(inputValue: string) {
    const cleanValue = inputValue.replace(/\D/g, "");
    const formattedValue = formatCurrency(cleanValue);
    setValue(formattedValue);
  }

  function getCategoryId(category: string) {
    const categoriesArray = [
      "Salário",
      "Renda Extra",
      "Investimento",
      "Venda",
      "Prêmio",
      "Alimentação",
      "Moradia",
      "Vestuário",
      "Serviço",
      "Lazer",
      "Saúde",
      "Transporte",
      "Educação",
      "Pets",
    ];
    const index = categoriesArray.indexOf(category);
    if (index !== -1) {
      setCategoryId(index + 1);
    } else {
      setCategoryId(0);
    }
  }

  function formatCurrency(value: string) {
    if (!value) return "";
    const formattedValue = (parseInt(value) / 100).toFixed(2).replace(".", ",");
    return `R$ ${formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  }

  function handleClose() {
    setIsOpen(false);
    setIsOpenModalSuccess(false);
  }

  const handleButtonConfirm = async () => {
    if (date && category && name && value) {
      const cleanValue = value
        .replace("R$ ", "")
        .replace(".", "")
        .replace(",", ".");
      const floatValue = parseFloat(cleanValue);

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Você precisa estar logado para realizar essa ação!");
        return;
      }

      try {
        if (isExpense) {
          setIsOpenModalSuccess(true);

          await createExpenseRegister(
            { categoryId, title: name, date, value: floatValue },
            token
          );
        } else {
          setIsOpenModalSuccess(true);

          await createIncomeRegister(
            { categoryId, title: name, date, value: floatValue },
            token
          );
        }

        const expenses = await readExpenseData(token);
        const incomes = await readIncomeData(token);

        const newList = [...expenses, ...incomes];

        context?.setList(newList);

        setDate("");
        setCategory("Selecione uma categoria");
        setName("");
        setValue("");
        setIsValid(true);
        setIsOpen(false);
      } catch (err) {
        console.log("Erro ao criar registro:", err);
      }
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      <ModalSuccess
        isOpen={isOpenModalSuccess}
        setIsOpen={setIsOpenModalSuccess}
      ></ModalSuccess>

      <C.Container style={{ display: isOpen ? "flex" : "none" }}>
        <C.Box>
          <C.Image
            onClick={handleClose}
            style={{
              width: 50,
              height: 50,
              position: "absolute",
              top: 20,
              right: 20,
              cursor: "pointer",
            }}
            src={imageClose}
          />
          <C.Image src={imageUrl}></C.Image>
          <C.Title>{title}</C.Title>

          <C.Description>{description}</C.Description>
          <C.Attention style={{ display: isValid ? "none" : "block" }}>
            ATENÇÃO! Preencha todos os campos corretamente antes de confirmar.
          </C.Attention>
          <C.Input
            value={date}
            onChange={(e) => handleDate(e.target.value)}
            placeholder="Data"
            type="date"
            required
          />
          <C.Select
            value={category}
            onChange={(e) => handleCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <C.Option key={index}>{category}</C.Option>
            ))}
          </C.Select>
          <C.Input
            value={name}
            maxLength={40}
            onChange={(e) => handleName(e.target.value)}
            placeholder="Título"
            type="text"
          />
          <C.Input
            value={value}
            onChange={(e) => handleValue(e.target.value)}
            id="valor"
            placeholder="Valor"
            type="text"
          />

          <C.ConfirmButton onClick={handleButtonConfirm} type="submit">
            CONFIRMAR
          </C.ConfirmButton>
        </C.Box>
      </C.Container>
    </div>
  );
}
