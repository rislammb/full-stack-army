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
- AdminAttendanceId

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
- GET /attendanceStatus [private]
- GET /attendance [private]

Admin Endpoints -
- GET /users [private]
- GET /users/:userId [private]
- POST /users [private]
- PATCH /users/:userId [private]
- DELETE /users/:userId [private]
- GET /profiles [private]
- GET /profiles/:userId [private]
- POST /profiles [private]
- PATCH /profiles/:userId [private]
- DELETE /profiles/:userId [private]
- GET /timesheet/:userId [private]
- POST /attendance/enable [private]
- GET /attendance/disable/:attendanceId [private]
- GET /timesheet/stats [private]

## TODO
- [ ] Create Models
  - [ ] User
  - [ ] Profile
  - [ ] Admin Attendance
  - [ ] Student Attendance
- [ ] Authentication
  - [ ] Registration
  - [ ] Login
  - [ ] Change password
- [ ] Middleware
  - [ ] Authenticate
  - [ ] Authorize
- [ ] Timesheet And Attendance
  - [ ] Get user timesheet
  - [ ] Get attendance status
  - [ ] Given attendance
- [ ] User CURD
  - [ ] Get User
  - [ ] Get User by ID
  - [ ] Create User
  - [ ] Update User
  - [ ] Delete User
- [ ] Profile CURD
  - [ ] Get Profile
  - [ ] Get Profile by ID
  - [ ] Create Profile
  - [ ] Update Profile
  - [ ] Delete Profile
- [ ] Admin control over attendance
  - [ ] Get timesheet by userId
  - [ ] Enable Attendance
  - [ ] Disable Attendance
- [ ] Generate stats
  - [ ] Timesheet stats


## Pseudo code
- ### Registration
  - name, email, password = input
  - find user by this email
  - if user exist - send user already exist error
  - input validation
  - if input not valid - send validation error
  - generate hash password
  - create user by name, email and hash password
  - save user to database
  - generate JWT token
  - send a success message with user and token
- ### Login
  - email, password = input
  - find user by this email
  - if user not exist - send user not found error
  - match password
  - if password not match - send authentication error
  - generate JWT token
  - send a success message with token
- ### Change password
  - for logged user
    - id = token
    - find user by this id
    - if user not exist - send user not found error
    - password = input
    - validate password
    - if password not valid - send validation error
    - hash password
    - update user password with new hashed password
    - send a success message
  - for password forgotted user
    - email = input
    - find user by this email
    - if user not exist - send user not found error
    - password = input
    - validate password
    - if password not valid - send validation error
    - hash password
    - update user password with new hashed password
    - send a success message
- ### Authenticate middleware
  - token = cookies
  - if token not found - send unauthenticate error
  - validate token with time
  - if toke not valid - send unvalid token error
  - id = token
  - find user by this id
  - if user not exist - send user not found error
  - invoke next function with user
- ### Authorize middleware
  - role = user.role
  - if permitted role not found - send unauthorize error
  - invoke next function
- ### Get user timesheet
  - id = user.id
  - find timesheet with user id
  - if timesheet not found - send empty
  - send timesheet
- ### Get attendance status
  - find live admin attendance from databse
  - if attendance not found - send disable status
  - find user by id from live admin attendance
  - if user attendance found - send disable status
  - send enable status
- ### Given attendance
  - create user attendance to admin attendance
  - send a success message
- ### Get Users
  - find all users from database
  - send users
- ### Get User by ID
  - id = params
  - find user from database
  - if user not found - send not found error
  - send user
- ### Create User
  - name, email, password = input
  - generate hash password
  - create user with name, email and hash password
  - save user to database
  - send a success message with user
- ### Update User
  - name = input
  - id = params
  - find user by this id
  - if user not found - send not found error
  - update user.name with input name
  - send a success message
- ### Delete User
  - id = params
  - find user from database
  - if user not found - send not found error
  - delete user from database
  - send a success message
- ### Get Profiles
  - find all profiles from database
  - send profiles
- ### Get Profile by ID
  - id = user.id/params
  - find profile from database
  - if profile not found - send not found error
  - send profile
- ### Create Profile
  - do later
- ### Update Profile
  - fristName, lastName, phone, avatar = input
  - id = user.id/params
  - find user by this id
  - if user not found - send not found error
  - update profile info by given info
  - send a success message
- ### Delete Profile
  - id = params
  - find profile from database
  - if profile not found - send not found error
  - delete profile from database
  - send a success message
- ### Get timesheet by userId
  - id = params
  - find all user timesheet by id from all admin timesheet
  - if timesheet not found - send empty
  - send user timesheet
- ### Enable Attendance
  - create an admin attendance with time limit
  - save to database
  - send a success message
- ### Disable Attendance
  - id = params
  - find attendance from database
  - if attendance not found - send not found error
  - disable attendance
  - send a success message
- ### Timesheet stats
  - for individual attendance
    - find live admin attendance
    - find all user attendance from database by live attendance id
    - if attendance not found - send empty
    - send attendance list
  - for individual user
    - id = params
    - find all user timesheet by id from all admin timesheet
    - if timesheet not found - send empty
    - send user timesheet