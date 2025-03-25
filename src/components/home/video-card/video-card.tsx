import { Card } from "@/components/ui/card";
import { IVideo } from "@/constants/types";

import React from "react";

export default function VideoCard({
  id,
  title,
  description,
  url,
  category,
  sector,
  tag,
  author
}: IVideo) {
  return (
    <>
      <Card key={id} className="p-4 flex flex-col gap-4">
        <h1 className="text-lg font-bold">{title}</h1>
        <iframe
          className="w-full h-[200px] rounded-lg"
          src={url}
          title={title}
          allowFullScreen
        ></iframe>
        <p className="text-gray-600">{description} | {author}</p>
        <p>
          <strong>Categoria:</strong> {category}
        </p>
        <p>
          <strong>Setor:</strong> {sector}
        </p>
        <p>
          <strong>Tags:</strong> {tag}
        </p>

      </Card>
    </>
  );
}
