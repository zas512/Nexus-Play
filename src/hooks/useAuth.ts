import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "@/redux/slices/userSlice";

export function useAuth() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  if (session?.user) {
    dispatch(
      setUser({
        id: session.user.id ?? null,
        name: session.user.name ?? null,
        image: session.user.image ?? null,
      })
    );
  } else {
    dispatch(clearUser());
  }
}
