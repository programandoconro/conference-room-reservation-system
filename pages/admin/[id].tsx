import AdminContext from "@comp/contexts/adminContext";
import AdminLogin from "@comp/admin/adminLogin";
import Limit from "@comp/admin/limits";
import { useState } from "react";
import { AdminType } from "@comp/utils/types";
import { LimitsContextProvider } from "@comp/contexts/limitsContext";

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
      </div>
    );
  };

  return (
    <AdminContext.Provider value={{ authAdmin, setAuthAdmin, admin, setAdmin }}>
      <LimitsContextProvider>
        <div>{authAdmin ? <AdminPage /> : <AdminLogin />}</div>
      </LimitsContextProvider>
    </AdminContext.Provider>
  );
};

export default Admin;
