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
      <p className="flex items-center text-xs font-semibold text-neutral-400">
        <span>
          {props.start} - {props.end}
        </span>
      </p>
      <Text className="mb-2 text-sm font-bold">
        {props.company} - {props.role}
      </Text>
      <Text className="m-0 max-w-full text-xs text-neutral-400">
        {props.description}
      </Text>
    </li>
  );
}

export { WorkCard };
