import SidebarBreadcrumb from "@/components/dashboard/sidebar-breadcrumb";
import Task from "@/components/dashboard/task";

export default function Page() {

  return (
    <>
      <SidebarBreadcrumb label="Tout les tâches"  />
      <Task />
    </>
  );
}
