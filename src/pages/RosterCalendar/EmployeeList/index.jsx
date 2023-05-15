// import React from "react";
import PropTypes from "prop-types";

const EmployeeList = ({ dataShift }) => {
  let empListArr = [
    ...new Map(dataShift.map((item) => [item["employee_id"], item])).values(),
  ];

  return (
    <>
      <h3>Employees</h3>
      <ul className="list-group">
        {empListArr.map((emp) => (
          <li className="list-group-item" key={emp.employee_id}>
            <b>Name: </b>
            {emp.employee.last_name + ", " + emp.employee.first_name}

            <br />
            <b>Role: </b>
            <span
              className="badge pull-right"
              style={{
                background: emp.role.background_colour,
                color: emp.role.text_colour,
              }}
            >
              {emp.role.name}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

EmployeeList.propTypes = {
  dataShift: PropTypes.array.isRequired,
};

export default EmployeeList;
