import { useEffect, useState } from "react";
import CompanyCard from "../../components/companyCard";
import { getAllCompanies } from "../../services";
import EditModal from "../../components/editModal";

function Home() {
  const [companies, setCompanies] = useState([]);
  const [val, setVal] = useState("");
  const [up, setUp] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCompanies();
        setCompanies(data);
      } catch (error) {
        console.log(error);
      }
    })(); // <-- bu sonda () ilə funksiyanı İCRA edirsən
  }, [up]);

  return (
    <div>
      <form className="flex justify-center pb-[4rem]">
        <input
          type="text"
          className="border-2 rounded-md shadow-md p-[10px_30px] text-[18px]"
          onChange={(e) => setVal(e.target.value.toLowerCase())}
        />
      </form>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        {companies
          .filter((item) => item.companyName.toLowerCase().includes(val))
          .map((company) => (
            <CompanyCard
              {...company}
              key={company.id}
              up={up}
              setUp={setUp}
              setIsEditModalOpen={setIsEditModalOpen}
              setSelectedCompany={setSelectedCompany}
            />
          ))}
        {isEditModalOpen && selectedCompany && (
          <EditModal
            closeModal={closeModal}
            selectedCompany={selectedCompany}
            setUp={setUp}
            up={up}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
