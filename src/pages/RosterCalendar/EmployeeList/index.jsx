/**
 * Roster Calendar - Employee List Component
 *
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 05/15/2023
 *
 * @internal revisions:
 * +
 *
 */
import PropTypes from "prop-types";
import { FaUserFriends } from "react-icons/fa";

import RoleBadge from "../../../components/RoleBadge";

const EmployeeList = ({ dataShift }) => {
  // Distinct the employee list with role
  let empListArr = [
    ...new Map(dataShift.map((item) => [item["employee_id"], item])).values(),
  ].sort((a, b) => {
    let fa = a.title.toLowerCase(),
      fb = b.title.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="card m-auto">
      <div className="card-header">
        <h5>
          <FaUserFriends /> Employees
        </h5>
      </div>
      <div className="card-body m-0 p-0">
        <ul id="roster-emp-list" className="list-group text-sm ">
          {empListArr.map((emp) => (
            <li className="list-group-item" key={emp.employee_id}>
              {/* Name */}
              <b>Name: </b>
              {emp.employee.last_name + ", " + emp.employee.first_name}

              <br />
              {/* Role */}
              <b>Role: </b>
              <RoleBadge role={emp.role} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

EmployeeList.propTypes = {
  dataShift: PropTypes.array.isRequired,
};

export default EmployeeList;
