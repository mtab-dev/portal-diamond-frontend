import { IUploadVideo } from "@/constants/types";
import { uploadVideo } from "@/services/queries/video.query";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'sonner'


const useVideo = () => {
    const {mutateAsync: uploadVideoMutate, isPending } = useMutation<void, Error, IUploadVideo>({
        mutationFn: uploadVideo,
        onSuccess: () => {
            toast.success('Vídeo enviado com sucesso')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    });

    return {
        uploadVideoMutate,
        isPending
    }
}

export default useVideo