import Accordion from "@/components/layouts/generals/Accordion";
import RadarChart from "@/components/layouts/generals/RadarChart";
import ChartSection from "@/components/layouts/page-components/home/ChartSection";
import HomeFooter from "@/components/layouts/page-components/home/HomeFooter";
import HomeHero from "@/components/layouts/page-components/home/HomeHero";
import TitleSection from "@/components/layouts/page-components/home/TitleSection";
import { THEME } from "@/const/THEME";

const sampleData = [
  {
    id: 1,
    kriteria: "Kualitas pelayanan publik",
    nilai_persen: 85,
    nilai_asli: 4.25,
    order: 1,
  },
  {
    id: 2,
    kriteria: "Inovasi dan efisiensi proses",
    nilai_persen: 20,
    nilai_asli: 4.5,
    order: 2,
  },
  {
    id: 3,
    kriteria: "Kepuasan pengguna layanan",
    nilai_persen: 75,
    nilai_asli: 3.75,
    order: 3,
  },
  {
    id: 4,
    kriteria: "Transparansi dan akuntabilitas",
    nilai_persen: 95,
    nilai_asli: 4.75,
    order: 4,
  },
  {
    id: 5,
    kriteria: "Kepatuhan terhadap standar mutu",
    nilai_persen: 40,
    nilai_asli: 4,
    order: 5,
  },
];

export default function HomePage() {
  return (
    <div>
      <HomeHero />

      <div className="min-h-screen pt-96 pb-16 px-28 relative">
        <div id="statistik">
          <TitleSection
            leftTitle="Data Grafik"
            rightTitle="Statistik Penjaminan Mutu"
          />

          <div className="mt-4 flex justify-center gap-4">
            <ChartSection
              title={
                <>
                  Persentase Rata Nilai Standar Mutu Prodi
                  <span className="font-normal">
                    <br />
                    Berdasarkan Tahun
                  </span>
                </>
              }
              className="w-1/2"
            >
              <RadarChart data={sampleData} maxValue={100} height={420} />
            </ChartSection>

            <ChartSection
              title={
                <>
                  Perkembangan Nilai Evaluasi Diri
                  <span className="font-normal">
                    <br />
                    Berdasarkan Tahun
                  </span>
                </>
              }
              className="w-1/2"
            >
              <p>Belum ada</p>
            </ChartSection>
          </div>
        </div>

        <div id="dokumen" className="mt-16">
          <TitleSection
            leftTitle="Dokumen"
            rightTitle="Kumpulan Dokumen SPMI"
          />

          <div className="mt-4 grid grid-cols-2 gap-4">
            <Accordion label="Kebijakan Mutu" theme={THEME.PURPLE}>
              <div className="mt-4">Kebijakan Mutu</div>
            </Accordion>
            <Accordion label="Manual Mutu" theme={THEME.PURPLE}>
              <div className="mt-4">Manual Mutu</div>
            </Accordion>

            <Accordion label="SOP" theme={THEME.PURPLE}>
              <div className="mt-4">SOP</div>
            </Accordion>
            <Accordion label="Standar" theme={THEME.PURPLE}>
              <div className="mt-4">Standar</div>
            </Accordion>

            <Accordion label="IKA Pusat dan PRODI" theme={THEME.PURPLE}>
              <div className="mt-4">IKA Pusat dan PRODI</div>
            </Accordion>
            <Accordion label="Formulir yang Digunakan" theme={THEME.PURPLE}>
              <div className="mt-4">Formulir yang Digunakan</div>
            </Accordion>

            <Accordion label="Dokumen Pendukung" theme={THEME.PURPLE}>
              <div className="mt-4">Dokumen Pendukung</div>
            </Accordion>
            <Accordion label="Hubungi Kami" theme={THEME.PURPLE}>
              <div className="mt-4">Hubungi Kami</div>
            </Accordion>
          </div>
        </div>

        <div className="mt-16">
          <HomeFooter />
        </div>
      </div>
    </div>
  );
}
