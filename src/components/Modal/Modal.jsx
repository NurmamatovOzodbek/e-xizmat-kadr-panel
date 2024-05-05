import { HiX, HiPlus } from "react-icons/hi";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
export function Modal({ setIsOpen, handleSubmit, register, onSubmit }) {
  return (
    <div className="bg-gray-800 w-[50%] p-4 overflow-y-auto scroll-none h-max">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold capitalize text-white">
          Xodim qo&apos;shish
        </h1>
        <HiX
          className="cursor-pointer text-white hover:text-red-500 transition"
          fontSize="28px"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div>
        <form
          action="#"
          className="w-full flex flex-col gap-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col gap-y-4 justify-between items-start">
            <div className="w-full flex gap-x-6">
              <Input
                register={{ ...register("full_name", { required: true }) }}
                labelTitle="Ism Familiya"
                type="text"
                placeholder="ex. Nurmamatov Ozodbek"
                labelClassName="text-lg text-gray-400 font-medium capitalize"
                classNames=" py-2.5 px-5 rounded-lg border-2 border-slate-400 outline-none focus:border-blue-400 bg-transparent text-white"
                widthContainer="[50%]"
              />
              <Input
                register={{ ...register("phone", { required: true }) }}
                labelTitle="Telefon raqam"
                type="number"
                placeholder="ex. +998971234567"
                labelClassName="text-lg text-gray-400 font-medium capitalize"
                classNames=" py-2.5 px-5 rounded-lg border-2 border-slate-400 outline-none focus:border-blue-400 bg-transparent text-white"
                widthContainer="[50%]"
              />
            </div>
            <div className="flex w-full justify-between">
              <div className="flex flex-col w-[48%] gap-y-3">
                <label
                  htmlFor="organization"
                  className="text-lg text-gray-400 font-medium capitalize"
                >
                  Ish joyini tanlang
                </label>
                <select
                  {...register("organization", { required: true })}
                  id="organization"
                  className="py-2.5 px-5 rounded-lg border-2 border-slate-400 outline-none focus:border-blue-400 bg-transparent text-slate-400"
                >
                  <option value="0">Tanlang</option>
                  <option value="1">Hokimlik</option>
                  <option value="1">Organ</option>
                </select>
              </div>
              {/* <div className="flex flex-col w-[48%] gap-y-3">
                <label
                  htmlFor="organization"
                  className="text-lg text-gray-400 font-medium capitalize"
                >
                  Kursni tanlang
                </label>
                <select
                  {...register("study_course", { required: true })}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  id="organization"
                  className="py-2.5 px-5 rounded-lg border-2 border-slate-400 outline-none focus:border-blue-400 bg-transparent text-slate-400"
                >
                  <option value="0">Tanlang</option>
                  <option value="1">
                    Elektron hukumat joriy etish malaka oshirish kursi
                  </option>
                  <option value="2">Iqtisodiy rivojlanish</option>
                </select>
              </div> */}
            </div>
            {/*
            {inputData.map((data) => {
              const { id, labelTitle, placeholder, type, registerName } = data;
              return (
                <Input
                  key={id}
                  register={{ ...register(registerName, { required: true }) }}
                  labelTitle={labelTitle}
                  type={type}
                  placeholder={placeholder}
                  labelClassName="text-lg text-gray-400 font-medium capitalize"
                  classNames=" py-2.5 px-5 rounded-lg border-2 border-slate-400 outline-none focus:border-blue-400 bg-transparent text-white"
                  widthContainer="[350px]"
                />
              );
            })} */}
          </div>
          <Button
            title="qo'shish"
            classNames="flex items-center justify-center gap-x-2 w-36 py-2 transition rounded-xl capitalize font-regular bg-blue-400 text-white hover:bg-green-400 hover:text-black"
            type="submit"
            icon={<HiPlus />}
          />
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  setIsOpen: PropTypes.func,
  handleSubmit: PropTypes.func,
  register: PropTypes.func,
  onSubmit: PropTypes.func,
};
