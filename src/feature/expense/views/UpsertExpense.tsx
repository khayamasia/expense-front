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
import { DatePickerIcon } from "@/components/DatePickerIcon";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import NumberSeparator from "@/utils/NumberSeprator";
import { convertNumberToWords } from "../helper/controller";
import { IUpsertExpense } from "../interface/interface";
import PlusIcon from "@/app/assets/icons/PlusIcon";
import UpsertCategory from "./UpsertCategory";
import { useCategory } from "../hooks/useCategory";
import UpsertSubCategory from "./UpsertName";
import { useName } from "../hooks/useName";
import UpsertName from "./UpsertName";
import convertPersianToEnglish from "@/utils/ConvertPersianToEnglish";

const UpsertExpense = ({
  isOpenUpsert,
  onOpenChangeUpsert,
  errors,
  getValues,
  setValue,
  onSubmitForm,
  handleSubmit,
  category,
  setCategory,
  names,
  setName,
}: IUpsertExpense) => {
  console.log(getValues());
  const {
    control,
    errors: errorsCat,
    getValues: getValuesCat,
    handleSubmit: handleSubmitCat,
    isOpenUpsertCat,
    isSubmitting,
    onOpenChangeUpsertCat,
    onOpenUpsertCat,
    onSubmitForm: onSubmitFormCat,
    register,
    reset,
    setValue: setValueCat,
  } = useCategory(setCategory, category, setValue);

  const {
    errors: errorsName,
    getValues: getValuesName,
    handleSubmit: handleSubmitName,
    isOpenUpsertName,
    onOpenChangeUpsertName,
    onOpenUpsertName,
    onSubmitForm: onSubmitFormName,
    setValue: setValueName,
  } = useName(setName, names, setValue);

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
                {getValues("id") != "" ? "ویرایش هزینه" : "افزودن هزینه"}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap mb-4 gap-y-3">
                  <div className="w-full ">
                    <div className="text-xs text-gray-500">
                      {Number(getValues("price")) > 0
                        ? convertNumberToWords(Number(getValues("price")))
                        : ""}
                    </div>
                    <Input
                      variant="bordered"
                      type="text"
                      placeholder=""
                      label="قیمت"
                      className="w-full mt-2"
                      value={getValues("price")}
                      color={`${errors.price ? "danger" : "default"}`}
                      classNames={{
                        input: "placeholder:text-asiatech-gray-500 ",
                        inputWrapper: [
                          "backdrop-saturate-200",
                          "focus-within:!border-asiatech-gray-500 ",
                        ],
                      }}
                      onChange={(e: any) => {
                        // Validate and set the value if it's a number
                        if (
                          /^\d*$/.test(convertPersianToEnglish(e.target.value))
                        ) {
                          setValue(
                            "price",
                            convertPersianToEnglish(e.target.value),
                            {
                              shouldValidate: true,
                            }
                          );
                        }
                      }}
                    />
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full pt-1">
                    <div className="flex gap-2 items-center">
                      <Autocomplete
                        label="دسته بندی"
                        variant="bordered"
                        defaultItems={category}
                        placeholder=""
                        className="max-w-xs "
                        color={`${errors.category ? "danger" : "default"}`}
                        selectedKey={getValues("category")}
                        onSelectionChange={(e: any) => {
                          setValue("category", e, {
                            shouldValidate: true,
                          });
                        }}
                      >
                        {(item) => (
                          <AutocompleteItem key={item.id}>
                            {item.name}
                          </AutocompleteItem>
                        )}
                      </Autocomplete>
                      <Button
                        isIconOnly
                        color="default"
                        onClick={() => {
                          onOpenUpsertCat();
                          setValueCat("name", "", { shouldValidate: true });
                        }}
                      >
                        <PlusIcon className="w-5 h-5" />
                      </Button>
                    </div>
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
                  <div className="w-full  pt-1">
                    <div className="flex gap-2 items-center">
                      <Autocomplete
                        label="نام"
                        variant="bordered"
                        defaultItems={names}
                        placeholder=""
                        className="max-w-xs"
                        color={`${errors.name ? "danger" : "default"}`}
                        selectedKey={getValues("name")}
                        onSelectionChange={(e: any) => {
                          setValue("name", e, {
                            shouldValidate: true,
                          });
                        }}
                      >
                        {(item) => (
                          <AutocompleteItem key={item.id}>
                            {item.name}
                          </AutocompleteItem>
                        )}
                      </Autocomplete>
                      <Button
                        isIconOnly
                        color="default"
                        onClick={() => {
                          // setValueName("category", getValues("category"), {
                          //   shouldValidate: true,
                          // });
                          onOpenUpsertName();
                          setValueName("name", "", { shouldValidate: true });
                        }}
                      >
                        <PlusIcon className="w-5 h-5" />
                      </Button>
                    </div>
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full ">
                    {/* <Input
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
                    /> */}
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full ">
                    <Textarea
                      variant="bordered"
                      label="توضیحات"
                      labelPlacement="inside"
                      placeholder=""
                      value={getValues("comment")}
                      onChange={(e: any) => {
                        setValue("comment", e.target.value, {
                          shouldValidate: true,
                        });
                      }}
                    />
                    {/* {errors.name && (
                      <p className="text-red-500 pt-2 text-sm">{`${errors.name.message}`}</p>
                    )} */}
                  </div>
                  <div className="w-full ">
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
                  بستن
                </Button>
                <Button type="submit" color="primary">
                  {getValues("id") === "" ? "افزودن" : "ویرایش"}
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
      <UpsertCategory
        errors={errorsCat}
        getValues={getValuesCat}
        handleSubmit={handleSubmitCat}
        isOpenUpsert={isOpenUpsertCat}
        onOpenChangeUpsert={onOpenChangeUpsertCat}
        onSubmitForm={onSubmitFormCat}
        setCategory={setCategory}
        setValue={setValueCat}
      />
      <UpsertName
        category={category}
        errors={errorsName}
        getValues={getValuesName}
        handleSubmit={handleSubmitName}
        isOpenUpsert={isOpenUpsertName}
        onOpenChangeUpsert={onOpenChangeUpsertName}
        onSubmitForm={onSubmitFormName}
        setValue={setValueName}
        setNames={setName}
      />
    </Modal>
  );
};

export default UpsertExpense;
