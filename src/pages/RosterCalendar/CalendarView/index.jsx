/**
 * Roster - Calendar View
 *
 * @author: John Dave Lagdameo<jdlagdameo.dev@gmail.com>
 * @since: 05/15/2023
 *
 * @internal revisions:
 * +
 * +
 * +
 *
 */
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarView = ({ initialDate, dataShift }) => {
  // Header Toolbar config
  const customHeaderToolBar = {
    left: "prev,next today,filterMonthYear",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  };

  // custom buttons config
  const customButtonText = {
    today: "Today",
    month: "Month",
    week: "Week",
    day: "Day",
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={customHeaderToolBar}
      buttonText={customButtonText}
      navLinks={true}
      dayMaxEvents={true}
      editable={false}
      selectable={true}
      selectMirror={true}
      weekends={true}
      initialDate={initialDate}
      events={dataShift}
      height={750}
    />
  );
};

CalendarView.propTypes = {
  initialDate: PropTypes.string.isRequired,
  dataShift: PropTypes.array.isRequired,
};

export default CalendarView;
