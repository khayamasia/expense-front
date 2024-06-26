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
import { IUpsertCategory } from "../interface/interface";
import { useCategory } from "../hooks/useCategory";

const UpsertCategory = ({
  errors,
  getValues,
  handleSubmit,
  isOpenUpsert,
  onOpenChangeUpsert,
  onSubmitForm,
  setValue,
}: IUpsertCategory) => {
  return (
    <div>
      <Modal
        isOpen={isOpenUpsert}
        placement="center"
        onOpenChange={onOpenChangeUpsert}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit((handleSubmitData) => {
                    onSubmitForm(e);
                  })();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  افزودن دسته بندی
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-wrap mb-4 gap-y-3">
                    <div className="w-full ">
                      <Input
                        variant="bordered"
                        type="text"
                        placeholder=""
                        label="دسته بندی"
                        className="w-full mt-2"
                        value={getValues("name")}
                        classNames={{
                          input: "placeholder:text-asiatech-gray-500 ",
                          inputWrapper: [
                            "backdrop-saturate-200",
                            "focus-within:!border-asiatech-gray-500 ",
                          ],
                        }}
                        onChange={(e: any) => {
                          setValue("name", e.target.value, {
                            shouldValidate: true,
                          });
                        }}
                      />
                      {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant="light" onPress={onClose}>
                    بستن
                  </Button>
                  <Button type="submit" color="primary">
                    افزودن
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UpsertCategory;
