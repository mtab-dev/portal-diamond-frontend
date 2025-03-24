import Header from "@/components/shared/header/header";
import UploadCard from "@/components/upload/upload-card/upload-card";

export default function UploadPage() {
  return (
    <>
      <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center overflow-x-none">
        <div className="h-screen flex flex-col items-center">
          <div className="h-fit w-screen sticky z-50 top-0">
            <Header />
          </div>
          <div className="w-full flex flex-row justify-center">
            <UploadCard />
          </div>
        </div>
      </div>
    </>
  );
}
