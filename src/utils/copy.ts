import toast from "react-hot-toast";

export const copyToClipboard = (cpf: string) => {
  navigator.clipboard.writeText(cpf);

  toast.success("CPF copiado com sucesso!");
};
