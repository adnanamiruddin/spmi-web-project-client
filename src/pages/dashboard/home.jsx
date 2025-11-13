import AdminHomePageComp from "@/components/layouts/page-components/dashboard/admin/home";
import ProdiHomePageComp from "@/components/layouts/page-components/dashboard/fakultas-prodi/home";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";

export default function DashboardHomePage() {
  return (
    <DashboardContainer>
      <AdminHomePageComp />
      {/* <ProdiHomePageComp /> */}
    </DashboardContainer>
  );
}
