import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { IUpsertCategory, IUpsertSubCategory } from "../interface/interface";
import { useCategory } from "../hooks/useCategory";

const UpsertName = ({
  errors,
  getValues,
  handleSubmit,
  isOpenUpsert,
  onOpenChangeUpsert,
  onSubmitForm,
  setValue,
}: IUpsertSubCategory) => {
  console.log("errors:", errors);
  console.log("getValues:", getValues());
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
                  افزودن نام
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-wrap mb-4 gap-y-3">
                    <div className="w-full ">
                      <Input
                        variant="bordered"
                        type="text"
                        placeholder=""
                        label="نام"
                        className="w-full mt-2"
                        value={getValues("name")}
                        color={`${errors.name ? "danger" : "default"}`}
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

export default UpsertName;
