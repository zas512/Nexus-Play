import { BackgroundGradientAnimation } from "@/components/ui/AnimatedBackground";
const layout = ({ children }: { children: React.ReactNode }) => {
  return <BackgroundGradientAnimation>{children}</BackgroundGradientAnimation>;
};

export default layout;
