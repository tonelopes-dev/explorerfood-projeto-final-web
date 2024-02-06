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
    const user = localStorage.getItem("@foodexplorer:user");
    const token = localStorage.getItem("@foodexplorer:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, addNewProduct, updateProduct }}>
      {children}
    </AuthContext.Provider>
  );
}

function userAuth() {
  const content = useContext(AuthContext);
  return content;
}

export { AuthProvider, userAuth };
