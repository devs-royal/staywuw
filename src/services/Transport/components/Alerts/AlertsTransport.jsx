import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export function ErrorAlert({ infoAlert, setAlert }) {
  const closeAlert = () => {
    const alert = { ...infoAlert };
    setAlert({ isAlert: false, alert });
  };

  return (
    <Transition.Root show={infoAlert.isAlert} as={Fragment}>
      <Dialog className="relative z-10" onClose={closeAlert}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 py-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 mb-auto mt-auto">
                
                <div className="sm:flex sm:items-center sm:flex-col w-max">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <XCircleIcon
                        className="h-5 w-5 text-red-400"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        {infoAlert.title}
                      </h3>

                      <div className="mt-2 text-sm text-red-700">
                        <p className="m-0 text-wrap">{infoAlert.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
