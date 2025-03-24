
import Image from "next/image";


export default function Header(){
    return (
        <div className="w-full h-full flex items-center justify-start border-none border-b-none px-8">
        <div className="p-6">
          <Image
            src="/diamond-logo.png"
            alt="logo"
            width={250}
            height={50}
            className="w-auto h-auto max-w-full max-h-full"
          />
        </div>
      </div>
    )
}