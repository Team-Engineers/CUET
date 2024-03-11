// import { Column } from "@ant-design/plots";
import { UilClipboardAlt, UilMoneyWithdrawal, UilUsdSquare } from "@iconscout/react-unicons";
import React from "react";
import Card from "../Card/Card";

const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  });
}
const Cards = () => {
  // const data = [
  //   {
  //     type: "Jan",
  //     attempted: 38,
  //   },
  //   {
  //     type: "Feb",
  //     attempted: 52,
  //   },
  //   {
  //     type: "Mar",
  //     attempted: 61,
  //   },
  //   {
  //     type: "Apr",
  //     attempted: 145,
  //   },
  //   {
  //     type: "May",
  //     attempted: 48,
  //   },
  //   {
  //     type: "Jun",
  //     attempted: 38,
  //   },
  //   {
  //     type: "July",
  //     attempted: 38,
  //   },
  //   {
  //     type: "Aug",
  //     attempted: 38,
  //   },
  //   {
  //     type: "Sept",
  //     attempted: 38,
  //   },
  //   {
  //     type: "Oct",
  //     attempted: 38,
  //   },
  //   {
  //     type: "Nov",
  //     attempted: 38,
  //   },
  //   {
  //     type: "Dec",
  //     attempted: 38,
  //   },
  // ];
  // const config = {
  //   data,
  //   xField: "type",
  //   yField: "attempted",
  //   color: ({ type }) => {
  //     return "#ffd333";
  //   },
  //   label: {
  //     positionType: "middle",
  //     style: {
  //       fill: "#FFFFFF",
  //       opacity: 1,
  //     },
  //   },
  //   xAxis: {
  //     label: {
  //       autoHide: true,
  //       autoRotate: false,
  //     },
  //   },
  //   meta: {
  //     type: {
  //       alias: "Month",
  //     },
  //     attempted: {
  //       alias: "Income",
  //     },
  //   },
  // };

  const cardsData = [
    {
      title: "General English",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 10,
      value: "5",
      png: UilUsdSquare,
      series: [
        {
          name: "attempted",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "General Test",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 20,
      value: "50",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "attempted",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Domain",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 40,
      value: "60  ",
      png: UilClipboardAlt,
      series: [
        {
          name: "attempted",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  return (
    <div className="">
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="grid md:gap-4 gap-2  grid-cols-2 max-md:grid-cols-1">
        {cardsData.map((card, id) => {
          return (
            <div className="parentContainer" key={id}>
              <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
              />
            </div>
          );
        })}
      </div>
      <div>
        <div className="mt-4">
          {/* <div className="max-w-[90%] mx-auto">
            <Column {...config} />
          </div> */}
        </div>
      </div>
    </div>

  );
};

export default Cards;
