import * as React from "react";
import "../styles/App.css";
import {
  Day,
  DragAndDrop,
  Inject,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Week,
} from "@syncfusion/ej2-react-schedule";
import { getTimeTable } from "../services/time-table-service";
import { Internationalization } from "@syncfusion/ej2-base";
import TimeTableDayEvent from "./day-event/Time-table-day-event";
import TimeTableWeekEvent from "./week-event/Time-table-week-event";

/**
 * displays time table  with day and week view using full calendar plugin
 */
class SfTimeTable extends React.Component {
  state = { events: [] };
  instance = new Internationalization();
  scheduleObj = null;

  /**
   * after the component has mounted call apis to initalize the data for time table
   */
  componentDidMount = () => {
    // get events to display on time table and set it in state so it can be displayed on calendar
    const events = getTimeTable();
    this.setState({ events });
  };

  /**
   *  template to display event in day view
   * @param {*} event 
   * @returns 
   */
  dayEventTemplate(event) {
    return <TimeTableDayEvent event={event} />;
  }

  /**
   * template to display event in week view
   * @param {*} event 
   * @returns 
   */
  weekEventTemplate(event) {
    return <TimeTableWeekEvent event={event} />;
  }

/**
 * use on created to scroll to current date and time
 */
  onCreated() {
    this.scheduleObj?.scrollTo(
      this.instance.formatDate(new Date(), { skeleton: "hm" })
    );
  }

  /**
   * renders the time table
   * @returns
   */
  render() {
    return (
      <div
        style={{
          height: "800px",
          width: "90%",
          margin: "10px",
          padding: "20px",
        }}
      >
        {/* main sj schedule component which show the calendar component on screen */}
        <ScheduleComponent
          ref={(schedule) => (this.scheduleObj = schedule)}
          height="800px"
          currentView="Week"
          startHour="07:00"
          endHour="18:00"
        //   sets data source for this component
          eventSettings={{ dataSource: this.state.events }}
          // on create scroll to current time
          created={this.onCreated.bind(this)}
        >
          <ViewsDirective>
            {/* sets template for day events */}
            <ViewDirective
              option="Day"
              eventTemplate={this.dayEventTemplate.bind(this)}
            />
            {/* sets template for week events */}
            <ViewDirective
              option="Week"
              eventTemplate={this.weekEventTemplate.bind(this)}
            />
          </ViewsDirective>
          {/* sets which all components are displayed on the screen and what capabilties in supported by sj schedule */}
          <Inject services={[Day, Week, DragAndDrop]} />
        </ScheduleComponent>
      </div>
    );
  }
}

export default SfTimeTable;
