import DashboardContainer from "@/components/utils/generals/dashboard-container";
import Image from "next/image";

export default function DashboardHomePage() {
  return (
    <DashboardContainer>
      <div className="w-full h-screen relative">
        <Image
          src="/dashboard-home-data-visualization-image.png"
          alt="Data Visualization"
          width={500}
          height={500}
          className="w-full object-contain absolute -left-16"
        />
      </div>

      <p>Home</p>
    </DashboardContainer>
  );
}
