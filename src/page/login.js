import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button.js";
import GoogleLoginButton from "../components/googleButton.js";
import { useEffect, useState } from "react";
import KakaoButton from "../components/kakaoButton.js";
import NaverButton from "../components/NaverButton.js";
import Input from "../components/input.js";
import axios from "axios";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onLogin = (e) => {
    e.preventDefault();
    login();
  };
  const login = async () => {
    const response = await axios.post(
      "http://localhost:8000/api/users/dj-rest-auth/login/",
      {
        email: Email,
        password: Password,
      }
    );
    const token = response.data.key; // 토큰을 response.data.key에서 가져옵니다.
    console.log(token);
    localStorage.setItem("jwtToken", token)
    navigate("/home");
  };
  return (
    <div className="max-w-[400px] w-[400px] mx-auto bg-white p-4 border-2  border-black mt-4 rounded">
      <form onSubmit={onLogin}>
        <h2 className="text-5xl font-bold text-center py-5">~오볼추~</h2>
        <div className="flex flex-col py-2">
          <label>Email</label>
          <Input
            className="border p-2"
            type="text"
            placeholder="example@xxx.com"
            value={Email}
            onChange={onEmailHandler}
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Password</label>
          <Input
            className="border p-2"
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
        </div>
        <Button
          label={"로그인"}
          className={
            "border w-full my-5 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded"
          }
        />
        <div className="flex justify-between ">
          <Button
            label={"비밀번호 찾기"}
            className={"bg-transparent hover:bg-transparent"}
          />
          <Link to={`/register`}>
            <Button
              label={"아이디 만들기"}
              className={"bg-transparent hover:bg-transparent"}
            />
          </Link>
        </div>
      </form>
      <div style={{ textAlign: "center" }}>
        <KakaoButton />
        <GoogleLoginButton />
        <NaverButton />
      </div>
    </div>
  );
}

export default Login;