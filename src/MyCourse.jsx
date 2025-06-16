import { useState } from 'react';
import { 
  Play, 
  FileText, 
  HelpCircle, 
  FolderOpen, 
  Calendar, 
  MessageCircle, 
  ChevronRight,
  Clock,
  CheckCircle,
  Star,
  Download,
  Upload,
  Users,
  BookOpen,
  Award,
  BarChart3,
  Video,
  PenTool,
  Target,
  Mail,
  Phone
} from 'lucide-react';
const sections = [
  { 
    name: 'Videos', 
    icon: Video, 
    count: 24,
    progress: 75,
    description: 'Interactive video lectures'
  },
  { 
    name: 'Assignments', 
    icon: PenTool, 
    count: 8,
    progress: 60,
    description: 'Practical assignments'
  },
  { 
    name: 'Quiz', 
    icon: HelpCircle, 
    count: 12,
    progress: 90,
    description: 'Knowledge assessments'
  },
  { 
    name: 'Projects', 
    icon: FolderOpen, 
    count: 3,
    progress: 33,
    description: 'Real-world projects'
  },
  { 
    name: 'Attendance', 
    icon: Calendar, 
    count: 45,
    progress: 88,
    description: 'Class attendance record'
  },
  { 
    name: 'Help', 
    icon: MessageCircle, 
    count: null,
    progress: null,
    description: 'Support and resources'
  }
];

