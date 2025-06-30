import { useState, useEffect } from "react";
import axios from "axios";
import {
  Users,
  X,
  Save,
  Mail,
  Lock,
  MapPin,
  BookOpen,
  GraduationCap,
  Eye,
  EyeOff,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  UserPlus,
} from "lucide-react";
const API_URL = "https://learnzlabcpbackend.onrender.com/api/students";
const AdminDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [showPassword, setShowPassword] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    email: "",
    password: "",
    address: "",
  });
  const [showTeacherForm, setShowTeacherForm] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [teacherFormData, setTeacherFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    address: "",
    subject: "",
  });
  const courses = [
    "Data Analytics",
    "Machine Learning",
    "Data Visualisation",
    "Data Science",
    "Deep Learning",
    "Python Programming",
  ];
  const teacherSubjects = [
    "Data Analytics",
    "Machine Learning",
    "Data Visualisation",
    "Data Science",
    "Deep Learning",
    "Python Programming",
  ];
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Failed to fetch students:", err));
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSave = async () => {
    if (
      formData.name &&
      formData.course &&
      formData.email &&
      formData.password &&
      formData.address
    ) {
      const newStudent = {
        ...formData,
        enrolledDate: new Date().toLocaleDateString(),
        status: "Active",
      };
      try {
        const res = await axios.post(API_URL, newStudent);
        setStudents([...students, res.data]);
        setFormData({
          name: "",
          course: "",
          email: "",
          password: "",
          address: "",
        });
        setShowForm(false);
      } catch (err) {
        console.error("Error details:", err.response ? err.response.data : err.message);
        alert("Error saving student");
      }
    } else {
      alert("Please fill all fields.");
    }
  };
  const togglePasswordVisibility = (studentId) => {
    setShowPassword((prev) => ({
      ...prev,
      [studentId]: !prev[studentId],
    }));
  };
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse =
      selectedCourse === "" || student.course === selectedCourse;
    return matchesSearch && matchesCourse;
  });
  const deleteStudent = async (studentId) => {
    try {
      await axios.delete(`${API_URL}/${studentId}`);
      setStudents((prev) =>
        prev.filter((student) => student._id !== studentId)
      );
    } catch (err) {
      alert("Error deleting student");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 text-sm">
                  Manage students and course enrollments
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-semibold text-sm">
                  {students.length} Students
                </span>
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <UserPlus className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                <span>Add Student</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm && (
          <div className="mb-8 transform transition-all duration-300 ease-out">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <UserPlus className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                      Add New Student
                    </h2>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Student Name
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter student name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Course
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-400 appearance-none bg-white"
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, idx) => (
                          <option key={idx} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter complete address"
                        rows="3"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-400 resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleSave}
                    className="group flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Save className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                    <span>Save Student</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {students.length > 0 && (
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search students by name or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    />
                  </div>
                </div>

                <div className="sm:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white"
                    >
                      <option value="">All Courses</option>
                      {courses.map((course, idx) => (
                        <option key={idx} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {students.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Student Records
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    Showing {filteredStudents.length} of {students.length}{" "}
                    students
                  </span>
                  <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                    <Download className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Password
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredStudents.map((student, idx) => (
                    <tr
                      key={student.id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {student.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {student.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              Enrolled: {student.enrolledDate}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {student.course}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {student.email}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-900 font-mono">
                            {showPassword[student.id]
                              ? student.password
                              : "••••••••"}
                          </span>
                          <button
                            onClick={() => togglePasswordVisibility(student.id)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                          >
                            {showPassword[student.id] ? (
                              <EyeOff className="w-4 h-4 text-gray-500" />
                            ) : (
                              <Eye className="w-4 h-4 text-gray-500" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div
                          className="text-sm text-gray-900 max-w-xs truncate"
                          title={student.address}
                        >
                          {student.address}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-200 group">
                            <Edit className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                          </button>
                          <button
                            onClick={() => deleteStudent(student._id)}
                            className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200 group"
                          >
                            <Trash2 className="w-4 h-4 text-gray-500 group-hover:text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="lg:hidden divide-y divide-gray-200">
              {filteredStudents.map((student, idx) => (
                <div
                  key={student.id}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {student.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {student.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {student.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                        <Edit className="w-4 h-4 text-gray-500" />
                      </button>
                      <button
                        onClick={() => deleteStudent(student._id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200 group"
                      >
                        <Trash2 className="w-4 h-4 text-gray-500 group-hover:text-red-600" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course
                      </span>
                      <div className="mt-1">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {student.course}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Password
                      </span>
                      <div className="mt-1 flex items-center space-x-2">
                        <span className="text-sm text-gray-900 font-mono">
                          {showPassword[student.id]
                            ? student.password
                            : "••••••••"}
                        </span>
                        <button
                          onClick={() => togglePasswordVisibility(student.id)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                        >
                          {showPassword[student.id] ? (
                            <EyeOff className="w-4 h-4 text-gray-500" />
                          ) : (
                            <Eye className="w-4 h-4 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </span>
                      <div className="mt-1 text-sm text-gray-900">
                        {student.address}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </span>
                        <div className="mt-1">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {student.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        Enrolled: {student.enrolledDate}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {students.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Students Yet
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Get started by adding your first student to the system. Click the
              "Add Student" button above to begin.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <UserPlus className="w-5 h-5" />
              <span>Add Your First Student</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminDashboard;

