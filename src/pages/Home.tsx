import { useState, type FormEvent } from "react";
import RefreshIcon from "@/assets/refresh-icon.svg?react";

import { Button } from "../components";
import {
  generateRandomCpf,
  formatWithPunctuation,
  copyToClipboard,
} from "@/utils";

export const Home = () => {
  const [cpfRaw, setCpfRaw] = useState("");
  const [punctuation, setPunctuation] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateCpf = () => {
    const raw = generateRandomCpf();
    setCpfRaw(raw);
    setCopied(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateCpf();
  };

  const handleCopy = () => {
    const formatted = punctuation ? formatWithPunctuation(cpfRaw) : cpfRaw;
    copyToClipboard(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cpfDisplay = punctuation ? formatWithPunctuation(cpfRaw) : cpfRaw;

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-[32px] font-black mb-5">Gerador de CPF</h1>

      <div className="flex flex-col gap-2 mb-5">
        <span className="font-semibold">Gerar com pontuação?</span>

        <div className="flex gap-5 justify-center">
          <label
            htmlFor="punctuation-yes"
            className="flex gap-2 font-normal text-sm"
          >
            <input
              id="punctuation-yes"
              type="radio"
              name="punctuation"
              value="true"
              checked={punctuation === true}
              onChange={() => setPunctuation(true)}
            />
            Sim
          </label>

          <label
            htmlFor="punctuation-no"
            className="flex gap-2 font-normal text-sm"
          >
            <input
              id="punctuation-no"
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
        value={cpfDisplay}
        placeholder="000.000.000-00"
        readOnly
      />

      <div className="flex items-center justify-center gap-5">
        <Button type="submit">
          <RefreshIcon /> Gerar CPF
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={handleCopy}
          disabled={!cpfRaw}
        >
          {copied ? "Copiado!" : "Copiar"}
        </Button>
      </div>
    </form>
  );
};
