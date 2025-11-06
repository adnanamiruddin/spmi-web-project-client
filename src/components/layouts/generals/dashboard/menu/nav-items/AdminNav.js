import { Icon } from "@iconify/react";

const mainNavItems = [
  {
    href: "/dashboard/admin/home",
    label: "Beranda",
    icon: <Icon icon="uil:home-alt" className="text-2xl" />,
  },
];

const manajemenStandarMutuNavItems = [
  {
    href: "/dashboard/admin/manajemen-standar-mutu/daftar-nilai-mutu",
    label: "Daftar Nilai Mutu",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-standar-mutu/daftar-standar-mutu",
    label: "Daftar Standar Mutu",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
];

const manajemenEvaluasiDiriNavItems = [
  {
    href: "/dashboard/admin/manajemen-evaluasi-diri/pengaturan-periode",
    label: "Pengaturan Periode",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-evaluasi-diri/target-nilai-mutu",
    label: "Target Nilai Mutu",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
];

const manajemenAuditorNavItems = [
  {
    href: "/dashboard/admin/manajemen-auditor/ploting-auditor",
    label: "Ploting Auditor",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-auditor/data-auditor",
    label: "Data Auditor",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-auditor/pakta-integritas-auditor",
    label: "Pakta Integritas Auditor",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
];

const manajemenMonevNavItems = [
  {
    href: "/dashboard/admin/manajemen-auditor/rekap-desk-evaluation",
    label: "Rekap Desk Evaluation",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-auditor/daftar-temuan",
    label: "Daftar Temuan",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-auditor/daftar-kesesuaian",
    label: "Daftar Kesesuaian",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-auditor/upload-laporan-ami",
    label: "Upload Laporan AMI",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
];

const manajemenReferensiNavItems = [
  {
    href: "/dashboard/admin/manajemen-referensi/fakultas",
    label: "Fakultas",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-referensi/unit-penunjang",
    label: "Unit Penunjang",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-referensi/program-studi",
    label: "Program Studi",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-referensi/standar-nasional",
    label: "Standar Nasional",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-referensi/tahun-periode",
    label: "Tahun Periode",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-referensi/jenis-temuan",
    label: "Jenis Temuan",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-referensi/kategori-temuan",
    label: "Kategori Temuan",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
];

const manajemenDokumenNavItems = [
  {
    href: "/dashboard/admin/manajemen-dokumen/kategori-dokumen",
    label: "Kategori Dokumen",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-dokumen/manajemen-dokumen",
    label: "Manajemen Dokumen",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
];

const manajemenPenggunaNavItems = [
  {
    href: "/dashboard/admin/manajemen-pengguna/pengaturan-menu",
    label: "Pengaturan Menu",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-pengguna/pengaturan-grup",
    label: "Pengaturan Grup",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/admin/manajemen-pengguna/pengaturan-model",
    label: "Pengaturan Model",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
];

export const AdminNav = [
  {
    title: "Menu",
    items: mainNavItems,
    type: "single",
  },
  {
    icon: (
      <Icon
        icon="material-symbols:format-letter-spacing-standard-rounded"
        className="text-2xl"
      />
    ),
    title: "Manajemen Standar Mutu",
    items: manajemenStandarMutuNavItems,
    type: "accordion",
  },
  {
    icon: <Icon icon="hugeicons:chart-evaluation" className="text-2xl" />,
    title: "Manajemen Evaluasi Diri",
    items: manajemenEvaluasiDiriNavItems,
    type: "accordion",
  },
  {
    icon: <Icon icon="guidance:auditorium" className="text-2xl" />,
    title: "Manajemen Auditor",
    items: manajemenAuditorNavItems,
    type: "accordion",
  },
  {
    icon: (
      <Icon icon="material-symbols:monitoring-rounded" className="text-2xl" />
    ),
    title: "Manajemen Monev",
    items: manajemenMonevNavItems,
    type: "accordion",
  },
  {
    icon: (
      <Icon
        icon="material-symbols:quick-reference-all-outline-rounded"
        className="text-2xl"
      />
    ),
    title: "Manajemen Referensi",
    items: manajemenReferensiNavItems,
    type: "accordion",
  },
  {
    icon: <Icon icon="fluent:document-16-regular" className="text-2xl" />,
    title: "Manajemen Dokumen",
    items: manajemenDokumenNavItems,
    type: "accordion",
  },
  {
    icon: <Icon icon="lucide:user" className="text-2xl" />,
    title: "Manajemen Pengguna",
    items: manajemenPenggunaNavItems,
    type: "accordion",
  },
];
