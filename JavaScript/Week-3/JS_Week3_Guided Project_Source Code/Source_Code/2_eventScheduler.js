/*  Event Scheduler
--------------------
Event Object: Each event should have properties:
      id (unique identifier),
      title,
      date (JavaScript date object),
      attendees (array of names).
Functionality:
      1. Add an event (using push to the events array).
      2. Get a list of events happening today by filtering with date methods.
      3. Create a feature that allows users to find and replace an event title in the array using the replace and indexOf methods.
      4. Remove an event by ID (using splice).
      5. Sort events by date (using the sort method).
*/

var events = [];

// 1. Function to add an event
function addEvent(id, title, date, attendees) {
  const event = {
    id,
    title,
    date: new Date(date), // TODO: see what it returns.
    attendees,
  };

  events.push(event);
}

// 2. Function to get events happening today
var getEventsToday = function () {};

// 3. Function to replace an event title
function replaceEventTitle(id, newTitle) {}

// 4. Function to remove an event by ID
function removeEvent(id) {}

// 5. Function to sort events by date
function sortEventsByDate() {}

// Next month events
addEvent(12, "Closing Ceremony", "2025-05-05", [
  "Victor",
  "Walter",
  "Xena",
  "Yara",
  "Zara",
  "Aaron",
]);
addEvent(13, "Feedback Session", "2025-05-08", [
  "Xena",
  "Yara",
  "Zara",
  "Aaron",
  "Bella",
  "Cathy",
  "Diana",
]);
addEvent(14, "Team Building", "2025-05-10", [
  "Zara",
  "Aaron",
  "Bella",
  "Cathy",
  "Diana",
  "Ethan",
]);
addEvent(15, "Annual Review", "2025-05-12", [
  "Bella",
  "Cathy",
  "Diana",
  "Ethan",
  "Fiona",
]);
addEvent(16, "Strategy Meeting", "2025-05-15", [
  "Diana",
  "Ethan",
  "Fiona",
  "George",
]);
addEvent(17, "Budget Planning", "2025-05-18", [
  "Fiona",
  "George",
  "Heidi",
  "Ivan",
  "Jack",
  "Kathy",
]);
addEvent(18, "Sales Pitch", "2025-05-20", [
  "Hannah",
  "Ian",
  "Jack",
  "Kathy",
  "Liam",
  "Mia",
]);
addEvent(19, "Marketing Strategy", "2025-05-22", [
  "Jack",
  "Kathy",
  "Liam",
  "Mia",
  "Nina",
]);
addEvent(20, "Customer Feedback", "2025-05-25", [
  "Liam",
  "Mia",
  "Nina",
  "Oscar",
  "Peggy",
]);

// Current week events
addEvent(1, "Meeting", "2025-04-10", [
  "Alice",
  "Bob",
  "Charlie",
  "Dave",
  "Eve",
  "Frank",
  "Grace",
]);
addEvent(4, "Webinar", "2025-04-13", [
  "Frank",
  "Grace",
  "Hannah",
  "Ian",
  "Jack",
]);
addEvent(3, "Workshop", "2025-04-13", ["David", "Eve", "Frank", "Grace"]);
addEvent(2, "Conference", "2025-04-10", [
  "Charlie",
  "Alice",
  "Bob",
  "David",
  "Eve",
  "Frank",
]);

// Next week events
addEvent(5, "Seminar", "2025-04-14", [
  "Heidi",
  "Ivan",
  "Judy",
  "Karl",
  "Leo",
  "Mallory",
  "Nina",
  "Oscar",
]);
addEvent(10, "Hackathon", "2025-04-24", [
  "Rupert",
  "Sybil",
  "Trent",
  "Uma",
  "Victor",
  "Walter",
]);
addEvent(7, "Panel Discussion", "2025-04-16", [
  "Leo",
  "Mallory",
  "Peggy",
  "Quentin",
  "Rupert",
  "Sybil",
  "Trent",
  "Uma",
]);
addEvent(6, "Lecture", "2025-04-15", [
  "Judy",
  "Karl",
  "Leo",
  "Mallory",
  "Nina",
  "Oscar",
  "Peggy",
]);
addEvent(8, "Networking Event", "2025-04-20", [
  "Nina",
  "Oscar",
  "Peggy",
  "Quentin",
  "Rupert",
  "Sybil",
]);
addEvent(9, "Round Table", "2025-04-22", [
  "Peggy",
  "Quentin",
  "Rupert",
  "Sybil",
]);

addEvent(11, "Product Launch", "2025-04-25", [
  "Trent",
  "Uma",
  "Victor",
  "Walter",
  "Xena",
]);

// 2. Display Todays events
console.log("Today's Events: ", getEventsToday() + "\n");

// 3. Update event title
replaceEventTitle(1, "Birthday Party");
console.log(
  "Updated Event Title:",
  events.find((event) => event.id === 1).title
);

// 4. Remove an event
console.log(removeEvent(2) ? "Event removed successfully" : "Event not found");

// Optional: Display updated events list

// 5. Sort events by date
console.log(`
  Sorted Events:
---------------------------
${sortEventsByDate()}
`);
