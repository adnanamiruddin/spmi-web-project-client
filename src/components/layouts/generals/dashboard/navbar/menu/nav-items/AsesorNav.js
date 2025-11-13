import { Icon } from "@iconify/react";

const mainNavItems = [
  {
    href: "/dashboard/home",
    label: "Beranda",
    icon: <Icon icon="uil:home-alt" className="text-2xl" />,
  },
];

const auditNavItems = [
  {
    href: "/dashboard/asesor/audit/desk-evaluation",
    label: "Desk Evaluation",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/asesor/audit/visitasi",
    label: "Visitasi",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/asesor/audit/jadwal-visitasi",
    label: "Jadwal Visitasi",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/asesor/audit/download-laporan-ami",
    label: "Download Laporan AMI",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/asesor/audit/upload-laporan-ami",
    label: "Upload Laporan AMI",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
];

const laporanNavItems = [
  {
    href: "/dashboard/asesor/laporan/rekap-daftar-temuan",
    label: "Rekap Daftar Temuan",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
  {
    href: "/dashboard/asesor/laporan/rekap-daftar-kesesuaian",
    label: "Rekap Daftar Kesesuaian",
    icon: (
      <Icon icon="material-symbols:event-list-outline" className="text-2xl" />
    ),
  },
];

export const AsesorNav = [
  {
    title: "Menu",
    items: mainNavItems,
    type: "single",
  },
  {
    icon: <Icon icon="guidance:auditorium" className="text-2xl" />,
    title: "Audit",
    items: auditNavItems,
    type: "accordion",
  },
  {
    icon: <Icon icon="fluent:document-16-regular" className="text-2xl" />,
    title: "Laporan",
    items: laporanNavItems,
    type: "accordion",
  },
];
