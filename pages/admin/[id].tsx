import AdminContext from "@comp/contexts/adminContext";
import AdminLogin from "@comp/admin/adminLogin";
import Limit from "@comp/admin/limit";
import CoreTime from "@comp/admin/coreTime";
import { useState } from "react";
import { AdminType } from "@comp/utils/types";

const Admin = () => {
  const [authAdmin, setAuthAdmin] = useState<boolean | null>(null);
  const [admin, setAdmin] = useState<AdminType>({
    company: "",
    email: "",
    password: "",
  });

  const AdminPage = () => {
    return (
      <div>
        <Limit />
        <CoreTime />
      </div>
    );
  };

  return (
    <AdminContext.Provider value={{ authAdmin, setAuthAdmin, admin, setAdmin }}>
      <div>{authAdmin ? <AdminPage /> : <AdminLogin />}</div>
    </AdminContext.Provider>
  );
};

export default Admin;
