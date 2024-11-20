import { FormEvent, useState } from "react";
import { Button } from "@/components";
import {
  generateRandomCpf,
  formatWithPunctuation,
  copyToClipboard,
} from "@/utils";

const Home = () => {
  const [cpf, setCpf] = useState("");
  const [punctuation, setPunctuation] = useState(false);

  const generateCpf = () => {
    const cpf = generateRandomCpf();
    const formattedCpf = punctuation ? formatWithPunctuation(cpf) : cpf;
    setCpf(formattedCpf);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateCpf();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-[32px] font-black mb-5">Gerador de CPF</h1>

      <div className="flex flex-col gap-2 mb-5">
        <span className="font-semibold">Gerar com pontuação?</span>

        <div className="flex gap-5 justify-center">
          <label className="flex gap-2 font-normal text-sm">
            <input
              type="radio"
              name="punctuation"
              value="true"
              checked={punctuation === true}
              onChange={() => setPunctuation(true)}
            />
            Sim
          </label>

          <label className="flex gap-2 font-normal text-sm">
            <input
              type="radio"
              name="punctuation"
              value="false"
              checked={punctuation === false}
              onChange={() => setPunctuation(false)}
            />
            Não
          </label>
        </div>
      </div>

      <input
        className="mb-14 bg-[#18181B] rounded px-4 py-3 text-center h-[50px] w-[158px] text-sm font-normal"
        type="text"
        value={cpf}
        readOnly
      />

      <div className="flex items-center justify-center gap-5">
        <Button type="submit">Gerar CPF</Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => copyToClipboard(cpf)}
          disabled={!cpf}
        >
          Copiar
        </Button>
      </div>
    </form>
  );
};

export { Home };
