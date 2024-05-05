import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../components";
import LoginImage from "../../../assets/img/intro.png";
import { authService } from "../../../services/AuthService";
import { apiClient } from "../../../services/APIClients";

export function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (loginData) => {
    const { username } = loginData;
    apiClient
      .getFetch("userRegister/")
      .then((data) => {
        data.map((item) => {
          if (username === item.username && item.is_staff === true) {
            authService
              .login(loginData)
              .then((data) => {
                if (data) {
                  navigate("/kadr/home");
                  setErrorMessage("");
                  reset();
                } else {
                  setErrorMessage("Login yoki parol noto'g'ri");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            setErrorMessage("Login yoki parol noto'g'ri");
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // if (data) {
    //   authService.login(data).then((data) => {
    //     console.log(data);
    //     if (data) {
    //       navigate("/dashboard/home");
    //       setErrorMessage("");
    //       reset();
    //     } else {
    //       setErrorMessage("Login yoki parol noto'g'ri");
    //     }
    //   });
    // }
  };
  // useEffect(() => {}, []);
  useEffect(() => {
    if (localStorage.getItem("accessTokenKadr")) {
      navigate("/kadr/home");
    }
  });
  return (
    <div className="w-100 bg-cyan-950 height flex items-center justify-center gap-x-7 py-4">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-2xl font-bold text-slate-400">
          &quot;Raqamlashtirish markazi&quot; kadr bo&#39;limi
        </h1>
        <img src={LoginImage} alt="" className="w-[540px]" />
      </div>
      <div className="w-[540px] bg-stone-800 rounded-lg h-700 py-4 px-14 flex justify-center flex-col gap-y-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          className="flex flex-col gap-y-6"
        >
          <div className="flex flex-col gap-y-2">
            <Input
              classNames="py-4 px-5 w-full text-white rounded-3xl border-2 border-slate-500 outline-0 bg-transparent"
              labelTitle="Login"
              placeholder="Login kiriting"
              id="login"
              register={{
                ...register("username", { required: true }),
              }}
              labelClassName="text-2xl text-slate-200"
              onChange={() => setErrorMessage("")}
            />
            {errors?.username?.type === "required" && (
              <p className="text-red-500 text-md">To&#39;ldiring</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <Input
              type="password"
              classNames="py-4 px-5 w-full text-white rounded-3xl border-2 border-slate-500 outline-0 bg-transparent"
              labelTitle="Parol"
              placeholder="Parol kiriting"
              id="password"
              register={{
                ...register("password", { required: true }),
              }}
              labelClassName="text-2xl text-slate-200"
              onChange={() => setErrorMessage("")}
            />
            {errors?.password?.type === "required" && (
              <p className="text-red-500 text-md">To&#39;ldiring</p>
            )}
          </div>
          {errorMessage ? (
            <p className="text-red-500 text-xl text-center">{errorMessage}</p>
          ) : (
            ""
          )}
          <Button
            type="submit"
            title="Kirish"
            classNames="text-xl w-full text-white bg-blue-600 py-4 px-5 rounded-3xl"
          />
        </form>
      </div>
    </div>
  );
}
