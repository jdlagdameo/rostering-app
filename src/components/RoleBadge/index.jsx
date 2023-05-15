/**
 * Role Badge component
 *
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 05/15/2023
 *
 * @internal revisions:
 * +
 *
 */
import PropTypes from "prop-types";

const RoleBadge = ({ role }) => {
  return (
    <span
      className="badge pull-right"
      style={{
        background: role.background_colour,
        color: role.text_colour,
      }}
    >
      {role.name}
    </span>
  );
};

RoleBadge.propTypes = {
  role: PropTypes.object.isRequired,
};

export default RoleBadge;
