import logo from "../../../public/logo.png";

export const Notification = () => {
  return (
    <aside className="bg-[#00000080] text-white rounded-2xl flex flex-col gap-2 pt-1.5 pb-3 px-2.5 -translate-y-full w-10/12">
      <div className="flex items-center gap-2">
        <figure className="w-6 h-6">
          <img
            src={logo}
            alt="Project Manager logo"
            className="w-full h-full rounded-full"
          />
        </figure>

        <h2 className="text-base font-bold">Trabalhar no aplicativo</h2>
      </div>

      <p className="text-sm font-normal">
        Adicione ideias, notas e faça um plano de organização de onde estiver.
      </p>

      <div className="flex justify-between items-center mt-1">
        <button
          type="button"
          className="bg-[#FFFCFCEB] text-black text-sm font-medium rounded-2xl p-4 py-1"
        >
          Agora não
        </button>

        <a
          href=""
          className="bg-[#4F46E5] text-sm font-medium rounded-2xl p-4 py-1"
        >
          Usar o aplicativo
        </a>
      </div>
    </aside>
  );
};
