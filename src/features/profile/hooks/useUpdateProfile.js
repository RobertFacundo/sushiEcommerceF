import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../services/profileServices";

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProfile,
        onMutate: (variables) => {
            console.log('Mutation started with:', variables);
        },
        onSuccess: (data) => {
            console.log('Mutation success, returned:', data);
            queryClient.invalidateQueries(["profile"]);
        },
        onError: (error) => {
            console.error('mutation error:', error);
        }
    });
};