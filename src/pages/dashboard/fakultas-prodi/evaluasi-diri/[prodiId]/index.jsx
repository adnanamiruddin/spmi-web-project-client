import Badge from "@/components/layouts/generals/Badge";
import Container from "@/components/layouts/generals/Container";
import Notification from "@/components/layouts/generals/dashboard/notification/Notification";
import Button from "@/components/layouts/generals/functions/Button";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { BORDER_RADIUS } from "@/const/BORDER";
import { PADDING } from "@/const/PADDING";
import { THEME } from "@/const/THEME";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const dummyDataStandards = [
  {
    id: 1,
    code: "1",
    title: "Standar Visi, Misi, Tujuan dan Sasaran",
    description: null,
    children: [
      {
        id: 11,
        code: "1.1",
        title: "Standar Visi, Misi, Tujuan dan Sasaran",
        children: [
          {
            id: 111,
            code: "1.1.1",
            title: "Standar Implementasi Visi, Misi, Tujuan, dan Sasaran Prodi",
            description: "Keterangan singkat (opsional)",
            subStandarCount: 1,
            tilikPertanyaanCount: 2,
            href: "/standar/1.1.1",
          },
          {
            id: 112,
            code: "1.1.2",
            title:
              "Standar Kesesuaian Visi, Misi, tujuan dan Sasaran (V10TS) Universitas, Fakultas dan Prodi",
            subStandarCount: 1,
            tilikPertanyaanCount: 2,
            href: "/standar/1.1.2",
          },
          {
            id: 113,
            code: "1.1.3",
            title:
              "Standar Penjabaran Visi, Misi, Tujuan, dan Sasaran Prodi. Standar Penjabaran Visi, Misi, Tujuan, dan Sasaran Prodi. Standar Penjabaran Visi, Misi, Tujuan, dan Sasaran Prodi. Standar Penjabaran Visi, Misi, Tujuan, dan Sasaran Prodi. Standar Penjabaran Visi, Misi, Tujuan, dan Sasaran Prodi",
            subStandarCount: 1,
            tilikPertanyaanCount: 2,
            href: "/standar/1.1.3",
          },
          {
            id: 114,
            code: "1.1.4",
            title: "Standar Sosialisasi Visi, Misi, Tujuan, dan Sasaran Prodi",
            subStandarCount: 1,
            tilikPertanyaanCount: 2,
            href: "/standar/1.1.4",
          },
          {
            id: 115,
            code: "1.1.5",
            title:
              "Standar Implementasi Visi, Misi, Tujuan, dan Sasaran Prodi (lanjutan)",
            subStandarCount: 1,
            tilikPertanyaanCount: 2,
            href: "/standar/1.1.5",
          },
          {
            id: 116,
            code: "1.1.6",
            title:
              "Standar Pemahaman Sivitas Akademika dan Tenaga Kependidikan Terhadap Visi, Misi, Tujuan, dan Sasaran Prodi",
            subStandarCount: 1,
            tilikPertanyaanCount: 2,
            href: "/standar/1.1.6",
          },
        ],
      },

      // additional subsections can be added here
      {
        id: 12,
        code: "1.2",
        title: "Standar Lainnya (contoh)",
        children: [
          {
            id: 121,
            code: "1.2.1",
            title: "Contoh Standar 1.2.1",
            subStandarCount: 0,
            tilikPertanyaanCount: 1,
            href: "/standar/1.2.1",
          },
        ],
      },
    ],
  },

  // other top-level sections (2, 3, ...) — example stub
  {
    id: 2,
    code: "2",
    title: "Standar Sumber Daya Manusia",
    children: [
      {
        id: 21,
        code: "2.1",
        title: "Standar Tenaga Kependidikan",
        children: [
          {
            id: 211,
            code: "2.1.1",
            title: "Standar Rekrutmen dan Pengembangan Tenaga Kependidikan",
            subStandarCount: 2,
            tilikPertanyaanCount: 3,
            href: "/standar/2.1.1",
          },
        ],
      },
    ],
  },
];

export default function EvaluasiDiriProdiDetailPage() {
  const router = useRouter();
  const { prodiId } = router.query;

  return (
    <DashboardContainer
      title="Evaluasi Diri"
      pageAddressList={["Evaluasi Diri"]}
    >
      <Notification theme={THEME.RED}>
        Total Instrumen yang Belum Dinilai Adalah 15, Silahkan Dicek Kembali
      </Notification>

      <Container autoMarginTop>
        <Container
          theme={THEME.DARK_PURPLE}
          padding={PADDING.NARROW}
          className="w-max flex justify-center items-center gap-4"
        >
          <p className="text-xl font-medium text-center">Daftar Standar Mutu</p>

          <Container
            theme={THEME.RED}
            padding={PADDING.NARROW}
            borderRadius={BORDER_RADIUS.LARGE}
            className="flex justify-center items-center"
          >
            <p className="font-semibold text-lg">340 Standar Mutu</p>
          </Container>
        </Container>

        {dummyDataStandards.map((section, i) => (
          <Container key={i} autoMarginTop theme={THEME.DARK_PURPLE}>
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-2 font-medium">
              <Icon icon="bxs:up-arrow" className="rotate-180" />
              <p>{section.code}</p>
              <p>{section.title}</p>
            </div>

            {/* Sub Sections */}
            <div className="divide-y divide-white ms-5 flex flex-col gap-2">
              {section.children.map((sub, j) => (
                <div key={j} className="pt-2">
                  <div className="flex items-start gap-2">
                    <Icon icon="bxs:up-arrow" className="rotate-180" />
                    <p>{sub.code}</p>
                    <p>{sub.title}</p>
                  </div>

                  {/* Items List */}
                  <div className="divide-y divide-gray-300">
                    {sub.children.map((item, k) => (
                      <div
                        key={k}
                        className="flex justify-between gap-4 py-2 ms-6"
                      >
                        <div className="w-[90%]">
                          <div className="flex items-start gap-2">
                            <p>{item.code}</p>
                            <p>{item.title}</p>
                          </div>

                          <div className="mt-2 flex items-start gap-2">
                            <Badge padding={PADDING.NARROW} theme={THEME.BLUE}>
                              {item.subStandarCount || 0} Sub Standar Mutu
                            </Badge>
                            <Badge padding={PADDING.NARROW} theme={THEME.GREEN}>
                              {item.tilikPertanyaanCount || 0} Daftar Tilik
                              Pertanyaan
                            </Badge>
                          </div>
                        </div>

                        <div className="w-[10%]">
                          <Button
                            onClick={() => {
                              router.push(
                                `/dashboard/fakultas-prodi/evaluasi-diri/${prodiId}/sub-standar/${item.id}`
                              );
                            }}
                            icon={
                              <Icon
                                icon="oui:arrow-up"
                                className="text-2xl rotate-90"
                              />
                            }
                            swapIconPosition
                          >
                            Pilih
                          </Button>
                        </div>
                      </div>
                    ))}

                    {/* If no items */}
                    {(!Array.isArray(sub.children) ||
                      sub.children.length === 0) && (
                      <div className="px-4 py-6 text-center text-violet-100">
                        Tidak ada standar pada sub-bagian ini.
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        ))}
      </Container>
    </DashboardContainer>
  );
}
