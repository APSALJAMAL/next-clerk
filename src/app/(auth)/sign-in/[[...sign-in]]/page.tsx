import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "../../../../../public/Repulso-white.png";

function Page() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <div className="flex justify-center ">
            <Image
              src={Logo}
              alt="Logo"
              width={400}
              height={400}
              className="w-500 h-500 rounded-full bg-black object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <SignIn />
      </div>
    </div>
  );
}
export default Page;
