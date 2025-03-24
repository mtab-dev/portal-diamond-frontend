import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";

export default function UploadCard() {
  return (
    <>
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>Subir Vídeo</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder="Título do vídeo" />
          <Input placeholder="Descrição" />
          <Input placeholder="URL" />
          <Label >Categoria:</Label>
          <div className="w-full flex flex-row">
            <Toggle className="cursor-pointer">9x9</Toggle>
            <Toggle className="cursor-pointer">5x5</Toggle>
          </div>
          <Label className="text-bold">Setor:</Label>
          <div className="w-full flex flex-row">
            <Toggle className="cursor-pointer">Ataque</Toggle>
            <Toggle className="cursor-pointer">Defesa</Toggle>
            <Toggle className="cursor-pointer">Special Teams</Toggle>
          </div>
          <Label className="text-bold">Tipo:</Label>
          <div className="w-full flex flex-row">
            <Toggle className="cursor-pointer">Playbook</Toggle>
            <Toggle className="cursor-pointer">Scout</Toggle>
            <Toggle className="cursor-pointer">Drills</Toggle>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <Button className="w-full cursor-pointer">Enviar</Button>
        </CardFooter>
      </Card>
    </>
  );
}
