import { useState } from 'react';
import { BookOpen, Users, Award, Star, X, Mail, Lock, Menu, ChevronRight, Play, CheckCircle, TrendingUp } from 'lucide-react';
import axios from "axios"; // Add this import

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [student, setStudent] = useState(() => {
    // Persist login
    const saved = localStorage.getItem("student");
    return saved ? JSON.parse(saved) : null;
  });
  const [loginError, setLoginError] = useState("");

  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const courses = [
    {
      title: "Data Analytics",
      description: "Master data analysis with Python, SQL, and visualization tools",
      icon: <TrendingUp className="w-8 h-8" />,
      level: "Intermediate",
      duration: "12 weeks"
    },
    {
      title: "Machine Learning",
      description: "Build intelligent systems with supervised and unsupervised learning",
      icon: <CheckCircle className="w-8 h-8" />,
      level: "Advanced",
      duration: "16 weeks"
    },
    {
      title: "Data Visualization",
      description: "Create compelling visual stories from complex datasets",
      icon: <Play className="w-8 h-8" />,
      level: "Beginner",
      duration: "8 weeks"
    },
    {
      title: "Data Science",
      description: "Complete data science pipeline from collection to insights",
      icon: <Award className="w-8 h-8" />,
      level: "Intermediate",
      duration: "20 weeks"
    },
    {
      title: "Deep Learning",
      description: "Neural networks and AI model development with TensorFlow",
      icon: <Star className="w-8 h-8" />,
      level: "Advanced",
      duration: "18 weeks"
    },
    {
      title: "Python Programming",
      description: "Master Python for data science and analytics applications",
      icon: <BookOpen className="w-8 h-8" />,
      level: "Beginner",
      duration: "10 weeks"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Enrolled" },
    { number: "200+", label: "Expert Instructors" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  // Add login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      // Replace with your backend login endpoint
      const res = await axios.post("https://learnzlabcpbackend.onrender.com/api/students/login", {
        email,
        password,
      });
      setStudent(res.data);
      localStorage.setItem("student", JSON.stringify(res.data));
      setShowLogin(false);
    } catch (err) {
      setLoginError("Invalid email or password");
    }
  };

  // Logout handler
  const handleLogout = () => {
    setStudent(null);
    localStorage.removeItem("student");
  };

  // Filter courses for logged-in student
  const visibleCourses = student
    ? courses.filter((c) => c.title === student.course)
    : courses;

  return (
    <div className="font-sans bg-white">
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                LearnLabs
              </span>
            </div>
            
            <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
              <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Home</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Courses</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">About</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">Contact</li>
            </ul>
            
            <div className="flex items-center space-x-4">
              {/* If student is logged in, show name with dropdown */}
              {student ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 shadow-lg">
                    <span>{student.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-xl text-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={toggleLogin}
                  className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
              
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">Home</a>
              <a className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">Courses</a>
              <a className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">About</a>
              <a className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">Contact</a>
              <button 
                onClick={toggleLogin} 
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-full font-medium mt-4"
              >
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master the Future of
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Data Science
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your career with industry-leading courses in data science, machine learning, 
              and analytics. Learn from experts and join thousands of successful graduates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={toggleLogin}
                className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <span>Start Learning Today</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Courses</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive collection of data science and analytics courses,
              designed by industry experts and updated with the latest technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl text-blue-600 group-hover:from-blue-200 group-hover:to-blue-300 transition-colors duration-300">
                      {course.icon}
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      {course.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <span className="text-gray-600 text-sm ml-2">4.9</span>
                    </div>
                    <span className="text-gray-500 text-sm">{course.duration}</span>
                  </div>
                  
                  <button
                    onClick={() => {
                      if (!student) setShowLogin(true);
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform group-hover:scale-105"
                  >
                    <span>Enroll Now</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Students Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Join thousands of successful graduates who transformed their careers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center border border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed mb-8">
                "LearnLabs completely transformed my career trajectory. The comprehensive curriculum, 
                expert mentorship, and hands-on projects gave me the confidence and skills to land 
                my dream job in data science. The investment in my education here has paid dividends 
                beyond my expectations."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">Sarah Chen</div>
                  <div className="text-gray-600">Senior Data Scientist at Google</div>
                  <div className="text-blue-600 text-sm">Class of 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Empowering the Next Generation of 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Data Leaders
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                LearnLabs is more than just an online learning platform—we're a community of innovators, 
                mentors, and learners united by a passion for data science and technology. Our mission 
                is to bridge the gap between academic knowledge and industry practice, ensuring our 
                graduates are ready to make an immediate impact in their careers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Industry-vetted curriculum updated quarterly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">1-on-1 mentorship with industry experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Career placement assistance and job guarantees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Lifetime access to course materials and updates</span>
                </div>
              </div>
              
              <button 
                onClick={toggleLogin}
                className="mt-8 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Join Our Community</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 rounded-3xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                    <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Job Placement</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                    <Users className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">50K+</div>
                    <div className="text-sm text-gray-600">Graduates</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                    <Award className="w-8 h-8 text-green-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">200+</div>
                    <div className="text-sm text-gray-600">Expert Mentors</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                    <Star className="w-8 h-8 text-yellow-500 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">LearnLabs</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Empowering the next generation of data scientists and analysts with cutting-edge 
                education and industry-leading mentorship.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} LearnLabs. All rights reserved. Empowering careers through education.
            </p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && !student && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={toggleLogin}></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 transform transition-all">
              <button
                onClick={toggleLogin}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in to continue your learning journey</p>
              </div>
              
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                      required
                    />
                  </div>
                </div>
                {loginError && (
                  <div className="text-red-500 text-sm text-center">{loginError}</div>
                )}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
                    Forgot password?
                  </a>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign In
                </button>
                
                <div className="text-center">
                  <span className="text-gray-600">Don't have an account? </span>
                  <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
                    Sign up for free
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}