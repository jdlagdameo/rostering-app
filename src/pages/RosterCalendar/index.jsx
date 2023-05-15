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

const RosterCalendar = () => {
  useEffect(() => {});

  const initialDate = "2018-06-01"; // for viewing purposes only

  const employeesJSON = [
    {
      last_name: "White",
      first_name: "Frank",
      id: 2634,
    },
    {
      last_name: "Brown",
      first_name: "Sally",
      id: 2635,
    },
    {
      last_name: "Purple",
      first_name: "Dylan",
      id: 2636,
    },
    {
      last_name: "Yellow",
      first_name: "Tom",
      id: 2637,
    },
    {
      last_name: "Blue",
      first_name: "Andrew",
      id: 2639,
    },
    {
      last_name: "Black",
      first_name: "Sarah",
      id: 2640,
    },
    {
      last_name: "Red",
      first_name: "Paul",
      id: 2641,
    },
    {
      last_name: "Green",
      first_name: "Steven",
      id: 2642,
    },
    {
      last_name: "Orange",
      first_name: "David",
      id: 2643,
    },
    {
      last_name: "Cyan",
      first_name: "Rachel",
      id: 2644,
    },
    {
      last_name: "Magenta",
      first_name: "John",
      id: 2645,
    },
    {
      last_name: "Teal",
      first_name: "Ashley",
      id: 2646,
    },
    {
      last_name: "Grey",
      first_name: "Emily",
      id: 2647,
    },
  ];

  const rolesJSON = [
    {
      background_colour: "#f38f60",
      name: "Supervisor",
      id: 2,
      text_colour: "#000000",
    },
    {
      background_colour: "#f5ffa2",
      name: "Checkouts",
      id: 1,
      text_colour: "#000000",
    },
    {
      background_colour: "#bf8ef1",
      name: "Stacker",
      id: 3,
      text_colour: "#000000",
    },
  ];

  const shiftsJSON = [
    {
      employee_id: 2647,
      start_time: "2018-06-18T05:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-18T13:30:00+00:00",
      id: 61569,
      break_duration: 3600,
    },
    {
      employee_id: 2643,
      start_time: "2018-06-18T05:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-18T13:30:00+00:00",
      id: 61568,
      break_duration: 3600,
    },
    {
      employee_id: 2640,
      start_time: "2018-06-18T05:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-18T13:30:00+00:00",
      id: 61567,
      break_duration: 3600,
    },
    {
      employee_id: 2644,
      start_time: "2018-06-18T13:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-18T21:30:00+00:00",
      id: 61570,
      break_duration: 3600,
    },
    {
      employee_id: 2646,
      start_time: "2018-06-18T13:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-18T21:30:00+00:00",
      id: 61571,
      break_duration: 3600,
    },
    {
      employee_id: 2645,
      start_time: "2018-06-18T13:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-18T21:30:00+00:00",
      id: 61572,
      break_duration: 3600,
    },
    {
      employee_id: 2636,
      start_time: "2018-06-18T21:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-19T05:30:00+00:00",
      id: 61565,
      break_duration: 3600,
    },
    {
      employee_id: 2639,
      start_time: "2018-06-18T21:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-19T05:30:00+00:00",
      id: 61566,
      break_duration: 3600,
    },
    {
      employee_id: 2647,
      start_time: "2018-06-19T05:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-19T13:30:00+00:00",
      id: 61577,
      break_duration: 3600,
    },
    {
      employee_id: 2643,
      start_time: "2018-06-19T05:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-19T13:30:00+00:00",
      id: 61576,
      break_duration: 3600,
    },
    {
      employee_id: 2635,
      start_time: "2018-06-19T05:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-19T13:30:00+00:00",
      id: 61575,
      break_duration: 3600,
    },
    {
      employee_id: 2640,
      start_time: "2018-06-19T13:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-19T21:30:00+00:00",
      id: 61578,
      break_duration: 3600,
    },
    {
      employee_id: 2645,
      start_time: "2018-06-19T13:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-19T21:30:00+00:00",
      id: 61580,
      break_duration: 3600,
    },
    {
      employee_id: 2644,
      start_time: "2018-06-19T13:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-19T21:30:00+00:00",
      id: 61579,
      break_duration: 3600,
    },
    {
      employee_id: 2639,
      start_time: "2018-06-19T21:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-20T05:30:00+00:00",
      id: 61573,
      break_duration: 3600,
    },
    {
      employee_id: 2636,
      start_time: "2018-06-19T21:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-20T05:30:00+00:00",
      id: 61574,
      break_duration: 3600,
    },
    {
      employee_id: 2642,
      start_time: "2018-06-20T05:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-20T13:30:00+00:00",
      id: 61600,
      break_duration: 3600,
    },
    {
      employee_id: 2647,
      start_time: "2018-06-20T05:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-20T13:30:00+00:00",
      id: 61601,
      break_duration: 3600,
    },
    {
      employee_id: 2640,
      start_time: "2018-06-20T05:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-20T13:30:00+00:00",
      id: 61599,
      break_duration: 3600,
    },
    {
      employee_id: 2635,
      start_time: "2018-06-20T13:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-20T21:30:00+00:00",
      id: 61602,
      break_duration: 3600,
    },
    {
      employee_id: 2634,
      start_time: "2018-06-20T13:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-20T21:30:00+00:00",
      id: 61604,
      break_duration: 3600,
    },
    {
      employee_id: 2643,
      start_time: "2018-06-20T13:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-20T21:30:00+00:00",
      id: 61603,
      break_duration: 3600,
    },
    {
      employee_id: 2636,
      start_time: "2018-06-20T21:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-21T05:30:00+00:00",
      id: 61598,
      break_duration: 3600,
    },
    {
      employee_id: 2639,
      start_time: "2018-06-20T21:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-21T05:30:00+00:00",
      id: 61597,
      break_duration: 3600,
    },
    {
      employee_id: 2646,
      start_time: "2018-06-21T05:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-21T13:30:00+00:00",
      id: 61561,
      break_duration: 3600,
    },
    {
      employee_id: 2635,
      start_time: "2018-06-21T05:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-21T13:30:00+00:00",
      id: 61559,
      break_duration: 3600,
    },
    {
      employee_id: 2641,
      start_time: "2018-06-21T05:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-21T13:30:00+00:00",
      id: 61560,
      break_duration: 3600,
    },
    {
      employee_id: 2642,
      start_time: "2018-06-21T13:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-21T21:30:00+00:00",
      id: 61564,
      break_duration: 3600,
    },
    {
      employee_id: 2634,
      start_time: "2018-06-21T13:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-21T21:30:00+00:00",
      id: 61562,
      break_duration: 3600,
    },
    {
      employee_id: 2643,
      start_time: "2018-06-21T13:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-21T21:30:00+00:00",
      id: 61563,
      break_duration: 3600,
    },
    {
      employee_id: 2639,
      start_time: "2018-06-21T21:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-22T05:30:00+00:00",
      id: 61558,
      break_duration: 3600,
    },
    {
      employee_id: 2636,
      start_time: "2018-06-21T21:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-22T05:30:00+00:00",
      id: 61557,
      break_duration: 3600,
    },
    {
      employee_id: 2646,
      start_time: "2018-06-22T05:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-22T13:30:00+00:00",
      id: 61592,
      break_duration: 3600,
    },
    {
      employee_id: 2637,
      start_time: "2018-06-22T05:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-22T13:30:00+00:00",
      id: 61593,
      break_duration: 3600,
    },
    {
      employee_id: 2635,
      start_time: "2018-06-22T05:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-22T13:30:00+00:00",
      id: 61591,
      break_duration: 3600,
    },
    {
      employee_id: 2642,
      start_time: "2018-06-22T13:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-22T21:30:00+00:00",
      id: 61594,
      break_duration: 3600,
    },
    {
      employee_id: 2634,
      start_time: "2018-06-22T13:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-22T21:30:00+00:00",
      id: 61596,
      break_duration: 3600,
    },
    {
      employee_id: 2643,
      start_time: "2018-06-22T13:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-22T21:30:00+00:00",
      id: 61595,
      break_duration: 3600,
    },
    {
      employee_id: 2645,
      start_time: "2018-06-22T21:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-23T05:30:00+00:00",
      id: 61589,
      break_duration: 3600,
    },
    {
      employee_id: 2641,
      start_time: "2018-06-22T21:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-23T05:30:00+00:00",
      id: 61590,
      break_duration: 3600,
    },
    {
      employee_id: 2646,
      start_time: "2018-06-23T05:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-23T13:30:00+00:00",
      id: 61553,
      break_duration: 3600,
    },
    {
      employee_id: 2644,
      start_time: "2018-06-23T05:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-23T13:30:00+00:00",
      id: 61551,
      break_duration: 3600,
    },
    {
      employee_id: 2647,
      start_time: "2018-06-23T05:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-23T13:30:00+00:00",
      id: 61552,
      break_duration: 3600,
    },
    {
      employee_id: 2642,
      start_time: "2018-06-23T13:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-23T21:30:00+00:00",
      id: 61555,
      break_duration: 3600,
    },
    {
      employee_id: 2634,
      start_time: "2018-06-23T13:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-23T21:30:00+00:00",
      id: 61556,
      break_duration: 3600,
    },
    {
      employee_id: 2637,
      start_time: "2018-06-23T13:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-23T21:30:00+00:00",
      id: 61554,
      break_duration: 3600,
    },
    {
      employee_id: 2640,
      start_time: "2018-06-23T21:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-24T05:30:00+00:00",
      id: 61549,
      break_duration: 3600,
    },
    {
      employee_id: 2645,
      start_time: "2018-06-23T21:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-24T05:30:00+00:00",
      id: 61550,
      break_duration: 3600,
    },
    {
      employee_id: 2644,
      start_time: "2018-06-24T05:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-24T13:30:00+00:00",
      id: 61585,
      break_duration: 3600,
    },
    {
      employee_id: 2647,
      start_time: "2018-06-24T05:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-24T13:30:00+00:00",
      id: 61584,
      break_duration: 3600,
    },
    {
      employee_id: 2641,
      start_time: "2018-06-24T05:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-24T13:30:00+00:00",
      id: 61583,
      break_duration: 3600,
    },
    {
      employee_id: 2646,
      start_time: "2018-06-24T13:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-24T21:30:00+00:00",
      id: 61588,
      break_duration: 3600,
    },
    {
      employee_id: 2637,
      start_time: "2018-06-24T13:00:00+00:00",
      role_id: 2,
      end_time: "2018-06-24T21:30:00+00:00",
      id: 61587,
      break_duration: 3600,
    },
    {
      employee_id: 2634,
      start_time: "2018-06-24T13:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-24T21:30:00+00:00",
      id: 61586,
      break_duration: 3600,
    },
    {
      employee_id: 2640,
      start_time: "2018-06-24T21:00:00+00:00",
      role_id: 1,
      end_time: "2018-06-25T05:30:00+00:00",
      id: 61581,
      break_duration: 3600,
    },
    {
      employee_id: 2645,
      start_time: "2018-06-24T21:00:00+00:00",
      role_id: 3,
      end_time: "2018-06-25T05:30:00+00:00",
      id: 61582,
      break_duration: 3600,
    },
  ];

  const dataShift = shiftsJSON.map((v) => {
    const role = rolesJSON.find((role) => role.id == v.role_id);
    const employee = employeesJSON.find((emp) => emp.id == v.employee_id);

    const { first_name, last_name } = employee;

    return {
      ...v,
      title: `${last_name} ${first_name}`,
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

  return (
    <div className="container row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
        <EmployeeList dataShift={dataShift} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
        <CalendarView initialDate={initialDate} dataShift={dataShift} />
      </div>
    </div>
  );
};

RosterCalendar.propTypes = {};

export default RosterCalendar;
