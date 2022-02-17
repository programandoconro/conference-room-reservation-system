import AdminContext from "@comp/contexts/adminContext";
import AdminLogin from "@comp/admin/adminLogin";
import Limit from "@comp/admin/limits";
import { useState } from "react";
import { AdminType, LimitsTypes } from "@comp/utils/types";

const Admin = () => {
  const [authAdmin, setAuthAdmin] = useState<boolean | null>(null);
  const [admin, setAdmin] = useState<AdminType>({
    company: "",
    email: "",
    password: "",
  });
  const [limits, setLimits] = useState<LimitsTypes>({
    company: "",
    limitSmallRoom: 0,
    limitMedRoom: 0,
    limitBigRoom: 0,
    coreTime: 0,
  });

  const AdminPage = () => {
    return (
      <div>
        <Limit />
      </div>
    );
  };

  return (
    <AdminContext.Provider
      value={{ authAdmin, setAuthAdmin, admin, setAdmin, limits, setLimits }}
    >
      <div>{authAdmin ? <AdminPage /> : <AdminLogin />}</div>
    </AdminContext.Provider>
  );
};

export default Admin;
