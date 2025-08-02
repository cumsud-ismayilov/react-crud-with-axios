import { useEffect, useState } from "react";
import CreateModal from "../../components/createModal";
import DeleteIcon from "../../icons/delete";
import EditIcon from "../../icons/edit";
import { deleteCompany } from "../../services";

function Create() {
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [companies, setCompanies] = useState(() => {
    // İlk yükləndikdə localStorage-dan oxu (əgər varsa)
    const saved = localStorage.getItem("companies");
    return saved ? JSON.parse(saved) : [];
  });
  const [up, setUp] = useState(false);
  const openCreate = () => {
    setIsCreateModal(true);
  };

 const delete_company = async (id) => {
  try {
    await deleteCompany(id); 
    setCompanies((prev) => prev.filter((company) => company.id !== id)); // Local state-dən də sil
  } catch (error) {
    console.log(error);
  }
};


  useEffect(() => {
    localStorage.setItem("companies", JSON.stringify(companies));
  }, [companies]);

  return (
    <>
      <div className="flex justify-center">
        <button
          className="bg-green-500 text-white px-[30px] py-[15px] rounded-[10px] w-[15%] cursor-pointer"
          id="openModal"
          onClick={openCreate}
        >
          Create
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        {companies.map((item, idx) => (
          <div key={idx} className="rounded-md shadow-md p-[30px] relative">
            <h2 className="text-[30px]">{item.companyName}</h2>
            <h3>{item.contactName}</h3>
            <p>{item.contactTitle}</p>
            <div className="absolute bottom-[10px] right-[15px]">
              <button className="cursor-pointer" onClick={() => delete_company(item.id)}>
                <DeleteIcon />
              </button>
              <button className="cursor-pointer">
                <EditIcon />
              </button>
            </div>
          </div>
        ))}
        {isCreateModal && (
          <CreateModal
            setIsCreateModal={setIsCreateModal}
            up={up}
            setUp={setUp}
            companies={companies}
            setCompanies={setCompanies}
          />
        )}
      </div>
    </>
  );
}

export default Create;
