
function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function getColor(d, displayColor) {
  return displayColor;
}

/**
 * Gets sf time table
 * @returns
 */
export const getTimeTable = () => {

    
  const currentDate = new Date();
  let date = getMonday(currentDate);
  const monday = `${date.getFullYear()}-${
    (date.getMonth() + 1).toString().padStart(2, '0')
  }-${date.getDate().toString().padStart(2, '0')}`;
  date.setDate(date.getDate() + 1);
  const tuesday = `${date.getFullYear()}-${
    (date.getMonth() + 1).toString().padStart(2, '0')
  }-${date.getDate().toString().padStart(2, '0')}`;
  date.setDate(date.getDate() + 1);
  const wednesday = `${date.getFullYear()}-${
    (date.getMonth() + 1).toString().padStart(2, '0')
  }-${date.getDate().toString().padStart(2, '0')}`;

  date.setDate(date.getDate() + 1);
  const thursday = `${date.getFullYear()}-${
    (date.getMonth() + 1).toString().padStart(2, '0')
  }-${date.getDate().toString().padStart(2, '0')}`;
  date.setDate(date.getDate() + 1);
//   const friday = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate()}`
//   alert(tuesday);
  return [
    // Monday
    {
      Id: 1,
      Subject: "Science",
      StartTime: new Date(`${monday}T10:00:00`),
      EndTime: new Date(`${monday}T10:30:00`),
      IsAllDay: false,
      Events: ["Assesment", "slide"],
      Teacher: {
        id: 1234,
        name: "John Doe",
      },
      DisplayColor: getColor(new Date(`${monday}T10:00:00`), "#4197af"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 2,
      Subject: "Hindi",
      StartTime: new Date(`${monday}T11:00:00`),
      EndTime: new Date(`${monday}T11:30:00`),
      IsAllDay: false,
      Events: ["Assesment", "slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${monday}T11:00:00`), "#3c9e68"),      
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 3,
      Subject: "Maths",
      StartTime: new Date(`${monday}T13:00:00`),
      EndTime: new Date(`${monday}T14:00:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${monday}T17:00:00`), "#2f4d99"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 4,
      Subject: "Sanskrit",
      StartTime: new Date(`${monday}T15:00:00`),
      EndTime: new Date(`${monday}T16:00:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${monday}T17:00:00`), "#1a7543"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 5,
      Subject: "Social Science",
      StartTime: new Date(`${monday}T16:00:00`),
      EndTime: new Date(`${monday}T17:00:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${monday}T17:00:00`), "#ad4a6d"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    // tuesday
    {
      Id: 11,
      Subject: "Maths",
      StartTime: new Date(`${tuesday}T09:00:00`),
      EndTime: new Date(`${tuesday}T09:30:00`),
      IsAllDay: false,
      Events: ["Assesment", "slide"],
      Teacher: {
        id: 1234,
        name: "John Doe",
      },
      DisplayColor: getColor(new Date(`${tuesday}T09:00:00`), "#2f4d99"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 22,
      Subject: "Science",
      StartTime: new Date(`${tuesday}T10:00:00`),
      EndTime: new Date(`${tuesday}T10:30:00`),
      IsAllDay: false,
      Events: ["Assesment", "slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${tuesday}T10:00:00`), "#4197af"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 33,
      Subject: "English",
      StartTime: new Date(`${tuesday}T14:00:00`),
      EndTime: new Date(`${tuesday}T14:30:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${tuesday}T14:00:00`), "#d8812f"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 44,
      Subject: "Sanskrit",
      StartTime: new Date(`${tuesday}T15:00:00`),
      EndTime: new Date(`${tuesday}T16:00:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${tuesday}T17:00:00`), "#1a7543"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    // Wednesday
    {
      Id: 1,
      Subject: "Science",
      StartTime: new Date(`${wednesday}T10:00:00`),
      EndTime: new Date(`${wednesday}T10:30:00`),
      IsAllDay: false,
      Events: ["Assesment", "slide"],
      Teacher: {
        id: 1234,
        name: "John Doe",
      },
      DisplayColor: getColor(new Date(`${wednesday}T10:00:00`), "#4197af"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 2,
      Subject: "Hindi",
      StartTime: new Date(`${wednesday}T11:00:00`),
      EndTime: new Date(`${wednesday}T11:30:00`),
      IsAllDay: false,
      Events: ["Assesment", "slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${wednesday}T11:00:00`), "#3c9e68"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 3,
      Subject: "Maths",
      StartTime: new Date(`${wednesday}T13:00:00`),
      EndTime: new Date(`${wednesday}T14:00:00`),
      IsAllDay: false,
      Events: ["Assesment", "slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${wednesday}T13:00:00`), "#2f4d99"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 4,
      Subject: "English",
      StartTime: new Date(`${wednesday}T14:00:00`),
      EndTime: new Date(`${wednesday}T14:30:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${wednesday}T14:00:00`), "#d8812f"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 5,
      Subject: "Social Science",
      StartTime: new Date(`${wednesday}T16:00:00`),
      EndTime: new Date(`${wednesday}T17:00:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${wednesday}T17:00:00`), "#ad4a6d"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    // thursday
    {
      Id: 111,
      Subject: "Science",
      StartTime: new Date(`${thursday}T10:00:00`),
      EndTime: new Date(`${thursday}T10:30:00`),
      IsAllDay: false,
      Events: ["Assesment", "slide"],
      Teacher: {
        id: 1234,
        name: "John Doe",
      },
      DisplayColor: getColor(new Date(`${thursday}T10:00:00`), "#4197af"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 222,
      Subject: "Hindi",
      StartTime: new Date(`${thursday}T11:00:00`),
      EndTime: new Date(`${thursday}T11:30:00`),
      IsAllDay: false,
      Events: ["Assesment", "slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${thursday}T11:00:00`), "#3c9e68"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 333,
      Subject: "Maths",
      StartTime: new Date(`${thursday}T09:00:00`),
      EndTime: new Date(`${thursday}T10:00:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${thursday}T09:00:00`), "#2f4d99"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 444,
      Subject: "Sanskrit",
      StartTime: new Date(`${thursday}T15:00:00`),
      EndTime: new Date(`${thursday}T16:00:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${thursday}T17:00:00`), "#1a7543"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
    {
      Id: 555,
      Subject: "Social Science",
      StartTime: new Date(`${thursday}T16:00:00`),
      EndTime: new Date(`${thursday}T17:00:00`),
      IsAllDay: false,
      Events: ["slide"],
      Teacher: {
        id: 1234,
        name: "Jane Doe",
      },
      DisplayColor: getColor(new Date(`${thursday}T17:00:00`), "#ad4a6d"),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=10"
    },
  ];
};
