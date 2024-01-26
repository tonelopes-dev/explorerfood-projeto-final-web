import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});
import { api } from "../services/api";

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user), { withCredentials: true });
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer o login.");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");
    setData({});
  }
  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);

        user.avatar = response.data.avatar;
      }

      await api.put("/user", user);
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({ user, token: data.token });

      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    const token = localStorage.getItem("@foodexplorer:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile }}>{children}</AuthContext.Provider>
  );
}

function userAuth() {
  const content = useContext(AuthContext);
  return content;
}

export { AuthProvider, userAuth };
