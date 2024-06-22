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
  Textarea,
} from "@nextui-org/react";
import React from "react";
import { IUpsertExpense } from "../interface/interface";
import { DatePickerIcon } from "@/components/DatePickerIcon";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import NumberSeparator from "@/utils/NumberSeprator";

const UpsertExpense = ({
  isOpenUpsert,
  onOpenChangeUpsert,
  errors,
  getValues,
  setValue,
  onSubmitForm,
  handleSubmit,
}: IUpsertExpense) => {
  const animals = [
    {
      id: "1",
      label: "Cat",
      value: "cat",
      description: "The second most popular pet in the world",
    },
    {
      id: "2",
      label: "Dog",
      value: "dog",
      description: "The most popular pet in the world",
    },
    {
      id: "3",
      label: "Elephant",
      value: "elephant",
      description: "The largest land animal",
    },
    {
      label: "Lion",
      value: "lion",
      description: "The king of the jungle",
      id: "4",
    },
  ];
  console.log(getValues());
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
                e.preventDefault();
                handleSubmit((handleSubmitData) => {
                  onSubmitForm(e);
                })();
              }}
            >
              <ModalHeader className="flex flex-col gap-1">
                Add expense
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap mb-4 gap-y-3">
                  <div className="w-full xl:w-4/12 xl:pl-4">
                    <Input
                      variant="bordered"
                      type="text"
                      placeholder=""
                      label="قیمت"
                      className="w-full mt-2"
                      value={getValues("price")}
                      classNames={{
                        input: "placeholder:text-asiatech-gray-500 ",
                        inputWrapper: [
                          "backdrop-saturate-200",
                          "focus-within:!border-asiatech-gray-500 ",
                        ],
                      }}
                      onChange={(e: any) => {
                        setValue("price", e.target.value, {
                          shouldValidate: true,
                        });
                      }}
                    />
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full xl:w-4/12 xl:pl-4 pt-1">
                    <Autocomplete
                      label="دسته بندی"
                      variant="bordered"
                      defaultItems={animals}
                      placeholder=""
                      className="max-w-xs "
                      selectedKey={getValues("category")}
                      onSelectionChange={(e: any) => {
                        console.log(e);

                        setValue("category", e, {
                          shouldValidate: true,
                        });
                      }}
                      // onSelectionChange={setValue}
                    >
                      {(item) => (
                        <AutocompleteItem key={item.id}>
                          {item.label}
                        </AutocompleteItem>
                      )}
                    </Autocomplete>
                    {/* <Autocomplete
                      options={options}
                      onChange={(e) => {
                        console.log(e);
                      }}
                    /> */}
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full xl:w-4/12 xl:pl-4 pt-1">
                    <Autocomplete
                      label="زیر دسته بندی"
                      variant="bordered"
                      defaultItems={animals}
                      placeholder=""
                      className="max-w-xs"
                      selectedKey={getValues("sub_category")}
                      onSelectionChange={(e: any) => {
                        setValue("sub_category", e, {
                          shouldValidate: true,
                        });
                      }}
                    >
                      {(item) => (
                        <AutocompleteItem key={item.id}>
                          {item.label}
                        </AutocompleteItem>
                      )}
                    </Autocomplete>
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full xl:w-4/12 xl:pl-4">
                    <Input
                      variant="bordered"
                      type="text"
                      label="نام"
                      placeholder=""
                      className="w-full mt-2"
                      value={getValues("name")}
                      classNames={{
                        input: "placeholder:text-asiatech-gray-500",
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
                  <div className="w-full xl:w-4/12 xl:pl-4">
                    <Textarea
                      variant="bordered"
                      label="توضیحات"
                      labelPlacement="inside"
                      placeholder=""
                      value={getValues("comment")}
                      onChange={(e: any) => {
                        console.log(e);
                        setValue("comment", e.target.value, {
                          shouldValidate: true,
                        });
                      }}
                    />
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full xl:w-4/12 xl:pl-4">
                    <div className="w-full">
                      {/* <label className="text-asiatech-gray-700 ">تاریخ</label> */}
                      <DatePickerIcon
                        portal={false}
                        value={new DateObject(getValues("date"))
                          .convert(persian, persian_fa)
                          .format()}
                        onChange={(e: any) => {
                          let date = new DateObject(e)
                            .convert(gregorian, gregorian_en)
                            .format("YYYY-MM-DD");
                          setValue("date", date, { shouldValidate: true });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" color="primary">
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
