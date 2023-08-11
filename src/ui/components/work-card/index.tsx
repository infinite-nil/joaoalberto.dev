import { Text } from "../text";

type Props = {
  company: string;
  role: string;
  description: string;
  start: string;
  end: string;
};

function WorkCard(props: Props) {
  return (
    <li key={props.company} className="relative">
      <p className="flex items-center text-xs font-semibold text-neutral-400 md:absolute md:right-full md:flex-row-reverse md:whitespace-pre">
        <span className="z-20 mr-4 inline-block h-[6px] w-[6px] rounded-full bg-amber-200 md:ml-4 md:mr-0" />
        <span>
          {props.start} - {props.end}
        </span>
      </p>
      <Text className="mb-2 pl-6 text-sm font-bold">
        {props.company} - {props.role}
      </Text>
      <Text className="m-0 max-w-full pl-6 text-xs text-neutral-400">
        {props.description}
      </Text>
    </li>
  );
}

export { WorkCard };
