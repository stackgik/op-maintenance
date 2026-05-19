const FormError = ({ msg }: { msg: string | undefined }) => {
  return <p className="text-xs text-red-500 mt-1">{msg}</p>;
};

export default FormError;
