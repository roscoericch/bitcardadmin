import React, { useState } from "react";
import Search from "../components/Search";
import ReactPaginate from "react-paginate";
import { giftCard } from "../constant";
import { HiOutlineMail } from "react-icons/hi";
import { styles } from "../styles";


const VirtualCard = () => {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState(giftCard);

  // paginations start
  const [pageNumber, setPageNumber] = useState(0);
  //data view page is datasperpage so you can change the number 5 to what you want...
  const datasPerPage = 5;
  const pageVisited = pageNumber * datasPerPage;
  const pageCount = Math.ceil(datas.length / datasPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayDatas = datas
    .slice(pageVisited, pageVisited + datasPerPage)
    .map((data, index) => {
      return (
        <tr className="text-center hover:bg-sec" key={index}>
          <th className="p-1 px-2 text-xl duration-500 border">{index + 1}</th>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.email}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.giftCard}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {"$ "}
            {data.amount}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.giftCard}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            <p>
              {data.transDate} <span>{data.transTime}</span>
            </p>
          </td>
        </tr>
      );
    });
  //pagination end

  return (
    <div>
      <p className={`${styles.topic}`}>virtual card transaction</p>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="p-2 pt-4">
        <div className="flex justify-between w-full gap-8 overflow-x-auto">
          <div className="">
            <p className="pb-2 text-2xl font-bold text-center">
              Virtual Card Transaction
            </p>
            <table className="w-full ">
              {/* head */}
              <thead className="">
                <tr className="rounded-full">
                  <th className="p-2 text-xl font-semibold border"></th>
                  <th className="p-2 text-xl font-semibold border">Email</th>
                  <th className="p-2 text-xl font-semibold border">Type</th>
                  <th className="p-2 text-xl font-semibold border">Balance</th>
                  <th className="p-2 text-xl font-semibold border">
                    Transaction
                  </th>
                  <th className="p-2 text-xl font-semibold border">Date</th>
                </tr>
              </thead>
              <tbody>{displayDatas}</tbody>
            </table>
            {/* pagenating */}
            <ReactPaginate
              containerClassName="flex gap-2 text-center rounded-lg items-center outline-none justify-center items-center mt-4"
              previousLabel={
                <span className="p-3 border rounded-lg outline-none hover:bg-active border-sec bg-sec">
                  Prev
                </span>
              }
              nextLabel={
                <span className="p-3 border rounded-lg outline-none hover:bg-active border-sec bg-sec">
                  Next
                </span>
              }
              pageCount={pageCount}
              onPageChange={changePage}
              pageClassName="hover:bg-active p-3 rounded-lg outline-none"
              disabledClassName={"bg-transparent outline-none"}
              activeLinkClassName={"p-3 bg-active rounded-lg outline-none"}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="pb-2 text-2xl font-bold text-center">
              User Transaction
            </p>
            <div className="flex flex-col font-thin text-[#9395A4]">
              <div className="flex items-center w-full gap-3 p-2 px-4 my-2 rounded-full bg-sec">
                <div className="flex flex-row items-center gap-2 text-center">
                  <div className="p-2 text-center rounded-full bg-[#3b3a62]">
                    <HiOutlineMail className="text-[#5ec88f]" />
                  </div>
                  <p>Email</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 rounded-2xl bg-sec">
                <p className="p-2 pl-4 rounded-full bg-primary">{"xvalzs"}</p>
                <p className="p-2 pl-4 rounded-full bg-primary">
                  Balance : ${"400"}
                </p>
                <div className="p-4 py-8 rounded-2xl bg-primary">
                  <h5>Transaction History</h5>
                  <div className="pt-4">
                    <div className="flex justify-between">
                      <p>{"Netflix"}</p>
                      <p>{"$100"}</p>
                      <p>{"23/12/2023  20:10"}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>{"Netflix"}</p>
                      <p>{"$100"}</p>
                      <p>{"23/12/2023  20:10"}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>{"Netflix"}</p>
                      <p>{"$100"}</p>
                      <p>{"23/12/2023  20:10"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualCard;
