/**
 * Roster Calendar Page
 *
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 05/15/2023
 *
 * @internal revisions:
 * +
 * +
 * +
 */
import { useEffect } from "react";
import CalendarView from "./CalendarView";
import EmployeeList from "./EmployeeList";

import shiftsJSON from "../../data/shifts.json";
import employeesJSON from "../../data/employees.json";
import rolesJSON from "../../data/roles.json";

const RosterCalendar = () => {
  useEffect(() => {});

  const initialDate = "2018-06-01"; // for default viewing purposes only

  const dataShift = shiftsJSON.map((v) => {
    const role = rolesJSON.find((role) => role.id == v.role_id);
    const employee = employeesJSON.find((emp) => emp.id == v.employee_id);

    const { first_name, last_name } = employee;

    return {
      ...v,
      title: `${last_name}, ${first_name}`,
      startAt: v.start_time,
      start: v.start_time,
      endAt: v.end_time,
      end: v.end_time,
      role,
      employee,
      color: role.background_colour,
      textColor: role.text_colour,
      type: "P",
    };
  });

  console.log(dataShift);

  return (
    <div className="container-fluid row">
      <div className="col-xs-12 col-sm-12 col-md-2 col-lg-3 col-xl-3 col-xxl-3 mb-3">
        <EmployeeList dataShift={dataShift} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-10 col-lg-9 col-xl-9 col-xxl-9">
        <CalendarView initialDate={initialDate} dataShift={dataShift} />
      </div>
    </div>
  );
};

RosterCalendar.propTypes = {};

export default RosterCalendar;
