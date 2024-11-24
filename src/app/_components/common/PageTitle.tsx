import Link from "next/link";

type Props = {
  title: string;
  goBackHref?: string;
};

const PageTitle = (props: Props) => {
  const { title, goBackHref } = props;

  return (
    <div className="flex flex-col gap-8 w-full mt-12">
      <div className="flex gap-2 items-center">
        {goBackHref ? (
          <Link href={goBackHref}>
            <img
              src="/svg/leftArrowFull.svg"
              alt="back"
              className="cursor-pointer w-6 h-6"
            />
          </Link>
        ) : null}
        <p className="text-3xl">{title}</p>
      </div>
    </div>
  );
};

export default PageTitle;
