create table students(
	student_id int primary key,
	student_name varchar(100),
	student_age int,		
	student_department varchar(100)
);
select * from students;

create table staffs(
	staff_id numeric primary key,
	staff_name varchar(100),
	staff_age numeric,
	staff_salary numeric
);
select * from staffs;

create table courses(
	course_id numeric primary key,
	course_name varchar(100),
	course_duration int,
	course_fees int
);
select * from courses;

create table subjects(
	subject_id numeric primary key,
	subject_name varchar(100),
	subject_topics numeric,
	subject_code varchar(100)	
);
select * from subjects;

create table topics(
	topic_id numeric primary key,
	topic_name varchar(100),
	subject_id numeric,
	topic_order numeric,
	foreign key(subject_id) references subjects(subject_id)
);
select * from topics;

create table attendances(
	attendance_id numeric primary key,
	attendance_name varchar(100),
	student_id INT,
	subject_id INT,
	date DATE,
	foreign key(student_id) references students(student_id));
select * from attendances;

create table branches(
	branch_id numeric primary key,
	branch_name varchar(100),
	branch_code varchar(100),
	location varchar(100),
	student_id INT,
	head_of_branch varchar(100),
	contact_number varchar(100),
	foreign key(student_id) references students(student_id)
);
select * from branches;

create table student_attendances(
	student_attendance_id numeric primary key,
	student_attendance_name varchar(100),
	student_id INT,
	subject_id INT,
	date DATE,
	foreign key(student_id) references students(student_id)
);
select * from student_attendances;

create table staff_attendance(
	id numeric primary key,
	staff_id numeric,
	date DATE,
	course_id numeric,
	foreign key(staff_id) references staffs(staff_id),
		foreign key(course_id) references courses(course_id)
);
select * from staff_attendance;
