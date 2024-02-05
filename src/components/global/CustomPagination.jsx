import React from "react";
import styled from "styled-components";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const PaginationStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;

  font-size: 0.875rem;
  line-height: 1.57;
  color: rgb(38, 38, 38);
  font-family: "Geologica-Regular", sans-serif;
  .pBtn {
    width: 30px;
    height: 30px;
    padding: 3px;
  }
  button {
    margin-right: 6px;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(34, 51, 70);
    border-radius: 8px;
    padding: 0px 8px;
    height: 30px;
    &:hover {
      background-color: rgb(249, 246, 244);
    }
  }
  .t1,
  .numberpage,
  select {
    margin-right: 6px;
  }
  select {
    background: rgb(255, 255, 255);
    border: 1px solid rgb(34, 51, 70);
    border-radius: 8px;
    padding: 0px 0 0 8px;
    height: 30px;
  }
  input {
    padding: 2px !important;
    width: 40px;
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
  .numberpage {
    display: flex;
    align-items: center;
    .inputpage {
      margin-left: 8px;
      display: flex;
      align-items: center;
      overflow: hidden;
      border: 1px solid rgb(34, 51, 70);

      background: rgb(255, 255, 255);
      border-radius: 8px;
      padding: 0px 0 0 8px;
      height: 30px;
      .inputpage_arrow12 {
        display: inline-flex;
        flex-direction: column;
        margin-right: 0;
        button {
          padding: 0;
          border-right: none;
        }
        .inputpage_arrow1 {
          border-radius: 0;
          height: 15px;
          margin-right: 0;
          line-height: 10px;
          span {
            img {
              width: 25px;
              height: 25px;
            }
          }
        }
        .inputpage_arrow2 {
          border-radius: 0;
          height: 15px;
          margin-right: 0;
          line-height: 10px;
          span {
            img {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
  }
`;

const CustomPagination = ({
  toFirstPage,
  singlePrevPage,
  singleNextPage,
  toLastPage,
  obj,
  count,
  listData,
  handleShowPageSize,
  optionsShowPageSize,
  handleGoToPage,
}) => {
  return (
    <>
      <PaginationStyle>
        <span>
          <button
            className="pBtn"
            onClick={toFirstPage}
            title="Первая страница"
          >
            <MdOutlineKeyboardDoubleArrowLeft size={20} />
          </button>
          <button
            className="pBtn"
            onClick={singlePrevPage}
            title="Предыдущая страница"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <button
            className="pBtn"
            onClick={singleNextPage}
            title="Следущая страница"
          >
            <MdKeyboardArrowRight size={20} />
          </button>
          <button
            className="pBtn"
            onClick={toLastPage}
            title="Последняя страница"
          >
            <MdOutlineKeyboardDoubleArrowRight size={20} />
          </button>
        </span>
        <p className="t1">
          Page {obj?.page} of{" "}
          {Math.round(count / obj?.p_size) !== 0
            ? Math.round(count / obj?.p_size) < count / obj?.p_size
              ? Math.round(count / obj?.p_size) + 1
              : Math.round(count / obj?.p_size)
            : 1}
        </p>
        <div className="numberpage">
          | Go to page:{" "}
          <div className="inputpage">
            <input
              type="number"
              value={obj?.page}
              onChange={(e) => handleGoToPage(e)}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              // pattern="\d*"
              // maxLength={Math.round(count / obj?.p_size)}
            />
            <div className="inputpage_arrow12">
              <button
                className="inputpage_arrow1"
                onClick={singleNextPage}
                title="Следущая страница"
              >
                <span>
                  <MdKeyboardArrowUp size={15} />
                </span>
              </button>
              <button
                className="inputpage_arrow2"
                onClick={singlePrevPage}
                title="Предыдущая страница"
              >
                <span>
                  <MdKeyboardArrowDown size={15} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="numberpage">
          {listData?.length} of {count} items
        </div>
        <select value={obj?.p_size} onChange={handleShowPageSize}>
          {optionsShowPageSize.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </PaginationStyle>
    </>
  );
};

export default CustomPagination;
