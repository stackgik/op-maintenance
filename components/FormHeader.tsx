import Image from "next/image";

const FormHeader = () => {
  return (
    <div className="mb-8 ">
      <Image
        src="/new_lagride_logo.png"
        alt="Lagride brand logo"
        height={50}
        width={140}
        className="object-contain brightness-110 contrast-110 hover:brightness-125 transition mx-auto mb-2"
        priority={false}
      />
      <p className="text-gray-600 text-center">Internal Platform Access</p>
    </div>
  );
};

export default FormHeader;
