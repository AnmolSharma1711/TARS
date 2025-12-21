import { Calendar, MapPin, Clock, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  image: string;
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'AI/ML Workshop Series',
    date: 'January 15, 2024',
    time: '2:00 PM - 5:00 PM',
    location: 'Tech Lab, Building A',
    description: 'Deep dive into machine learning fundamentals, neural networks, and practical applications. Hands-on coding sessions with real-world datasets and model deployment.',
    attendees: 50,
    image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Workshop',
  },
  {
    id: 2,
    title: 'Robotics Competition 2024',
    date: 'January 22, 2024',
    time: '10:00 AM - 6:00 PM',
    location: 'Main Arena, Campus Ground',
    description: 'Annual robotics competition featuring autonomous navigation, line following, and obstacle avoidance challenges. Teams compete for prizes and recognition.',
    attendees: 120,
    image: 'https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Competition',
  },
  {
    id: 3,
    title: 'IoT Hackathon',
    date: 'February 5, 2024',
    time: '9:00 AM - 9:00 PM',
    location: 'Innovation Center',
    description: '24-hour hackathon focused on creating innovative IoT solutions for smart cities. Access to hardware kits, mentorship, and exciting prizes for winners.',
    attendees: 80,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Hackathon',
  },
  {
    id: 4,
    title: 'Tech Talk: Future of Automation',
    date: 'February 12, 2024',
    time: '4:00 PM - 6:00 PM',
    location: 'Auditorium Hall',
    description: 'Guest lecture by industry experts discussing the latest trends in automation, RPA, and their impact on various industries. Q&A session included.',
    attendees: 200,
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Seminar',
  },
  {
    id: 5,
    title: 'Project Showcase Night',
    date: 'February 28, 2024',
    time: '6:00 PM - 9:00 PM',
    location: 'Exhibition Hall',
    description: 'Members showcase their innovative projects to faculty, industry partners, and fellow students. Demo sessions, networking opportunities, and awards ceremony.',
    attendees: 150,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Showcase',
  },
  {
    id: 6,
    title: 'Drone Programming Workshop',
    date: 'March 8, 2024',
    time: '1:00 PM - 4:00 PM',
    location: 'Outdoor Testing Ground',
    description: 'Learn to program and fly drones with autonomous navigation systems. Hands-on experience with flight controllers, sensors, and computer vision integration.',
    attendees: 40,
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Workshop',
  },
];

export default function EventsPage() {
  return (
    <div className="page events-page">
      <div className="page-header">
        <h1 className="page-title">Upcoming Events</h1>
        <p className="page-description">Join us in our exciting tech events and workshops</p>
        <div className="title-underline"></div>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-card-inner">
              <div className="event-front">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-category">{event.category}</div>
                </div>
                <div className="event-preview">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <div className="event-meta-item">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="event-meta-item">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-back">
                <h3 className="event-title-back">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-details">
                  <div className="event-detail-item">
                    <MapPin size={18} />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-detail-item">
                    <Users size={18} />
                    <span>{event.attendees} attendees expected</span>
                  </div>
                  <div className="event-detail-item">
                    <Calendar size={18} />
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail-item">
                    <Clock size={18} />
                    <span>{event.time}</span>
                  </div>
                </div>
                <button className="event-register-btn">Register Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
