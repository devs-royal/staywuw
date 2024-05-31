
import { XCircleIcon } from "@heroicons/react/20/solid";

export function AlertTourDetails({alertInfo}) {

  return (
    <div className="absolute rounded-md bg-red-50 p-4 w-[25rem] z-[3] left-0 top-0 bottom-0 h-max my-auto">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {alertInfo.title}
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p className="m-0 text-wrap">
              {alertInfo.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
