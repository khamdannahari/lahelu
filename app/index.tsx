import { useRouter } from "expo-router";
import { useCallback, useEffect } from "react";
import { delay } from "./utils/delay";
import { defaultRoute } from "@/constants/pages";

const Index = () => {
  const router = useRouter();

  const initialRoute = useCallback(async () => {
    await delay();
    router.navigate(defaultRoute);
  }, [router]);

  useEffect(() => {
    initialRoute();
  }, [initialRoute, router]);

  return null;
};

export default Index;
