export default function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="max-w-sm p-10 rounded shadow-xl w-full border border-red-400">
        <p>LOGIN</p>
        <div>
          <label>아이디 </label>
          <input type="text" id="user-id" placeholder="아이디"></input>
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            id="user-pw"
            placeholder="비밀번호 입력"
          ></input>
        </div>
        <div>
          <button>로그인</button>
        </div>
        <div>
          <button>게스트로 입장하기</button>
        </div>
      </form>
    </div>
  );
}
