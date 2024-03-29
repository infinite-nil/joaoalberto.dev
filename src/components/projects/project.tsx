import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Repository } from "@/services/api/types";

type Props = Readonly<{
  repository: Repository;
}>;

function Project({ repository }: Props) {
  return (
    <li className="bg-white border-t-2 last:border-b-2 md:border md:flex-1 md:min-w-[calc(33%-4px)] md:max-w-[calc(33%-4px)] md:last:border md:h-[170px] hover:border-blue-950 group">
      <a
        aria-label={`${repository.name}: ${repository.description}`}
        className="border border-transparent p-8 flex justify-stretch md:p-2 md:flex-col md:items-end md:justify-between md:gap-2 h-full group-hover:border-blue-950"
        href={repository.html_url}
        rel="noopener"
        target="_blank"
      >
        <span className="content flex-1 pr-4">
          <span className="block text-lg md:mb-2 font-semibold">
            {repository.name}
          </span>
          <span className="block text-sm text-gray-500">
            {repository.description}
          </span>
        </span>
        <ArrowTopRightIcon className="m-2" />
      </a>
    </li>
  );
}

export { Project };
