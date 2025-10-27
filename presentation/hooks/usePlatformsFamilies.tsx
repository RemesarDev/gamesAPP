import { getPlatformFamiliesActions } from "@/core/actions/platform/getPlatformFamilies.actions";
import { useQuery } from "@tanstack/react-query";

export const usePlatformsFamilies = () => {
	const familyQuery = useQuery({
		queryKey: ["family"],
		queryFn: () => getPlatformFamiliesActions(),
		staleTime: 1000 * 60 * 60 * 24,
	});
	return { familyQuery };
};
