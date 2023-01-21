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

- AdminAttendanceId
- userId
- CreatedAt: DateTime

AdminAttendace model -

- Time limit
- Status
- CreatedAt: DateTime
- UpdatedAt: DateTime

### Endpoints/Route

Student Endpoints -

- POST /auth/register [public]
- POST /auth/login [public]
- PUT /auth/change-password [private]

- PATCH /profiles [private]
- PATCH /profiles/avatar [private]

- GET /student/timesheet [private]
- GET /student/attendance/status [private]
- GET /student/attendance/:id [private]

Admin Endpoints -

- GET /users [private]
- GET /users/:userId [private]
- POST /users [private]
- PATCH /users/:userId [private]
- PUT /users/:userId [private]
- DELETE /users/:userId [private]

- GET /profiles [private]
- GET /profiles/:userId [private]
- POST /profiles [private]
- PATCH /profiles/:userId [private]
- DELETE /profiles/:userId [private]

- GET /admin/attendance/enable [private]
- GET /admin/attendance/status [private]
- GET /admin/attendance/disable [private]

- GET /timesheet/:userId [private]
- GET /timesheet/stats [private]

## TODO

- [x] Create Models
  - [x] User
  - [x] Profile
  - [x] Admin Attendance
  - [x] Student Attendance
- [ ] Authentication
  - [x] Registration
  - [x] Login
  - [ ] Change password
- [ ] Middleware
  - [x] Authenticate
  - [ ] Authorize
- [ ] Timesheet And Attendance
  - [ ] Get user timesheet
  - [x] Get attendance status
  - [x] Given attendance
- [x] User CURD
  - [x] Get User
  - [x] Get User by ID
  - [x] Create User
  - [x] Update User
  - [x] Delete User
- [ ] Profile CURD
  - [ ] Get Profile
  - [ ] Get Profile by ID
  - [ ] Create Profile
  - [ ] Update Profile
  - [ ] Delete Profile
- [ ] Admin control over attendance
  - [ ] Get timesheet by userId
  - [x] Enable Attendance
  - [x] Get Attendance Status
  - [x] Disable Attendance
- [ ] Generate stats
  - [ ] Timesheet stats

## Pseudo code

- ### Registration

  start
  name, email, password = input()

  if name or email or password invalid:
  return 400 error

  user = find user with email
  if user found:
  return 400 error

  hash = hash password
  user = save name, email and hash to user model
  return 201
  end

- ### Login

  start
  email, password = input()

  user = find user with email
  if user not found:
  return 400 error

  if password not equal to user.hash
  return 400 error

  token = generate token using user info
  return token
  end

- ### Change password

  - for logged user
    start
    id = token

    user = find user with id
    if user not found:
    return 400 error

    password = input()
    if password invalid:
    return 400 error

    hash = hash password
    user = update hash to user model
    return 201
    end

  - for password forgotted user
    start
    email = input()

    user = find user with email
    if user not found:
    return 400 error

    password = input()
    if password invalid:
    return 400 error

    hash = hash password
    user = update hash to user model
    return 201
    end

- ### Authenticate middleware

  start
  token = req.headers

  if token not found:
  return 401 error

  validate token with time
  if token invalid:
  return 401 error

  id = token()
  user = find user with id
  if user not found:
  return 401 error

  req.body.user = user
  next()
  end

- ### Authorize middleware

  start
  user = req.body

  roles = user.roles
  if permitted role not found:
  return 403 error

  next()
  end

- ### Get user timesheet

  start
  id = user

  timesheet = find all attendance with id
  return timesheet
  end

- ### Get attendance status

  start
  attendance = find live admin attendance
  if attendance not found:
  return disable

  user = find user form attendance
  if user found:
  return disable

  return enable
  end

- ### Given attendance

  start
  attendance = find live admin attendance
  if attendance not found:
  return 400 error

  userAttendance = save user attendance model to attendance
  return 201
  end

- ### Get Users

  start
  users = find all users
  return users
  end

- ### Get User by ID

  start
  id = req.params

  user = find user with id
  if user not found:
  return 400 error

  return user
  end

- ### Create User

  start
  name, email, password = input()

  hash = hash password
  user = save name, email and hash to user model

  return 201
  end

- ### Update User

  start
  name = input()
  id = req.params

  user = find user with id
  if user not found:
  return 400 error

  user = update name to user model
  return 201
  end

- ### Delete User

  start
  id = req.params

  user = find user with id
  if user not found:
  return 400 error

  delete user and all associated data from database
  return 204
  end

- ### Get Profiles

  start
  profiles = find all profiles
  return profiles
  end

- ### Get Profile by ID

  start
  id = req.params

  profile = find profile with id
  if profile not found:
  return 400 error

  return profile
  end

- ### Create Profile

  [ ] do later

- ### Update Profile

  start
  fristName, lastName, phone, avatar = input()
  id = req.params

  profile = find profile with id
  if profile not found:
  return 404 error

  profile = update profile with given info
  return 201
  end

- ### Delete Profile

  start
  id = req.params

  profile = find profile with id
  if profile not found:
  return 400 error

  delete profile from database
  return 204
  end

- ### Get timesheet by userId

  start
  id = req.params

  timesheet = find all attendance with id
  return timesheet
  end

- ### Enable Attendance

  start
  attendance = save new admin attendance
  return 201
  end

- ### Disable Attendance

  start
  id = req.params

  attendance = find attendance with id
  if attendance not found:
  return 400 error

  attendance = update attendance status to disable
  return 201
  end

- ### Timesheet stats

  start
  attendance = find live admin attendance

  userAttendances = find all user attendance from attendance
  return userAttendances
  end
