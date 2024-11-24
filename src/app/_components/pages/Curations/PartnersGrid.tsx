import { GetCurationsQuery } from "~/gql/graphql";
import { baseUrl } from "~/utils/constants";

type Props = {
  title: string;
  curations: GetCurationsQuery["curations"];
};

const PartnersGrid = async (props: Props) => {
  const { curations, title } = props;

  return (
    <div className="flex flex-col gap-10">
      <p className="text-2xl font-light">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {curations.map((curation, index) => (
          <a
            href={curation.link.replace("[baseUrl]", baseUrl)}
            key={index}
            className="aspect-video flex flex-col gap-2 justify-center items-center shadow-glassImage rounded-xl overflow-hidden duration-300 ease-in-out text-center p-4"
            target="_blank"
            style={{
              backgroundImage: `url(${curation.banner ?? "/images/profilePlaceholder.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <p className="font-light">{curation.organizer}</p> */}
            <p className="lg:text-xl">{curation.organizer}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnersGrid;
