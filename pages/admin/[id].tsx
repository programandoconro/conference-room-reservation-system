import AdminContext from "@comp/contexts/adminContext";
import AdminLogin from "@comp/admin/adminLogin";
import Limit from "@comp/admin/limits";
import { useState } from "react";
import { AdminType, LimitsTypes } from "@comp/utils/types";
import WrapperLimitsContext from "@comp/contexts/wrapperLimitsContext";

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
      <WrapperLimitsContext>
        <div>{authAdmin ? <AdminPage /> : <AdminLogin />}</div>
      </WrapperLimitsContext>
    </AdminContext.Provider>
  );
};

export default Admin;
