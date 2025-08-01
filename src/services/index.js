import { api } from "../api";



export const getAllCompanies = async () => {

  const res = await api.get("/suppliers");
  if (!res.data) {
    throw new Error("Get All Companies fetch Error");
  }
  console.log("All Fetch bitdi");
  return res.data
}


export const deleteCompany = async (id) => {
  const res = await api.delete(`/suppliers/${id}`);
  if (!res.data) {
    throw new Error("Delete Company fetch Error", id);
  }
  console.log("Delete bitdi");

  return res.data
}