const MyCourse = () => {
  const [selectedSection, setSelectedSection] = useState('Videos');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentSection = sections.find(section => section.name === selectedSection);
  const renderContent = () => {
    switch (selectedSection) {
      case 'Videos':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Course Progress</h3>
                  <span className="text-2xl font-bold text-blue-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
                </div>
                <p className="text-gray-600 text-sm">18 of 24 videos completed</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Watch Time</h3>
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">42.5 hrs</div>
                <p className="text-gray-600 text-sm">Total learning time</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Recent Videos</h3>
              {[
                { title: "Introduction to Data Analytics", duration: "15:30", completed: true },
                { title: "Data Cleaning Techniques", duration: "22:45", completed: true },
                { title: "Statistical Analysis Basics", duration: "18:20", completed: false },
                { title: "Data Visualization with Python", duration: "25:10", completed: false }
              ].map((video, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${video.completed ? 'bg-green-100' : 'bg-blue-100'}`}>
                        {video.completed ? 
                          <CheckCircle className="w-6 h-6 text-green-600" /> : 
                          <Play className="w-6 h-6 text-blue-600" />
                        }
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{video.title}</h4>
                        <p className="text-sm text-gray-500">{video.duration}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      {video.completed ? 'Rewatch' : 'Watch'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Assignments':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 text-center">
                <Target className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-600 mb-1">8</div>
                <p className="text-gray-600 text-sm">Total Assignments</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-1">5</div>
                <p className="text-gray-600 text-sm">Completed</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-600 mb-1">3</div>
                <p className="text-gray-600 text-sm">Pending</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Assignment List</h3>
              {[
                { title: "Data Analysis Report", dueDate: "Dec 15, 2024", status: "completed", grade: "A+" },
                { title: "Python Coding Challenge", dueDate: "Dec 20, 2024", status: "pending", grade: null },
                { title: "Statistical Modeling Project", dueDate: "Dec 25, 2024", status: "pending", grade: null }
              ].map((assignment, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        assignment.status === 'completed' ? 'bg-green-100' : 'bg-orange-100'
                      }`}>
                        {assignment.status === 'completed' ? 
                          <CheckCircle className="w-6 h-6 text-green-600" /> : 
                          <FileText className="w-6 h-6 text-orange-600" />
                        }
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                        <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                        {assignment.grade && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                            Grade: {assignment.grade}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {assignment.status === 'completed' ? (
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                          <Download className="w-4 h-4 inline mr-2" />
                          Download
                        </button>
                      ) : (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                          <Upload className="w-4 h-4 inline mr-2" />
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Quiz':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 text-center">
                <HelpCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
                <p className="text-gray-600 text-sm">Total Quizzes</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-1">11</div>
                <p className="text-gray-600 text-sm">Completed</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 text-center">
                <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">87%</div>
                <p className="text-gray-600 text-sm">Average Score</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-6 text-center">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-600 mb-1">A-</div>
                <p className="text-gray-600 text-sm">Overall Grade</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Recent Quizzes</h3>
              {[
                { title: "Data Types and Structures", score: 92, maxScore: 100, status: "completed" },
                { title: "Statistical Methods", score: 85, maxScore: 100, status: "completed" },
                { title: "Machine Learning Basics", score: null, maxScore: 100, status: "available" }
              ].map((quiz, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        quiz.status === 'completed' ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        {quiz.status === 'completed' ? 
                          <CheckCircle className="w-6 h-6 text-green-600" /> : 
                          <HelpCircle className="w-6 h-6 text-blue-600" />
                        }
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{quiz.title}</h4>
                        {quiz.score !== null ? (
                          <p className="text-sm text-gray-500">Score: {quiz.score}/{quiz.maxScore}</p>
                        ) : (
                          <p className="text-sm text-gray-500">Not attempted</p>
                        )}
                      </div>
                    </div>
                    <button className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      quiz.status === 'completed' 
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}>
                      {quiz.status === 'completed' ? 'Review' : 'Start Quiz'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Projects':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Project Portfolio</h3>
                  <p className="text-indigo-100">Showcase your skills with real-world projects</p>
                </div>
                <Award className="w-16 h-16 text-indigo-200" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "E-commerce Data Analysis", 
                  status: "completed", 
                  progress: 100,
                  description: "Analyzed customer behavior and sales patterns",
                  tech: ["Python", "Pandas", "Matplotlib"]
                },
                { 
                  title: "Predictive Modeling", 
                  status: "in-progress", 
                  progress: 65,
                  description: "Building ML models for sales forecasting",
                  tech: ["Python", "Scikit-learn", "TensorFlow"]
                },
                { 
                  title: "Dashboard Creation", 
                  status: "not-started", 
                  progress: 0,
                  description: "Interactive dashboard for business metrics",
                  tech: ["Tableau", "SQL", "Python"]
                }
              ].map((project, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      project.status === 'completed' ? 'bg-green-100' : 
                      project.status === 'in-progress' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <FolderOpen className={`w-6 h-6 ${
                        project.status === 'completed' ? 'text-green-600' : 
                        project.status === 'in-progress' ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          project.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{width: `${project.progress}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span key={techIdx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className={`w-full py-2 rounded-lg font-medium transition-colors duration-200 ${
                    project.status === 'completed' ? 'bg-green-600 text-white hover:bg-green-700' :
                    project.status === 'in-progress' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                    'bg-gray-600 text-white hover:bg-gray-700'
                  }`}>
                    {project.status === 'completed' ? 'View Project' :
                     project.status === 'in-progress' ? 'Continue' : 'Start Project'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Attendance':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-1">45</div>
                <p className="text-gray-600 text-sm">Total Classes</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 text-center">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">40</div>
                <p className="text-gray-600 text-sm">Attended</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-600 mb-1">5</div>
                <p className="text-gray-600 text-sm">Missed</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 text-center">
                <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">88%</div>
                <p className="text-gray-600 text-sm">Attendance Rate</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Attendance</h3>
              <div className="space-y-4">
                {[
                  { date: "Dec 10, 2024", topic: "Data Visualization Techniques", status: "present" },
                  { date: "Dec 8, 2024", topic: "Statistical Analysis Methods", status: "present" },
                  { date: "Dec 6, 2024", topic: "Python Programming Basics", status: "absent" },
                  { date: "Dec 4, 2024", topic: "Introduction to Machine Learning", status: "present" },
                  { date: "Dec 2, 2024", topic: "Data Cleaning and Preprocessing", status: "present" }
                ].map((record, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        record.status === 'present' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {record.status === 'present' ? 
                          <CheckCircle className="w-5 h-5 text-green-600" /> : 
                          <Clock className="w-5 h-5 text-red-600" />
                        }
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{record.topic}</h4>
                        <p className="text-sm text-gray-500">{record.date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      record.status === 'present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {record.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Help':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
                  <p className="text-blue-100">We're here to support your learning journey</p>
                </div>
                <MessageCircle className="w-16 h-16 text-blue-200" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Learning Resources</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">Course Documentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">Video Tutorials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">Practice Exercises</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">FAQ Section</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Community Support</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">Discussion Forums</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">Study Groups</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">Peer Mentoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">Live Q&A Sessions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Email Support</h4>
                  <p className="text-gray-600 text-sm mb-3">Get help via email</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Send Email
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Live Chat</h4>
                  <p className="text-gray-600 text-sm mb-3">Chat with our team</p>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                    Start Chat
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Phone Support</h4>
                  <p className="text-gray-600 text-sm mb-3">Call us directly</p>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <p className="text-gray-700">Content for {selectedSection} will appear here...</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="lg:hidden bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-gray-900">My Course</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      <div className="flex min-h-screen">
        <div className="hidden lg:block w-80 bg-white/80 backdrop-blur-md shadow-xl border-r border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  My Course
                </h1>
                <p className="text-gray-600 text-sm">Data Analytics Program</p>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-2">
            {sections.map((section) => {
              const IconComponent = section.icon;
              const isSelected = selectedSection === section.name;
              
              return (
                <div
                  key={section.name}
                  onClick={() => setSelectedSection(section.name)}
                  className={`group cursor-pointer p-4 rounded-xl transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                      : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                        isSelected ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                        <IconComponent className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div>
                        <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                          {section.name}
                        </span>
                        <p className={`text-xs ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                          {section.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      {section.count && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {section.count}
                        </span>
                      )}
                      {section.progress && (
                        <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-500 ${
                              isSelected ? 'bg-white' : 'bg-blue-500'
                            }`}
                            style={{width: `${section.progress}%`}}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}>
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">My Course</h1>
                    <p className="text-gray-600 text-sm">Data Analytics</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <div className="w-full h-0.5 bg-gray-600 rotate-45 translate-y-1"></div>
                    <div className="w-full h-0.5 bg-gray-600 -rotate-45 -translate-y-1"></div>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                const isSelected = selectedSection === section.name;
                
                return (
                  <div
                    key={section.name}
                    onClick={() => {
                      setSelectedSection(section.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-white/20' : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                        <div>
                          <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                            {section.name}
                          </span>
                          <p className={`text-xs ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                            {section.description}
                          </p>
                        </div>
                      </div>
                      {section.count && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {section.count}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-1 lg:p-8 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  currentSection ? 'bg-gradient-to-br from-blue-600 to-indigo-700' : 'bg-gray-200'
                }`}>
                  {currentSection && (
                    <currentSection.icon className="w-8 h-8 text-white" />
                  )}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedSection}</h2>
                  <p className="text-gray-600">{currentSection?.description}</p>
                </div>
              </div>
              
              {currentSection?.progress && (
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Section Progress</span>
                    <span className="text-sm font-bold text-blue-600">{currentSection.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                      style={{width: `${currentSection.progress}%`}}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-white/20">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyCourse;