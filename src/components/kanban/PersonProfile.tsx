import imgProfile from "../../assets/profile-img-1.png";

export const PersonProfile = () => {
  return (
    <article className="bg-white rounded-xl flex items-center gap-2 px-2 py-1.5">
      <figure className="w-9 h-9">
        <img
          src={imgProfile}
          alt="Profile image"
          className="w-full h-full rounded-full"
        />
      </figure>

      <div className="flex flex-col">
        <h3 className="text-black text-sm">John Doe</h3>

        <span className="text-[#160A60] text-xs">Project Manager</span>
      </div>
    </article>
  );
};
