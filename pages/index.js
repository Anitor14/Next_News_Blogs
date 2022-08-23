import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn.britannica.com/87/92887-050-B5EFA9A9/Court-of-the-Lions-Alhambra-Spain-Granada.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.britannica.com/98/175498-050-97BD7DE6/Alhambra-Granada-Spain.jpg",
    address: "Some address 7, 12345 Some City",
    description: "This is a second Meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
