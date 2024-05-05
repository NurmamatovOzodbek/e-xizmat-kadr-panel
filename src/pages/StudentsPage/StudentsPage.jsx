import { useState, useEffect } from "react";
import {
  Input,
  Pagination,
  StudentTable,
  PromoComponent,
  Modal,
} from "../../components";
import userTableData from "../../data/user-data-tables.json";
import { userTableHeadData } from "../../utils";
import { HiSearch } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { apiClient } from "../../services/APIClients";

export function StudentsPage() {
  const [searchStudent, setSearchStudent] = useState("");
  const [filterStudentData, setFilterStudentData] = useState(userTableData);
  const [startSlice, setStartSlice] = useState(0);
  const [endSlice, setEndSlice] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    apiClient
      .postFetch("studentApi/", data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    // setFilterStudentData([data, ...userTableData]);
    setIsOpen(false);
    reset();
  };
  useEffect(() => {
    apiClient
      .getFetch("studentApi")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setFilterStudentData(
      userTableData.filter((data) => {
        if (
          data.full_name.toLowerCase().includes(searchStudent.toLowerCase()) ||
          data.workplace.toLowerCase().includes(searchStudent.toLowerCase()) ||
          data.study_course.toLowerCase().includes(searchStudent.toLowerCase())
        ) {
          return data;
        } else {
          return null;
        }
      })
    );
  }, [searchStudent]);

  const previousPage = () => {
    if (endSlice <= 10) {
      setStartSlice(0);
      setEndSlice(10);
      setPageCount(1);
    } else {
      setStartSlice(startSlice - 10);
      setEndSlice(endSlice - 10);
      setPageCount(pageCount - 1);
    }
  };
  const nextPage = () => {
    if (endSlice >= filterStudentData.length) {
      setStartSlice(filterStudentData.length - 10);
      setEndSlice(filterStudentData.length);
      setPageCount(Math.ceil(filterStudentData.length / 10));
    } else {
      setStartSlice(startSlice + 10);
      setEndSlice(endSlice + 10);
      setPageCount(pageCount + 1);
    }
  };

  const gotoPrevPage = () => {
    setStartSlice(0);
    setEndSlice(10);
    setPageCount(1);
  };
  const gotoNextPage = () => {
    setStartSlice(filterStudentData.length - 10);
    setEndSlice(filterStudentData.length);
    setPageCount(Math.ceil(filterStudentData.length / 10));
  };
  return (
    <>
      <div className="flex flex-col gap-y-6">
        <h1 className="text-4xl text-white font-bold">Students</h1>
        <PromoComponent
          title="O'qiyotgan xodimlar"
          buttonTitle="xodim"
          onClick={() => setIsOpen(true)}
        />
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow bg-gray-800 flex flex-col gap-y-2 items-center">
          <div className="flex justify-between w-full">
            <div className=" w-[440px] flex items-center pl-4  gap-x-2">
              <HiSearch className="text-slate-500 text-2xl mt-3" />
              <Input
                type="search"
                classNames="bg-transparent outline-none focus:outline-none w-full text-white pt-2 pb-2"
                placeholder="Search by..."
                onChange={(e) => setSearchStudent(e.target.value)}
              />
            </div>
          </div>
          <StudentTable
            studentTableHead={userTableHeadData}
            studentTableData={filterStudentData}
            startSlice={startSlice}
            endSlice={endSlice}
          />
          <Pagination
            gotoNextPage={gotoNextPage}
            gotoPrevPage={gotoPrevPage}
            nextPage={nextPage}
            previousPage={previousPage}
            pageCount={pageCount}
            pageOptions={filterStudentData}
            pageOptionCount={10}
          />
        </div>
      </div>
      {isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <Modal
            setIsOpen={setIsOpen}
            handleSubmit={handleSubmit}
            register={register}
            onSubmit={onSubmit}
          />
        </div>
      ) : null}
    </>
  );
}