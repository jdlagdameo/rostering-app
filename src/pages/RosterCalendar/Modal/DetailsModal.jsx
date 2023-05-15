/**
 * Modal - Schedule Details Modal
 *
 *
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 05/15/2023
 *
 * @internal revisions:
 * +
 *
 */
import Moment from "moment";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import RoleBadge from "../../../components/RoleBadge";

const DetailsModal = ({ show, closeHandler, selectedEvent }) => {
  const { role, startAt, endAt, break_duration } = selectedEvent.extendedProps;

  const totalMinutes = Math.floor(break_duration / 60);
  const hours = Math.floor(totalMinutes / 60);

  return (
    <Modal show={show} onHide={closeHandler} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>View Schedule</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Name: {selectedEvent.title}</p>
        <p>
          Role: <RoleBadge role={role} />
        </p>
        <p>Start: {Moment(startAt).format("MMMM Do YYYY, h:mm A")}</p>
        <p>End: {Moment(endAt).format("MMMM Do YYYY, h:mm A")}</p>
        <p>Break Duration: {hours} hr/s</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeHandler}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DetailsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  selectedEvent: PropTypes.object.isRequired,
};

export default DetailsModal;
