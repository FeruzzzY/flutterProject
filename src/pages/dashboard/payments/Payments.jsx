import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CardRounded16 from "../../../components/cards/CardRounded16";
import TextSize20 from "../../../components/texts/TextSize20";
import Table from "../../../components/table/Table";
import Th from "../../../components/table/Th";
import Td from "../../../components/table/Td";
import { NavigationDashboard } from "../../../components/dashboard-layout";
import ClickIcon from "../../../components/icons/ClickIcon";

const Payments = () => {
  const { t } = useTranslation();
  const [list, setList] = useState([]);

  return (
    <>
      <NavigationDashboard title={t("sidebar_links.payments")} />
      <div className="lg:mt-[90px] mt-[60px] py-5 px-3.5">
        <CardRounded16>
          <TextSize20>Payment schedule</TextSize20>
          <Table
            th={
              <tr className="text-left">
                <Th>Transaction type</Th>
                <Th>Date</Th>
                <Th>Summary</Th>
                <Th>Status</Th>
              </tr>
            }
            td={[1, 2, 3, 4]?.map((item, index) => {
              return (
                <tr className="text-left" key={index}>
                  <Td>
                    <div className="flex gap-2 items-center">
                      <div className="flex justify-center items-center w-[45px] h-[45px] bg-white rounded-full border-2 border-gray">
                        <span className="ml-0">
                          <ClickIcon />
                        </span>
                      </div>
                      <span>Click</span>
                    </div>
                  </Td>
                  <Td>12.12.2023, 14:10</Td>
                  <Td>551.000.00 UZS</Td>
                  <Td>
                    <span
                      className={`py-1 px-2 rounded-lg text-green bg-greenLight`}
                    >
                      Accepted
                    </span>
                  </Td>
                </tr>
              );
            })}
          />
        </CardRounded16>
      </div>
    </>
  );
};

export default Payments;
