import Image from "next/image";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"

const AuthOak = () => {
  let [showSelect, setSelectShow] = useState(true);

  setTimeout(() => {
    setSelectShow(true);
  }, 1000);

  return (
    <div className="oak-auth flex">
      <div className="mt-auto flex justify-between pl-14 pr-5">
        <div className={"select-box select-box-primary font-ds mt-auto mb-3 text-4xl text-center " + (showSelect ? "opacity-1" : "opacity-0")}>
          <ul>
            <li className="select-box-item select-box-active" onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}>Github</li>
            <li className="select-box-item">Cancel</li>
          </ul>
        </div>
        <div className="Oak">
          <Image src={ "/sprites/characters/professor-oak.png" } width={ 300 } height={ 0 } />
        </div>
      </div>
      <div>
        <div className="text-box text-box-primary font-ds text-4xl">
          <div className="text-box-content text-center">
            <p className="">Please tell me about yourself.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthOak;