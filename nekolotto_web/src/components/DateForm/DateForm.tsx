import React, { useState } from "react";
import moment from "moment";
import "moment-timezone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles";

type Props = {
  checkDate: number;
  setCheckDate: Function;
  toggleDateForm: Function;
};

const DateForm = ({ checkDate, setCheckDate, toggleDateForm }: Props) => {
  const today = moment().tz("America/Vancouver");
  const isDrawDay = (date: Date) => {
    const drawDay = date.getDay();

    return drawDay === 2 || drawDay === 5;
  };
  const isMaxDate = () => {
    if (parseInt(today.format("k")) < 20) {
      return today.subtract(1, "days").valueOf();
    } else {
      return today.valueOf();
    }
  };

  return (
    <div
      id="ScreenModal"
      style={styles.modal}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        if ((e.target as any).id === "ScreenModal") {
          toggleDateForm(false);
        }

        e.preventDefault();
      }}
    >
      <DatePicker
        selected={new Date(checkDate)}
        onChange={date => {
          const newDate = date?.valueOf();
          setCheckDate(newDate);
          toggleDateForm(false);
        }}
        minDate={new Date(moment("2009-09-25").valueOf())}
        maxDate={new Date(isMaxDate())}
        filterDate={isDrawDay}
        dateFormat="MMMM d, yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        inline
      />
    </div>
  );
};

export default DateForm;
