import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

// Constants for storage keys
const STORAGE_KEY_USER = "@foodexplorerprojectbytonemonte:user";
const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [data, setData] = useState({});

  // Handle user sign-in
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password }, { withCredentials: true });
      const { user } = response.data;

      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      setData({ user });
    } catch (error) {
      handleError(error, "Não foi possível fazer o login.");
    }
  }

  // Handle user sign-out
  function signOut() {
    localStorage.removeItem(STORAGE_KEY_USER);
    setData({});
  }

  // Add a new product
  async function addNewProduct({ food, imageFoodFile }) {
    try {
      const responseId = await api.post("/foods/", food);

      if (isValidImage(imageFoodFile)) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("photo-food", imageFoodFile);

        const response = await api.patch(`/foods/photo-food/${responseId.data.food_id}`, fileUploadForm);
        food.url_image = response.data.url_image;
      }

      alert("Produto adicionado com sucesso!");
      return responseId.data.food_id;
    } catch (error) {
      handleError(error, "Não foi possível adicionar o produto.");
    }
  }

  // Update an existing product
  async function updateProduct({ food, imageFoodFile }) {
    try {
      if (imageFoodFile && isValidImage(imageFoodFile)) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("photo-food", imageFoodFile);

        const response = await api.patch(`/foods/photo-food/${food.id}`, fileUploadForm);
        food.url_image = response.data.url_image;
      }

      await api.put(`/foods/${food.id}`, food);
      alert("Produto atualizado com sucesso!");
    } catch (error) {
      handleError(error, "Não foi possível atualizar o produto.");
    }
  }

  // Validate user session
  useEffect(() => {
    async function checkSession() {
      try {
        const response = await api.get("/users/validated", { withCredentials: true });
        const { user } = response.data;
        setData({ user });
      } catch {
        console.warn("Sessão não válida ou expirada");
        localStorage.removeItem(STORAGE_KEY_USER);
        setData({});
      }
    }

    const storedUser = localStorage.getItem(STORAGE_KEY_USER);
    if (storedUser) {
      setData({ user: JSON.parse(storedUser) });
      checkSession();
    }
  }, []);

  // Helper: Check if an image file is valid
  function isValidImage(file) {
    return file && ["image/jpeg", "image/png"].includes(file.type) && file.size <= MAX_IMAGE_SIZE;
  }

  // Helper: Handle errors
  function handleError(error, defaultMessage) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert(defaultMessage);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        addNewProduct,
        updateProduct,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
