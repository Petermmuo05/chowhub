import Image from "next/image";
import Person from "../../../public/person.svg";
import Face from "../../../public/face.svg";
import Mail from "../../../public/mail.svg";
import Phone from "../../../public/phone.svg";

import Cancel from "../../../public/cancel.svg";
import AdminLayout from "../AdminLayout";
import SignOut from "@/app/login/signOutButton";

export default function ProfilePage() {
  return (
    <AdminLayout>
      {" "}
      <div className="flex flex-col w-full ">
        <div className="flex-row gap-1 flex max-sm:mt-4 mt-5 items-center">
          <Image src={Person} alt="person" className="w-8 h-8" />
          <span className={` font-[600] max-sm:text-[22px]  text-[30px]`}>
            Account Profile
          </span>{" "}
        </div>{" "}
        <div className="flex flex-col gap-5 mt-5 w-full p-5 bg-poster rounded-lg">
          <ProfileItem pic={Face} title="Name" value="Mmuo Peter" />
          <ProfileItem pic={Mail} title="Email" value="petermmuo05@gmail.com" />
          <ProfileItem pic={Phone} title="Phone" value="08131199559" />
          <SignOut />
        </div>
      </div>
    </AdminLayout>
  );
}

function ProfileItem({ pic, title, value }) {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex flex-row gap-5 items-center">
        <Image
          src={pic}
          alt="person"
          className="w-7 h-7 max-sm:w-5 max-sm:h-5"
        />
        <div className="flex flex-col">
          <span className="text-[20px] max-sm:text-[16px] font-semibold">
            {title}
          </span>
          <input
            type="text"
            className="bg-poster removefocus text-[16px] max-sm:text-[13px] w-fit"
            value={value}
          />
        </div>
      </div>
      <Image
        src={Cancel}
        alt="person"
        className="w-7 h-7 max-sm:w-5 max-sm:h-5"
      />
    </div>
  );
}
