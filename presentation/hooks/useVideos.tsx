
import { getVideoGameByID } from "@/core/actions/videos/getVideoByGameID.actions"
import { useQuery } from "@tanstack/react-query"

export const useVideos = (id:number) => {
  const videoQuery = useQuery({
    queryKey: ['videos', id],
    queryFn: ()=>getVideoGameByID(id),
    staleTime: 1000 * 60 * 60 * 24,
  })
  return{videoQuery}
}