import Link from "next/link";
import Image from "next/image";
import { Experiment } from "contentlayer/generated";
import { BaseText } from "../base-text/base-text";

type Props = {
  labs: Experiment[];
};

function LabList({ labs }: Props) {
  if (!labs.length) {
    return (
      <BaseText className="text-neutral-400">No experiments found.</BaseText>
    );
  }

  return (
    <ul className="flex flex-wrap">
      {labs.map((lab) => (
        <li key={lab._id} className="w-1/2">
          <Link
            href={lab.url}
            className="p-4 flex flex-col focusable rounded-xl outline-none"
          >
            <Image
              className="rounded-sm mb-2"
              alt={`Experiment ${lab.title} preview`}
              src={lab.image}
              width={400}
              height={300}
            />
            <BaseText className="m-0 text-xs font-bold text-inherit">
              {lab.title}
            </BaseText>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { LabList };
