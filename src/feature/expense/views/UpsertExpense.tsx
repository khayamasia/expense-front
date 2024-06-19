import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { IUpsertExpense } from "../interface/interface";

const UpsertExpense = ({
  isOpenUpsert,
  onOpenChangeUpsert,
}: IUpsertExpense) => {
  return (
    <Modal
      isOpen={isOpenUpsert}
      placement="bottom"
      onOpenChange={onOpenChangeUpsert}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <form
              onSubmit={(e) => {
                // e.preventDefault();
                // handleSubmit((handleSubmitData) => {
                //   onSubmitForm(e);
                // })();
              }}
            >
              <ModalHeader className="flex flex-col gap-1">
                Add expense
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap mt-6 gap-y-3">
                  <div className="w-full xl:w-4/12 xl:pl-4">
                    <label className="text-asiatech-gray-700" dir="ltr">
                      نام محصول
                    </label>
                    <Input
                      variant="bordered"
                      type="text"
                      placeholder=""
                      className="w-full mt-2"
                      //   value={getValues("name")}
                      classNames={{
                        input: "placeholder:text-asiatech-gray-500",
                        inputWrapper: [
                          "backdrop-saturate-200",
                          "focus-within:!border-asiatech-gray-500 !border-1",
                          "inputWrapper: h-[40px]",
                        ],
                      }}
                      onChange={(e: any) => {
                        // setValue("name", e.target.value, {
                        //   shouldValidate: true,
                        // });
                      }}
                    />
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full xl:w-4/12 xl:pl-4">
                    <label className="text-asiatech-gray-700" dir="ltr">
                      نام محصول
                    </label>
                    <Input
                      variant="bordered"
                      type="text"
                      placeholder=""
                      className="w-full mt-2"
                      //   value={getValues("name")}
                      classNames={{
                        input: "placeholder:text-asiatech-gray-500",
                        inputWrapper: [
                          "backdrop-saturate-200",
                          "focus-within:!border-asiatech-gray-500 !border-1",
                          "inputWrapper: h-[40px]",
                        ],
                      }}
                      onChange={(e: any) => {
                        // setValue("name", e.target.value, {
                        //   shouldValidate: true,
                        // });
                      }}
                    />
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full xl:w-4/12 xl:pl-4">
                    <label className="text-asiatech-gray-700" dir="ltr">
                      نام محصول
                    </label>
                    <Input
                      variant="bordered"
                      type="text"
                      placeholder=""
                      className="w-full mt-2"
                      //   value={getValues("name")}
                      classNames={{
                        input: "placeholder:text-asiatech-gray-500",
                        inputWrapper: [
                          "backdrop-saturate-200",
                          "focus-within:!border-asiatech-gray-500 !border-1",
                          "inputWrapper: h-[40px]",
                        ],
                      }}
                      onChange={(e: any) => {
                        // setValue("name", e.target.value, {
                        //   shouldValidate: true,
                        // });
                      }}
                    />
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default UpsertExpense;
