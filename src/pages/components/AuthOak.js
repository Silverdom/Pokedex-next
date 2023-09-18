import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import SelectBox from "./SelectBox";

const AuthOak = () => {
  const { data: session } = useSession();
  let selectItems = [
    {
      text: "Github",
      handler(e) {
        e.preventDefault();
        signIn('github');
      }
    },
    {
      text: "Cancel",
      handler(e) {
        e.preventDefault();
      }
    }
  ]
  return (
    <>
      <div className="bg-secondary absolute w-100 h-100 z-1 opacity-50"></div> 
      <div className="absolute w-100 z-1">
        <div className="oak-auth flex z-2">
          <div className="mt-auto flex justify-between pl-14 pr-5">
            <SelectBox selectItems={ selectItems } />
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
      </div>
    </>
  );
}

export default AuthOak;