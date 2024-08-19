import Image from "next/image";


function Footer({ className, img }) {
  return (
    <footer
      className={`max-sm:grid max-sm:grid-cols-3  flex flex-row px-2 py-6 w-full items-start ${className} mt-rowgap text-[#F5F5DC] bg-[#6F4E37]`}
    >
      <div className="flex flex-row gap-6 basis-[37%] flex-1 justify-end  max-sm:col-span-2 max-sm:col-start-1 max-sm:justify-start">
        <div className="flex text-footertext flex-col gap-1 text-black">
          <span>Get in touch</span>
          <p className="text-[#F5F5DC] ">
            ChowhubAUI@gmail.com
            <br />
            Chowhubstuff@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-1 text-footertext text-black">
          <span>Connect</span>
          <p className="text-[#F5F5DC] ">
            Twitter
            <br />
            LinkedIn
          </p>
        </div>
      </div>
      <div className="flex basis-[25%] justify-center flex-1">
        <div className="flex w-40 h-40 max-sm:w-20 max-sm:h-20 relative self-center ">
          {" "}
          <Image src={img} className="object-cover" fill alt="MainImage" />
        </div>
      </div>
      <div className="flex basis-[37%] flex-1 text-footertext           col-span-2 col-start-1">
        {" "}
        <div className="flex flex-col gap-1 lg:basis-[70%] text-black">
          <span>Venture</span>
          <p className="text-[#F5F5DC] text-footertext ">
            Augustine University, Igbonla Road, P.M.B. 1010, Ilara-Epe, Lagos
            State, Nigeria., Epe, Lagos State 106103
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer