"use client";
import EditIcon from "@/app/assets/icons/EditIcon";
import MoreOptionIcon from "@/app/assets/icons/MoreOptionIcon";
import TrashIcon from "@/app/assets/icons/TrashIcon";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { useExpense } from "../hooks/useExpense";
import { IExpense } from "../interface/interface";
import NumberSeparator from "@/utils/NumberSeprator";
import PlusIcon from "@/app/assets/icons/PlusIcon";
import UpsertExpense from "./UpsertExpense";

const TableExpense = () => {
  const { expenseList, isOpenUpsert, onOpenChangeUpsert, onOpenUpsert } =
    useExpense();
  console.log("expenseList", expenseList);
  return (
    <div className="relative flex flex-col mb-16">
      <div className="overflow-auto px-1 h-full">
        <Table
          aria-label="domain table"
          shadow="none"
          isHeaderSticky
          className="!p-0 "
          removeWrapper
          classNames={{
            tr: "!rounded-14",
            th: "text-center bg-asiatech-gray-300 text-asiatech-gray-800 shadow-none",
            td: "text-center",
            thead: "shadow-none",
            table: "text-asiatech-gray-800",
          }}
        >
          <TableHeader>
            <TableColumn
              key="price"
              className="!rounded-l-none !rounded-r-14 !text-right border-none pr-7"
            >
              مبلغ
            </TableColumn>
            <TableColumn key="category">دسته بندی</TableColumn>
            <TableColumn
              className="!rounded-r-none rounded-l-14 flex justify-end items-center"
              key="actions"
            >
              <></>
            </TableColumn>
          </TableHeader>
          <TableBody
            loadingContent={<Spinner label="Loading..." />}
            emptyContent={"اطلاعاتی جهت نمایش وجود ندارد."}
          >
            {expenseList &&
              expenseList.map((item: IExpense, index) => {
                return (
                  <TableRow className="text-right bordertabel" key={item.id}>
                    <TableCell className="text-right">
                      {NumberSeparator(item.attributes.price)}
                    </TableCell>
                    <TableCell>{`${item.attributes.category.data.attributes.name}`}</TableCell>
                    <TableCell>
                      <Dropdown
                        placement="bottom-start"
                        aria-labelledby="option button"
                      >
                        <DropdownTrigger
                          onClick={() => {
                            console.log("zade shod");
                            // reset();
                            // setPopUpEditForCategory(setValue, item);
                            // setValue("id", item.id, { shouldValidate: true });
                            // setIsAddMode(false);
                          }}
                        >
                          <div className="w-full flex justify-end">
                            <MoreOptionIcon className="w-5 h-5 cursor-pointer" />
                          </div>
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Static Actions"
                          className=" text-asiatech-gray-800"
                        >
                          <DropdownItem
                            key="edit"
                            onClick={() => {
                              console.log("edit");
                              // onCatOpen();
                            }}
                          >
                            <div className="flex items-center">
                              <EditIcon className="w-6 h-6 ml-2" />
                              <span>ویرایش</span>
                            </div>
                          </DropdownItem>
                          <DropdownItem
                            key="delete"
                            onClick={() => {
                              console.log("delete");
                              // setSelectedRow(item);
                              // onOpen();
                            }}
                          >
                            <div className="flex items-center">
                              <TrashIcon className="w-6 h-6 ml-2" />
                              <span> حذف</span>
                            </div>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <div className="fixed right-4 bottom-8">
        <Button
          onClick={() => {
            onOpenUpsert();
          }}
          color="primary"
          endContent={<PlusIcon className="w-3 h-3" />}
        >
          افزودن
        </Button>
      </div>
      <UpsertExpense
        isOpenUpsert={isOpenUpsert}
        onOpenChangeUpsert={onOpenChangeUpsert}
      />
    </div>
  );
};

export default TableExpense;
