# Attendance System

## Client's Requirements

We need a attendance system. Students can create their own profile. Admin can see list of students and their attendances. Admin can enable and disable attend button also this button can be disabled based on a timer. Each time admin enable attend button, students can participate for only once. Each day, student will have a timesheet of attendance.

Student can see their own time logs and attend button when enabled.

## Functional Requirements

### Admin
- Admin can create student
- Admin can delete, update or check students information
- Admin can change status of a student
- Admin can check timesheet of a student
- Admin can enable or disable attendance button
- Admin can check stats of a given day

### Student
- Student can register themselves
- There will be following account status for a student -
  - Pending
  - Active
  - Reject
- User can login with their credentials
- Pending & Rejected users wont's have anything in their profile
- Active users can update their profile info
  - Frist name
  - Last name
  - Email
  - Phone no
  - Profile picture
- Active users can change/update own password
- Active users can see their logs
  - Calendar view
  - List view
  - Table view
- Active users can participate in attendance system
- User can logout


## Requirements Analysis

### Models
User model -
- Name
- Email
- Password
- Roles - [ Admin, Student ]
- Account status

Profile model -
- Frist name
- Last name
- Phone no
- Profile picture
- UserId

StudentAttendace model -
- userId
- CreatedAt: DateTime

AdminAttendace model -
- CreatedAt: DateTime
- Status
- Time limit

### Endpoints/Route
Student Endpoints -
- POST /auth/register [public]
- POST /auth/login [public]
- PUT /auth/change-password [private]
- PATCH /profiles [private]
- PATCH /profiles/avatar [private]
- GET /timesheet [private]
- GET /attendance [private]

Admin Endpoints -
- GET /users [private]
- POST /users [private]
- PATCH /users/:userId [private]
- DELETE /users/:userId [private]
- GET /users/:userId [private]
- GET /profiles [private]
- POST /profiles [private]
- PATCH /profiles/:userId [private]
- DELETE /profiles/:userId [private]
- GET /profiles/:userId [private]
- GET /timesheet/:userId [private]
- GET /timesheet/stats [private]
- POST /attendance/enable [private]
- GET /attendance/disable/:attendanceId [private]