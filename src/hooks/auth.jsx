import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password }, { withCredentials: true });
      const { user } = response.data;
      localStorage.setItem("@foodexplorerproject:user", JSON.stringify(user));
      setData({ user });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer o login.");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@foodexplorerproject:user");
    setData({});
  }

  async function addNewProduct({ food, imageFoodFile }) {
    try {
      const responseId = await api.post(`/foods/`, food);

      if (imageFoodFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("photo-food", imageFoodFile);

        const response = await api.patch(`/foods/photo-food/${responseId.data.food_id}`, fileUploadForm);

        food.url_image = response.data.url_image;
      }
      alert("Produto adicionado com sucesso!");
      return responseId.data.food_id;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o produto.");
      }
    }
  }

  async function updateProduct({ food, imageFoodFile }) {
    try {
      if (imageFoodFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("photo-food", imageFoodFile);
        console.log("fileUploadForm");
        const response = await api.patch(`/foods/photo-food/${food.id}`, fileUploadForm);

        food.url_image = response.data.url_image;
      }

      await api.put(`/foods/${food.id}`, food);

      alert("Produto atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o produto.");
      }
    }
  }

  useEffect(() => {
    async function checkSession() {
      try {
        const response = await api.get("/sessions/validated", { withCredentials: true });
        const { user } = response.data;
        setData({ user });
      } catch (error) {
        console.log("Sessão não válida ou expirada");
        localStorage.removeItem("@foodexplorerproject:user");
        setData({});
      }
    }

    const user = localStorage.getItem("@foodexplorerproject:user");
    if (user) {
      setData({ user: JSON.parse(user) });
      checkSession(); // Revalida a sessão no carregamento do aplicativo
    }
  }, []);

  return <AuthContext.Provider value={{ signIn, user: data.user, signOut, addNewProduct, updateProduct }}>{children}</AuthContext.Provider>;
}

function userAuth() {
  const content = useContext(AuthContext);
  return content;
}

export { AuthProvider, userAuth };
