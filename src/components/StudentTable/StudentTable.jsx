import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { apiClient } from "../../services/APIClients";
export function StudentTable({
  studentTableHead,
  studentTableData,
  startSlice,
  endSlice,
}) {
  const [selectOption, setSelectOption] = useState(null);
  const { getFetch } = apiClient;
  useEffect(() => {
    getFetch("attendanceLevel")
      .then((data) => {
        setSelectOption(data.results.reverse());
      })
      .catch((error) => {
        return error;
      });
  }, []);

  useEffect(() => {
    getFetch("attendance")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  return (
    <table className="w-full text-center text-white">
      <thead>
        <tr>
          {studentTableHead.map((header) => {
            const { Header, accessor } = header;
            return (
              <th
                key={accessor}
                scope="col"
                className="border-y border-slate-500 pt-4 pb-4 pl-2 capitalize"
              >
                {Header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {studentTableData.slice(startSlice, endSlice).map((body) => {
          const { id, full_name, workplace, study_course } = body;
          return (
            <tr key={id}>
              <td className="w-[20%] border border-slate-500 pt-4 pb-4">
                {full_name}
              </td>
              <td className="border border-slate-500 pt-4 pb-4">
                {study_course}
              </td>

              <td className="w-[20%] border border-slate-500 pt-4 pb-4">
                {workplace}
              </td>
              <td className="w-[15%] border border-slate-500 pt-4 pb-4">
                {selectOption && selectOption[0].title}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

StudentTable.propTypes = {
  studentTableHead: PropTypes.array,
  studentTableData: PropTypes.array,
  startSlice: PropTypes.number,
  endSlice: PropTypes.number,
};
