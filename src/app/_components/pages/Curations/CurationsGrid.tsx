import { GetCurationsQuery } from "~/gql/graphql";
import { baseUrl } from "~/utils/constants";

type Props = {
  title: string;
  curations: GetCurationsQuery["curations"];
};

const CurationsGrid = async (props: Props) => {
  const { curations, title } = props;

  return (
    <div className="flex flex-col gap-10">
      {/* <p className="text-2xl font-light">{title}</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {curations.map((curation, index) => (
          <a
            href={curation.link.replace("[baseUrl]", baseUrl)}
            key={index}
            className="aspect-square relative flex flex-col gap-2 justify-between items-center shadow-glassImage rounded-xl overflow-hidden duration-300 ease-in-out text-center "
            style={{
              backgroundImage: `url(${curation.banner ?? "/images/profilePlaceholder.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            target="_blank"
          >
            <div className="absolute w-full h-full rounded-xl flex flex-col gap-2 justify-between items-center p-4 bg-black bg-opacity-30">
              <div className="opacity-0 pointer-events-none">
                <p className="text-xs">placeholder</p>
              </div>
              <div>
                <p className="text-xl">{curation.title}</p>
              </div>
              {curation.genre ? (
                <div>
                  <p className="text-xs">{curation.genre}</p>
                </div>
              ) : curation.organizer ? (
                <div>
                  <p className="text-xs">{curation.organizer}</p>
                </div>
              ) : (
                <div className="opacity-0 pointer-events-none">
                  <p className="text-xs">placeholder</p>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CurationsGrid;
