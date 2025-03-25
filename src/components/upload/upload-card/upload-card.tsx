"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { ECategory, ESector, ETags } from "@/constants/types";
import useVideo from "@/hooks/videos/useVideo";
import { useState } from "react";

export default function UploadCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState<ECategory>(ECategory.FIVE);
  const [sector, setSector] = useState<ESector>(ESector.DEF);
  const [tags, setTags] = useState<ETags>(ETags.DRILLS);

  const { uploadVideoMutate, isPending } = useVideo();

  return (
    <>
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>Subir Vídeo</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do vídeo"
          />
          <Input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <Input onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
          <p className="font-semibold">Categoria:</p>
          <div className="w-full flex flex-row">
            <Toggle
              onClick={() => setCategory(ECategory.NINE)}
              className="cursor-pointer"
            >
              9x9
            </Toggle>
            <Toggle
              onClick={() => setCategory(ECategory.FIVE)}
              className="cursor-pointer"
            >
              5x5
            </Toggle>
          </div>
          <p className="font-semibold">Setor:</p>
          <div className="w-full flex flex-row">
            <Toggle
              onClick={() => setSector(ESector.OFF)}
              className="cursor-pointer"
            >
              Ataque
            </Toggle>
            <Toggle
              onClick={() => setSector(ESector.DEF)}
              className="cursor-pointer"
            >
              Defesa
            </Toggle>
            <Toggle
              onClick={() => setSector(ESector.SPC)}
              className="cursor-pointer"
            >
              Special Teams
            </Toggle>
          </div>
          <p className="font-semibold">Tipo:</p>
          <div className="w-full flex flex-row">
            <Toggle
              onClick={() => setTags(ETags.PLAYBOOK)}
              className="cursor-pointer"
            >
              Playbook
            </Toggle>
            <Toggle
              onClick={() => setTags(ETags.SCOUT)}
              className="cursor-pointer"
            >
              Scout
            </Toggle>
            <Toggle
              onClick={() => setTags(ETags.DRILLS)}
              className="cursor-pointer"
            >
              Drills
            </Toggle>
            <Toggle
              onClick={() => setTags(ETags.TREINO)}
              className="cursor-pointer"
            >
              Treino
            </Toggle>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <Button
            disabled={isPending}
            className="w-full cursor-pointer"
            onClick={() =>
              uploadVideoMutate({
                title: title,
                description: description,
                url: url,
                category: category,
                sector: sector,
                tag: tags,
                author: "paulinho",
              })
            }
          >
            {
                isPending ? "Enviando..." : "Enviar"
            }
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
