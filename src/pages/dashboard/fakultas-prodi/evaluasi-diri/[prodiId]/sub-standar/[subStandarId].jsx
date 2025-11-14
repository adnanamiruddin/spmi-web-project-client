import Badge from "@/components/layouts/generals/Badge";
import Container from "@/components/layouts/generals/Container";
import Button from "@/components/layouts/generals/functions/Button";
import RadioInput from "@/components/layouts/generals/functions/RadioInput";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { BORDER_RADIUS } from "@/const/BORDER";
import { PADDING } from "@/const/PADDING";
import { THEME } from "@/const/THEME";
import useRadio from "@/helpers/radioHelper";
import { Icon } from "@iconify/react";

const dummyStandarMutu = [
  {
    id: "1",
    judul: `Unit Pengelola Studi menjelaskan kegiatan dengan para mitranya dan hasil dari kegiatan tersebut`,
    pilihan: [
      "Melampaui SNI-DIKTI dan berdaya saing internasional",
      "Melampaui SNI-DIKTI dan berdaya saing nasional",
      "Sesuai SNI-DIKTI",
      "Tidak Sesuai SNI-DIKTI",
    ],
    dataDukung: [
      "SK tim penyusun V10TS",
      "Laporan Penyusunan",
      "V10TS, dan SK Pengesahan",
    ],
  },
];

export default function EvaluasiDiriSubStandardDetailPage() {
  const { selectedRadioValue, handleRadioChange } = useRadio(null);

  return (
    <DashboardContainer
      title="Evaluasi Diri"
      pageAddressList={["Evaluasi Diri"]}
    >
      <Container>
        <Container
          theme={THEME.DARK_PURPLE}
          padding={PADDING.NARROW}
          className="flex justify-between items-center"
        >
          <p className="w-[30%] text-xl font-medium">Tahun</p>
          <Container
            theme={THEME.WHITE}
            padding={PADDING.NARROW}
            borderRadius={BORDER_RADIUS.SMALL}
            className="w-[70%]"
          >
            <p className="text-center font-semibold text-xl">2025</p>
          </Container>
        </Container>

        <Container
          autoMarginTop
          theme={THEME.DARK_PURPLE}
          padding={PADDING.NARROW}
          className="flex justify-between items-center"
        >
          <p className="w-[30%] text-xl font-medium">Lembaga Akreditasi</p>
          <Container
            theme={THEME.WHITE}
            padding={PADDING.NARROW}
            borderRadius={BORDER_RADIUS.SMALL}
            className="w-[70%]"
          >
            <p className="text-center font-semibold text-xl">SPMI-BANPI</p>
          </Container>
        </Container>

        <Container
          autoMarginTop
          theme={THEME.DARK_PURPLE}
          padding={PADDING.NARROW}
          className="flex justify-between items-center"
        >
          <p className="w-[30%] text-xl font-medium">STANDAR NASIONAL</p>
          <Container
            theme={THEME.WHITE}
            padding={PADDING.NARROW}
            borderRadius={BORDER_RADIUS.SMALL}
            className="w-[70%]"
          >
            <p className="text-center font-semibold text-xl">-</p>
          </Container>
        </Container>

        <Container
          autoMarginTop
          theme={THEME.DARK_PURPLE}
          padding={PADDING.NARROW}
          className="flex justify-between items-center"
        >
          <p className="w-[30%] text-xl font-medium">Jumlah Standar Mutu</p>
          <div className="w-[70%] flex items-start">
            <Badge theme={THEME.BLUE}>1 Sub Standar Mutu</Badge>
          </div>
        </Container>
      </Container>

      <Container autoMarginTop>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">Standar Mutu</p>
          <button className="flex items-center gap-1">
            <Icon
              icon="material-symbols:change-circle-outline-rounded"
              className="text-2xl"
            />
            <p className="text-lg">Log Perubahan</p>
          </button>
        </div>

        <div className="flex flex-col mt-4 gap-4">
          {dummyStandarMutu.map((standard, i) => (
            <Container key={i} theme={THEME.DARK_PURPLE}>
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-gray-300 pb-6">
                  <div className="w-[75%]">
                    <p>
                      {i + 1}. {standard.judul}
                    </p>
                    <div className="mt-4 flex flex-col gap-4">
                      {standard.pilihan.map((option, j) => (
                        <RadioInput
                          key={j}
                          label={option}
                          checked={selectedRadioValue === j}
                          onChange={() => handleRadioChange(j)}
                        />
                      ))}
                    </div>
                  </div>

                  <Container
                    theme={THEME.WHITE}
                    padding={PADDING.NARROW}
                    borderRadius={BORDER_RADIUS.SMALL}
                    className="w-[25%]"
                  >
                    <p className="font-semibold">Data Dukung</p>
                    <div className="mt-1.5 flex flex-col gap-1.5">
                      {standard.dataDukung.map((supportingData, j) => (
                        <div key={j} className="">
                          - {supportingData}
                        </div>
                      ))}
                    </div>
                  </Container>
                </div>

                <div className="mt-4 flex justify-between">
                  <div className="w-[15%]">
                    <Button onClick={() => {}} theme={THEME.WHITE}>
                      Ubah File
                    </Button>
                  </div>
                  <div className="w-[15%]">
                    <Button
                      onClick={() => {}}
                      theme={THEME.GREEN}
                      icon={
                        <Icon icon="mingcute:add-fill" className="text-2xl" />
                      }
                    >
                      Tambah
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          ))}
        </div>
      </Container>
    </DashboardContainer>
  );
}
