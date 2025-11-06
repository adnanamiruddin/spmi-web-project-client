import { Icon } from "@iconify/react";

export const ProdiNav = [
  {
    title: "Menu",
    items: [
      {
        href: "/dashboard/prodi/home",
        label: "Beranda",
        icon: <Icon icon="uil:home-alt" className="text-2xl" />,
      },
    ],
    type: "single",
  },
  {
    items: [
      {
        href: "/dashboard/prodi/target-nilai-mutu",
        label: "Target Nilai Mutu",
        icon: (
          <Icon
            icon="material-symbols:format-letter-spacing-standard-rounded"
            className="text-2xl"
          />
        ),
      },
    ],
    type: "single",
  },
  {
    items: [
      {
        href: "/dashboard/prodi/evaluasi-diri",
        label: "Evaluasi Diri",
        icon: <Icon icon="hugeicons:chart-evaluation" className="text-2xl" />,
      },
    ],
    type: "single",
  },
  {
    items: [
      {
        href: "/dashboard/prodi/daftar-temuan",
        label: "Daftar Temuan",
        icon: (
          <Icon
            icon="material-symbols:quick-reference-all-outline-rounded"
            className="text-2xl"
          />
        ),
      },
    ],
    type: "single",
  },
  {
    items: [
      {
        href: "/dashboard/prodi/hasil-desk-evaluation",
        label: "Hasil Desk Evaluation",
        icon: <Icon icon="fluent:document-16-regular" className="text-2xl" />,
      },
    ],
    type: "single",
  },
  {
    items: [
      {
        href: "/dashboard/prodi/hasil-desk-evaluation",
        label: "Manajemen Dokumen",
        icon: (
          <Icon
            icon="material-symbols:monitoring-rounded"
            className="text-2xl"
          />
        ),
      },
    ],
    type: "single",
  },
];
